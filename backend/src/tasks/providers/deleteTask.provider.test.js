const { beforeEach, describe, test, mock } = require('node:test');
const assert = require('node:assert/strict');
const { StatusCodes } = require('http-status-codes');
const Task = require('../task.schema.js');
const deleteTaskProvider = require('./deleteTask.provider.js');

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

describe('deleteTask provider', () => {
  beforeEach(() => {
    mock.restoreAll();
  });

  test('should delete task successfully', async () => {
    const deleteResult = { acknowledged: true, deletedCount: 1 };
    mock.method(Task, 'deleteOne', async () => deleteResult);

    const req = { body: { _id: 'task-1' } };
    const res = createResponse();

    await deleteTaskProvider(req, res);

    assert.deepStrictEqual(Task.deleteOne.mock.calls[0].arguments[0], { _id: 'task-1' });
    assert.strictEqual(res.statusCode, StatusCodes.OK);
    assert.deepStrictEqual(res.body, deleteResult);
  });

  test('should return not found when task does not exist', async () => {
    mock.method(Task, 'deleteOne', async () => ({ acknowledged: true, deletedCount: 0 }));

    const req = { body: { _id: 'missing-task' } };
    const res = createResponse();

    await deleteTaskProvider(req, res);

    assert.deepStrictEqual(Task.deleteOne.mock.calls[0].arguments[0], { _id: 'missing-task' });
    assert.strictEqual(res.statusCode, StatusCodes.NOT_FOUND);
    assert.deepStrictEqual(res.body, { reason: 'Task not found' });
  });
});
