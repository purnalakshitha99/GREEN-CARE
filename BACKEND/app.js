const express = require("express");
const cors = require("cors");

const app = express();

const noticeRouter = require("./Routes/notice_routes");
const studentRouter = require("./Routes/student_routes");
//stock manager routes
const itemRouter = require("./Routes/item_routes");
// farmer routes
const farmerRouter = require("./Routes/farmer_routes");
//common routes
const AppError = require("./Utils/AppError");
const HttpError = require("./Utils/http-error");
//vetForm routes
const animalFormRouter = require("./Routes/animal_form_routes");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);


//consultant routes
const appointmentRouter = require("./Routes/appointment_routes")

const { default: newsRouter } = require("./Routes/news_routes"); // news routes (consultants')


// routes
const base = "/api/v1";
app.use(express.json({ limit: "10kb" }));

app.use(`${base}/stock-manager`, itemRouter);
app.use(`${base}/farmer`, farmerRouter);
app.use(`${base}/animal-form`,animalFormRouter);


// Unsupported routes handler
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});



//consultant's appoinments
app.use(`${base}/appointment`, appointmentRouter);

//consulant's news
app.use(`${base}/news`, newsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
});



app.use((error, req, res, next) => {
  // this is considered as special middleware function / error handling middleware
  if (res.headerSent) {
    // we check whether the response has been already sent or not
    return next(error); // we won't send the response again
  }
  res.status(error.code || 500); // 500 means default error code , something went wrong in the server
  res.json({ message: error.message || "An unknown error occurred!" });
});

module.exports = app;
