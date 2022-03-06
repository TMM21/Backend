"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYSTACK_SECRET_KEY = exports.APP_NAME = exports.SMS_RETRIEVE_TOKEN = exports.SMS_FROM = exports.TWILIO_TOKEN = exports.TWILIO_SID = exports.JWT_EXPIRY_TIME = exports.JWT_SECRET = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.DB_NAME = exports.BASE_PATH = exports.APP_URL = exports.ENVIRONMENT = exports.PORT = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.PORT = process.env.PORT;
exports.ENVIRONMENT = process.env.NODE_ENV;
exports.APP_URL = process.env.APP_URL;
exports.BASE_PATH = process.env.BASE_PATH;
exports.DB_NAME = process.env.DB_NAME;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_HOST = process.env.DB_HOST;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY_TIME = process.env.JWT_EXPIRY_TIME;
exports.TWILIO_SID = process.env.TWILIO_SID;
exports.TWILIO_TOKEN = process.env.TWILIO_TOKEN;
exports.SMS_FROM = process.env.SMS_FROM;
exports.SMS_RETRIEVE_TOKEN = process.env.SMS_RETRIEVE_TOKEN;
exports.APP_NAME = process.env.APP_NAME;
exports.PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
