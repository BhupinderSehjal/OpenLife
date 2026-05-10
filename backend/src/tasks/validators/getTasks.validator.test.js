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

describe("getTasksValidator", () => {
  it("defaults missing order to asc", async () => {
    const result = await validate();

    expect(result.errors.isEmpty()).toBe(true);
    expect(result.data.order).toBe("asc");
  });

  it("allows asc order", async () => {
    const result = await validate({ order: "asc" });

    expect(result.errors.isEmpty()).toBe(true);
    expect(result.data.order).toBe("asc");
  });

  it("allows desc order", async () => {
    const result = await validate({ order: "desc" });

    expect(result.errors.isEmpty()).toBe(true);
    expect(result.data.order).toBe("desc");
  });

  it("rejects dsc order", async () => {
    const result = await validate({ order: "dsc" });

    expect(result.errors.isEmpty()).toBe(false);
  });

  it("rejects invalid order", async () => {
    const result = await validate({ order: "invalid" });

    expect(result.errors.isEmpty()).toBe(false);
  });

  it("allows provided period", async () => {
    const result = await validate({ period: "weekly" });

    expect(result.errors.isEmpty()).toBe(true);
    expect(result.data.period).toBe("weekly");
  });

  it("does not default missing period", async () => {
    const result = await validate();

    expect(result.errors.isEmpty()).toBe(true);
    expect(result.data.period).toBeUndefined();
  });
});
