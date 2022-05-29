const connectDB = require("./db/connect");

require("dotenv").config();

const express = require("express");

const app = express();

const tasks = require("./routes/tasks");

const notFound = require("./middleware/not-found");

const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));

//middleware
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 6000;

const start = async () => {
  try {
    await connectDB(process.env.Mongo_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
