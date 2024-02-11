require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");

const express = require("express");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);

//tratando errors
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      error: "Error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    error: "Error",
    message: "Internal server error",
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
