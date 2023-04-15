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

// farmer routes
const farmerRouter = require("./Routes/farmer_routes");

//common routes
const AppError = require("./Utils/AppError");

const base = "/api/v1";
app.use(express.json({ limit: "10kb" }));

// app.use(`${base}/notices`, noticeRouter);
// app.use(`${base}/student`, studentRouter);
app.use(`${base}/stock-manager`, itemRouter);
app.use(`${base}/farmer`, farmerRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
});

app.use((error, req, res, next) => { // this is considered as special middleware function / error handling middleware
  if(res.headerSent){ // we check whether the response has been already sent or not
    return next(error);  // we won't send the response again
  }
  res.status(error.code || 500);   // 500 means default error code , something went wrong in the server
  res.json({message:error.message || "An unknown error occurred!"});
});

module.exports = app;
