class AppError extends Error {
  constructor(message, stausCode) {
    super(message);

    this.statusCode = this.statusCode;
    this.status = `${this.statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
