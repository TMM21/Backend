"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var app_root_path_1 = __importDefault(require("app-root-path"));
var winston_1 = require("winston");
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, printf = winston_1.format.printf;
var logFormat = printf(function (info) {
    return "".concat(info.timestamp, " [").concat(info.level, "]: ").concat(info.message);
});
var options = {
    error: {
        level: "error",
        filename: "".concat(app_root_path_1.default, "/logs/error.log"),
        handleExceptions: true,
        format: combine(timestamp(), logFormat),
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    combined: {
        level: "info",
        filename: "".concat(app_root_path_1.default, "/logs/app.log"),
        handleExceptions: true,
        format: combine(timestamp(), logFormat),
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: "debug",
        levels: winston_1.config.npm.levels,
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
// instantiate a new Winston Logger with the settings defined above
exports.logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    transports: [
        new winston_1.transports.File(options.error),
        new winston_1.transports.File(options.combined),
    ],
    exitOnError: false, // do not exit on handled exceptions
});
// If we're not in production then log to the `console` with the format:
// commented out to allow heruko logs
// if (ENVIRONMENT !== "production") {
exports.logger.add(new winston_1.transports.Console({
    format: combine(winston_1.format.colorize(), logFormat),
}));
// }
