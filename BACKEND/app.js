const express = require("express");
const cors = require("cors");

const app = express();
const noticeRouter = require("./Routes/notice_routes");
const studentRouter = require("./Routes/student_routes");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//stock manager routes
const itemRouter = require("./Routes/item_routes");

//other routes with name
const appointmentRouter = require("./Routes/appointment_routes")

//common routes
const AppError = require("./Utils/AppError");
const { default: newsRouter } = require("./Routes/news_routes"); // news routes (consultants')

const base = "/api/v1";
app.use(express.json({ limit: "10kb" }));

// app.use(`${base}/notices`, noticeRouter);
// app.use(`${base}/student`, studentRouter);
app.use(`${base}/stock-manager`, itemRouter);

//consultant's appoinments
app.use(`${base}/appointment`, appointmentRouter);

//consulant's news
app.use(`${base}/news`, newsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
