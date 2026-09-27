const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Set the default environment
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Load environment variables from different files based on environment
const envFile = `.env.${process.env.NODE_ENV}`;

// Configure dotenv before importing the app
dotenv.config({ path: envFile });

const app = require("./app.js");

const port = parseInt(process.env.PORT) || 3001;

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });

    console.log("Connected To MongoDB");

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);

    /**
     * An exit code of 1 typically indicates that there was an error
     * or abnormal termination of the program.
     */
    process.exit(1);
  }
}

bootstrap();