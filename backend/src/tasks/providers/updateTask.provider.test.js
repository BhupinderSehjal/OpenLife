const { beforeEach, describe, test, mock } = require('node:test');
const assert = require('node:assert/strict');
const { StatusCodes } = require('http-status-codes');
const Task = require('../task.schema.js');
const updateTaskProvider = require('./updateTask.provider.js');

function createResponse() {
  const response = {
    statusCode: undefined,
    body: undefined,
    status: mock.fn(function status(code) {
      this.statusCode = code;
      return this;
    }),
    json: mock.fn(function json(body) {
      this.body = body;
      return this;
    }),
  };

  return response;
}

describe('updateTask provider', () => {
  beforeEach(() => {
    mock.restoreAll();
  });

  test('should return 404 when task does not exist', async () => {
    mock.method(Task, 'findById', () => ({
      exec: async () => null,
    }));

    const req = { body: { _id: 'non-existent-id' } };
    const res = createResponse();

    await updateTaskProvider(req, res);

    assert.strictEqual(res.statusCode, StatusCodes.NOT_FOUND);
    assert.deepStrictEqual(res.body, { reason: 'Task not found' });
  });

  test('should update and save task successfully when task exists', async () => {
    const existingTask = {
      _id: 'task-123',
      title: 'Old Title',
      description: 'Old Description',
      dueDate: '2026-09-01',
      priority: 'low',
      period: 'today',
      status: 'pending',
      save: mock.fn(async function save() {
        return this;
      }),
    };

    mock.method(Task, 'findById', () => ({
      exec: async () => existingTask,
    }));

    const req = {
      body: { _id: 'task-123' },
    };
    const res = createResponse();

    await updateTaskProvider(req, res);

    assert.strictEqual(res.statusCode, StatusCodes.OK);
    assert.strictEqual(existingTask.save.mock.calls.length, 1);
  });

  test('should return 504 gateway timeout on database failure', async () => {
    mock.method(Task, 'findById', () => ({
      exec: async () => {
        throw new Error('Database connection failed');
      },
    }));

    const req = { body: { _id: 'task-123' } };
    const res = createResponse();

    await updateTaskProvider(req, res);

    assert.strictEqual(res.statusCode, StatusCodes.GATEWAY_TIMEOUT);
    assert.deepStrictEqual(res.body, {
      reason: 'Unable to process your request at the moment, please try later.',
    });
  });
});
