const test = require("node:test");
const assert = require("node:assert/strict");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");

let matchedDataValue;
let userByEmailResult;
let compareCalls;
let compareResult;

const expressValidatorPath = require.resolve("express-validator");
const getUserByEmailPath = require.resolve("../../users/providers/getUserByEmail.provider.js");
const generateTokenPath = require.resolve("./generateToken.provider.js");
const errorLoggerPath = require.resolve("../../helpers/errorLogger.helper.js");

require.cache[expressValidatorPath] = {
  id: expressValidatorPath,
  filename: expressValidatorPath,
  loaded: true,
  exports: {
    matchedData: () => matchedDataValue,
  },
};

require.cache[getUserByEmailPath] = {
  id: getUserByEmailPath,
  filename: getUserByEmailPath,
  loaded: true,
  exports: async () => userByEmailResult,
};

require.cache[generateTokenPath] = {
  id: generateTokenPath,
  filename: generateTokenPath,
  loaded: true,
  exports: () => "test-token",
};

require.cache[errorLoggerPath] = {
  id: errorLoggerPath,
  filename: errorLoggerPath,
  loaded: true,
  exports: () => {},
};

bcrypt.compare = async (...args) => {
  compareCalls.push(args);
  return compareResult;
};

const loginProvider = require("./login.provider.js");

function createResponse() {
  return {
    statusCode: undefined,
    body: undefined,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
}

function resetState() {
  matchedDataValue = {
    email: "user@example.com",
    password: "password",
  };
  userByEmailResult = null;
  compareCalls = [];
  compareResult = false;
}

test("loginProvider returns invalid credentials when the email is unknown", async () => {
  resetState();
  const res = createResponse();

  await loginProvider({}, res);

  assert.equal(compareCalls.length, 0);
  assert.equal(res.statusCode, StatusCodes.BAD_REQUEST);
  assert.deepEqual(res.body, { message: "Please check your credentials." });
});

test("loginProvider returns invalid credentials when the password is incorrect", async () => {
  resetState();
  userByEmailResult = {
    email: "user@example.com",
    password: "hashed-password",
  };
  const res = createResponse();

  await loginProvider({}, res);

  assert.deepEqual(compareCalls, [["password", "hashed-password"]]);
  assert.equal(res.statusCode, StatusCodes.BAD_REQUEST);
  assert.deepEqual(res.body, { message: "Please check your credentials." });
});
