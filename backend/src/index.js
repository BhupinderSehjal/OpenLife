const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const configureApp = require("./settings/config.js");

// Set the defaul environment
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Load Environment variables from different files based on environment
const envFile = `.env.${process.env.NODE_ENV}`;

// configure dotenv earlier in application
dotenv.config({ path: envFile });

const app = express();
const port = parseInt(process.env.PORT) || 3001;

//  Parsing request body
app.use(express.json());

configureApp(app);
async function bootstrap() {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL,
      { dbName: process.env.DATABASE_NAME }
    );
    console.log("Connnected To MongoDB");

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });

  } catch (error) {
    console.error(error);
    /** An exit code of 1 typically indicates that there was an error or abnormal termination of the program, which is often used to signal failure in scenarios where the program encounters critical issues that prevent normal operation. */
    process.exit(1);
  }
}

bootstrap();
