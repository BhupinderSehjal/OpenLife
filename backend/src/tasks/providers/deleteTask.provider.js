const Task = require("../task.schema.js");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
async function deleteTaskProvider(req, res) {
  // Find the task first
  /**
   * Notice that we use the exec() Mongoose function. This is technically optional and returns a promise. In my experience, it’s better to use this function since it will prevent some head-scratching issues. If you want to read more about it, check out this note in the Mongoose docs about
   * promises
   * .
   */
 try {
    const result = await Task.deleteOne({ _id: req.body["_id"] });
    if (result.deletedCount === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ reason: "Task not found" });
    }
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    errorLogger("Error while deleting task: ", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later.",
    });
  }
}
module.exports = deleteTaskProvider;
