const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const getUserByEmail = require("../../users/providers/getUserByEmail.provider.js");
const loginProvider = require("./login.provider.js");

jest.mock("express-validator", () => ({
  matchedData: jest.fn(),
}));

jest.mock("../../users/providers/getUserByEmail.provider.js");
jest.mock("bcrypt");
jest.mock("./generateToken.provider.js");
jest.mock("../../helpers/errorLogger.helper.js");

describe("loginProvider", () => {
  const req = {};
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    jest.clearAllMocks();
    matchedData.mockReturnValue({
      email: "user@example.com",
      password: "password",
    });
  });

  it("returns invalid credentials when the email is unknown", async () => {
    getUserByEmail.mockResolvedValue(null);

    await loginProvider(req, res);

    expect(bcrypt.compare).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toHaveBeenCalledWith({ message: "Please check your credentials." });
  });

  it("returns invalid credentials when the password is incorrect", async () => {
    getUserByEmail.mockResolvedValue({
      email: "user@example.com",
      password: "hashed-password",
    });
    bcrypt.compare.mockResolvedValue(false);

    await loginProvider(req, res);

    expect(bcrypt.compare).toHaveBeenCalledWith("password", "hashed-password");
    expect(res.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toHaveBeenCalledWith({ message: "Please check your credentials." });
  });
});
