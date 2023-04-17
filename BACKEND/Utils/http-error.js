class HttpError extends Error{
    constructor(message, errorCode){
        super(message); // add a message property
        this.code = errorCode; // aa the error code
    }
}

module.exports = HttpError;