const{matchedData} = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");
const getUserByEmail = require("../../users/providers/getUserByEmail.provider.js");
const bcrypt = require("bcrypt");
const generateTokenProvider = require("./generateToken.provider.js");

async function loginProvider(req, res) {

   const validatedData = matchedData(req);
 try {
     // Get the user from the database
    const user = await getUserByEmail(validatedData.email);

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please check your credentials." });
    }

    // Compare password to hash
    const result = await bcrypt.compare(validatedData.password, user.password);

    if (!result) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please check your credentials." });
    }

        // Generate Access token
    const token = generateTokenProvider(user);

    return res.status(StatusCodes.OK).json({
      accessToken: token,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      _id: user._id,
      imagepath: user.imagepath,
    });

  } catch (error) {
    errorLogger("Error while trying to login: ", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later.",
    });
  }
}
module.exports = loginProvider;
