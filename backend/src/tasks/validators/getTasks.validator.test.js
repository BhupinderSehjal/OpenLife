const test = require("node:test");
const assert = require("node:assert/strict");
const { matchedData, validationResult } = require("express-validator");
const getTasksValidator = require("./getTasks.validator.js");

async function validate(query = {}) {
  const req = { query };

  await Promise.all(getTasksValidator.map((validator) => validator.run(req)));

  return {
    data: matchedData(req),
    errors: validationResult(req),
  };
}

test("getTasksValidator defaults missing order to asc", async () => {
  const result = await validate();

  assert.equal(result.errors.isEmpty(), true);
  assert.equal(result.data.order, "asc");
});

test("getTasksValidator allows asc order", async () => {
  const result = await validate({ order: "asc" });

  assert.equal(result.errors.isEmpty(), true);
  assert.equal(result.data.order, "asc");
});

test("getTasksValidator allows desc order", async () => {
  const result = await validate({ order: "desc" });

  assert.equal(result.errors.isEmpty(), true);
  assert.equal(result.data.order, "desc");
});

test("getTasksValidator rejects dsc order", async () => {
  const result = await validate({ order: "dsc" });

  assert.equal(result.errors.isEmpty(), false);
});

test("getTasksValidator rejects invalid order", async () => {
  const result = await validate({ order: "invalid" });

  assert.equal(result.errors.isEmpty(), false);
});

test("getTasksValidator allows provided period", async () => {
  const result = await validate({ period: "weekly" });

  assert.equal(result.errors.isEmpty(), true);
  assert.equal(result.data.period, "weekly");
});

test("getTasksValidator does not default missing period", async () => {
  const result = await validate();

  assert.equal(result.errors.isEmpty(), true);
  assert.equal(result.data.period, undefined);
});
