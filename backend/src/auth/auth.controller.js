const loginProvider = require("./providers/login.provider.js");

async function handlelogin(req, res) {
   try {
      const result = await loginProvider(req, res);

      if (result && result.success === false && !res.headersSent) {
         return res.status(result.status || result.statusCode || 401).json({ message: "Invalid email or password" });
      }

      return result;
   } catch (error) {
      if (!res.headersSent) {
         return res.status(error.status || error.statusCode || 401).json({ message: "Invalid email or password" });
      }
   }
}

module.exports = {
    handlelogin,
};