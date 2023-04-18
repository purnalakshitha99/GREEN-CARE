const express = require('express');
const cors = require('cors');

const app = express();

const noticeRouter = require('./Routes/notice_routes');
const studentRouter = require('./Routes/student_routes');
//stock manager routes
const itemRouter = require('./Routes/item_routes');
// farmer routes
const farmerRouter = require('./Routes/farmer_routes');
//common routes
const AppError = require('./Utils/AppError');
const HttpError = require('./Utils/http-error');
const loginRoute = require('./Routes/login_routes');

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// routes
const base = '/api/v1';
app.use(express.json({ limit: '10kb' }));

app.use(`${base}`, loginRoute);
app.use(`${base}/stock-manager`, itemRouter);
app.use(`${base}/farmer`, farmerRouter);

// Unsupported routes handler
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
});

app.use((error, req, res, next) => {
  // this is considered as special middleware function / error handling middleware
  if (res.headerSent) {
    // we check whether the response has been already sent or not
    return next(error); // we won't send the response again
  }
  res.status(error.code || 500); // 500 means default error code , something went wrong in the server
  res.json({ message: error.message || 'An unknown error occurred!' });
});

module.exports = app;
