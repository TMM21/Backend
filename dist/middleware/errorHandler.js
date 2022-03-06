"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var logger_1 = require("../utils/logger");
exports.default = (function (err, req, res, next) {
    if (!err.isOperational) {
        if (config_1.ENVIRONMENT !== "development") {
            logger_1.logger.error("An unexpected error occurred please restart the application!", "\nError: " + err.message + " Stack: " + err.stack);
            process.exit(1);
        }
    }
    logger_1.logger.error("".concat(err.statusCode || 500, " - ").concat(err.message, " - ").concat(req.originalUrl, " - ").concat(req.method, " - ").concat(req.ip, " - Stack: ").concat(err.stack));
    err.stack = err.stack || "";
    var errorDetails = {
        status: false,
        message: err.message,
        statusCode: err.statusCode || 500,
        data: err.data,
        stack: err.stack,
    };
    if (config_1.ENVIRONMENT === "production") {
        delete (errorDetails.stack);
    }
    res.status(err.statusCode || 500);
    return res.json(errorDetails);
});
