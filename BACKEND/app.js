const express = require("express");
const cors = require("cors");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const app = express();
const report = require("./Models/createreport_model");
const noticeRouter = require("./Routes/notice_routes");
const studentRouter = require("./Routes/student_routes");
//stock manager routes
const itemRouter = require("./Routes/item_routes");
// farmer routes
const farmerRouter = require("./Routes/farmer_routes");
//field visitor route
const fieldvisitor = require("./Routes/fieldvisitor_routes");
// create report route
const reportcreate = require("./Routes/createreport_routes");
const damagereportcreate = require("./Routes/damagereport_route");
//common routes

//manager routes
const ManagerRouter = require("./Routes/manager_routes");

const appointmentRouter = require("./Routes/appointment_routes");

const { default: newsRouter } = require("./Routes/news_routes"); // news routes (consultants')

const AppError = require("./Utils/AppError");
const HttpError = require("./Utils/http-error");
const loginRoute = require("./Routes/login_routes");
const damageReport = require("./Models/damagereport_model");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//consultant routes

// routes
const base = "/api/v1";
app.use(express.json({ limit: "10kb" }));

app.use(`${base}`, loginRoute);
app.use(`${base}/stock-manager`, itemRouter);
app.use(`${base}/farmer`, farmerRouter);
//consultant's appoinments
app.use(`${base}/appointment`, appointmentRouter);
app.use(`${base}/fieldvisitor`, fieldvisitor);
app.use(`${base}/reportcreate`, reportcreate);
app.use(`${base}/damagereportcreate`, damagereportcreate);

app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use("/uploads2", express.static(__dirname + "/uploads2"));

app.post("/newpost2", async (req, res) => {
  // const { originalname, path } = req.file;
  // const parts = originalname.split(".");
  // const ext = parts[parts.length - 1];
  // const newPath = path + "." + ext;
  // fs.renameSync(path, newPath);
  console.log("hhh");
  const {
    firstname,
    lastname,
    email,
    arrival,
    depature,
    problem,
    solution,
    date,
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !arrival ||
    !depature ||
    !problem ||
    !solution ||
    !date
  ) {
    return res.status(400).json({ message: " fields are empty" });
  }
  const postDoc = await report.create({
    firstname,
    lastname,
    email,
    arrival,
    depature,
    date,
    problem,
    solution,
    cover: newPath,
  });
  res
    .status(201)
    .json({ message: "Resource created successfully", data: postDoc });
});


// photo upload part for damage report

app.post("/newpost", uploadMiddleware.single("file"), async (req, res) => {
  console.log(req.body.d_departure);
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const {
    fullname,
    email,
    phonenumber,
    d_arrival,
    d_departure,
    date,
    damagedetails,
  } = req.body;

  if (
    !fullname ||
    !phonenumber ||
    !d_arrival ||
    !d_departure ||
    !email ||
    !date ||
    !damagedetails
  ) {
    return res.status(400).json({ message: " fields are empty now" });
  }
  const postDoc = await damageReport.create({
    fullname,
    email,
    phonenumber,
    d_arrival,
    d_departure,
    date,
    damagedetails,
    cover: newPath,
  });
  res
    .status(201)
    .json({ message: "Resource created successfully", data: postDoc });
});

//consulant's news
app.use(`${base}/news`, newsRouter);

// Unsupported routes handler
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

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
