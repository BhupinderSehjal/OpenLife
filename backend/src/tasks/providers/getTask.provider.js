const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");

async function getTasksProvider(req, res) {
  const data = matchedData(req);

  try {
    const currentPage = data.page;
    const limit = data.limit;
    const order = data.order;
    const period = data.period;

    const skip = (currentPage - 1) * limit;


    const filter = {
      status: { $in: ["todo", "inProgress"] },
    };

    if (period) {
      filter.period = period;
    }

    const countFilter = period
      ? { period }
      : {};


    const totalTasks = await Task.countDocuments(filter);

    const completedTasks = await Task.countDocuments({
      status: "completed",
      ...countFilter,
    });

    const todoTasks = await Task.countDocuments({
      status: "todo",
      ...countFilter,
    });

    const inProgressTasks = await Task.countDocuments({
      status: "inProgress",
      ...countFilter,
    });

    const totalPages = Math.ceil(totalTasks / limit);
    const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
    const previousPage = currentPage === 1 ? currentPage : currentPage - 1;

   
    const baseUrl = `${req.protocol}://${req.get("host")}${
      req.originalUrl.split("?")[0]
    }`;


    const tasks = await Task.find(filter)
      .limit(limit)
      .skip(skip)
      .sort({
        createdAt: order === "desc" ? -1 : 1,
      });

 
    const finalResponse = {
      data: tasks,
      pagination: {
        meta: {
          itemsPerPage: limit,
          totalItems: totalTasks,
          currentPage,
          totalPages,
          completedTasks,
          todoTasks,
          inProgressTasks,
        },
        links: {
          first: `${baseUrl}?limit=${limit}&page=1&order=${order}`,
          last: `${baseUrl}?limit=${limit}&page=${totalPages}&order=${order}`,
          current: `${baseUrl}?limit=${limit}&page=${currentPage}&order=${order}`,
          next: `${baseUrl}?limit=${limit}&page=${nextPage}&order=${order}`,
          previous: `${baseUrl}?limit=${limit}&page=${previousPage}&order=${order}`,
        },
      },
    };

    return res.status(StatusCodes.OK).json(finalResponse);
  } catch (error) {
    errorLogger("Error while fetching task: ", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later.",
    });
  }
}

module.exports = getTasksProvider;
