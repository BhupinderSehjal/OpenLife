const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const createTaskProvider = require("./providers/createTask.provider.js");
const getTasksProvider = require("./providers/getTask.provider.js");
const updateTaskProvider = require("./providers/updateTask.provider.js");
const deleteTaskProvider = require("./providers/deleteTask.provider.js");

async function handleGetTask(req, res) {
 return await getTasksProvider(req, res);
}

async function handlePostTask(req, res) {
  return await createTaskProvider(req, res);
}

async function handlePatchTask(req, res) {
  try {
    const updatedTask = await updateTaskProvider(req);
    if (!updatedTask) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Task not found' });
    }
    return res.status(StatusCodes.OK).json(updatedTask);
  } catch (error) {
    errorLogger("Error while updating task: ", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later.",
    });
  }
}

async function handleDeleteTask(req, res) {
   return await deleteTaskProvider(req, res);
}

module.exports = {
    handleGetTask,
    handlePostTask,
    handlePatchTask,
    handleDeleteTask,
};