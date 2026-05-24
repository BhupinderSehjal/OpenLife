const { describe, test, mock } = require('node:test');
const assert = require('node:assert/strict');

describe('deleteTask provider', () => {
  beforeEach(() => {
    mock.restoreAll();
  });

  test('should delete task successfully', async () => {
    const taskModel = require('../models/taskModel');
    mock.method(taskModel, 'deleteById', async (id) => ({ deleted: true, id }));
    const { deleteTask } = require('./deleteTask.provider');
    const result = await deleteTask('task-1');
    assert.ok(result.deleted);
    assert.strictEqual(taskModel.deleteById.mock.calls.length, 1);
    assert.strictEqual(taskModel.deleteById.mock.calls[0].arguments[0], 'task-1');
  });

  test('should throw not found error when task does not exist', async () => {
    const taskModel = require('../models/taskModel');
    mock.method(taskModel, 'deleteById', async () => {
      const error = new Error('Task not found');
      error.code = 'NOT_FOUND';
      throw error;
    });
    const { deleteTask } = require('./deleteTask.provider');
    await assert.rejects(
      async () => await deleteTask('nonexistent'),
      { message: 'Task not found' }
    );
  });
});
