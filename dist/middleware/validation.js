"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
var lodash_1 = __importDefault(require("lodash"));
var enums_1 = require("../enums");
/**
 *  Validates incoming input in the body of a request.
 *  Runs only on POST or PUT requests
 *
 * @export
 * @param {*} schema validationSchema for this route
 * @returns
 */
var validation = function (schema, options) {
    // enabled HTTP methods for request data validation
    var _supportedMethods = ["post", "put", "patch",];
    // Joi validation options
    var _validationOptions = __assign({ abortEarly: true, allowUnknown: true, stripUnknown: true }, options);
    // return the validation middleware
    return function (req, res, next) {
        var method = req.method.toLowerCase();
        if (lodash_1.default.includes(_supportedMethods, method) && schema) {
            try {
                /**
                 * Validate req.body using the schema and validation options
                 * Replace req.body with the data after Joi validation
                 */
                req.body = joi_1.default.attempt(req.body, schema, _validationOptions);
                next();
            }
            catch (error) {
                var message = error.details[0].message.replace(/['"]/g, "");
                /* Format response */
                var JoiError = {
                    status: false,
                    message: message,
                };
                res.status(enums_1.HttpStatusCode.UNPROCESSABLE_ENTITY).json(JoiError);
            }
        }
        else {
            next();
        }
    };
};
exports.validation = validation;
