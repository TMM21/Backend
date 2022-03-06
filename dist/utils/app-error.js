"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
var enums_1 = require("../enums");
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(message, data, statusCode, isOperational) {
        if (data === void 0) { data = null; }
        if (statusCode === void 0) { statusCode = enums_1.HttpStatusCode.BAD_REQUEST; }
        if (isOperational === void 0) { isOperational = true; }
        var _this = _super.call(this, message) || this;
        Error.captureStackTrace(_this, AppError);
        _this.message = message;
        _this.statusCode = statusCode;
        _this.isOperational = isOperational;
        _this.data = data;
        return _this;
    }
    return AppError;
}(Error));
exports.AppError = AppError;
