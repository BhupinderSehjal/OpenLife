const { query } = require("express-validator");

const getTasksValidator = [
  query("limit", "limit must be a valid integer").optional().isInt().toInt({min:1}),
  query("limit").customSanitizer((value) => {
    return value ? value : 3; // default limit to 3 if not provided
  }),
  query("page", "page must be a valid integer").optional().isInt().toInt({min:1}),
  query("page").customSanitizer((value) => {
    return value ? value : 1; // default skip/page is 1 if not provided
  }),
  query("order", "order must be one of ['asc', 'desc']")
    .optional()
    .isIn(["asc", "desc"]),
    query("order").customSanitizer((value) => {
    return value ? value : "asc"; // default order is asc if not provided
  }),
  query("period", "period must be one of ['daily', 'weekly', 'monthly', 'yearly']")
    .optional()
    .isIn(["daily", "monthly", "weekly", "yearly"]),

];

module.exports = getTasksValidator;