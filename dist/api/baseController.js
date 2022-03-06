"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var enums_1 = require("./../enums");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    // tslint:disable-next-line:max-line-length
    BaseController.prototype.sendResponse = function (_a) {
        var data = _a.data, _b = _a.message, message = _b === void 0 ? "OK" : _b, _c = _a.statusCode, statusCode = _c === void 0 ? enums_1.HttpStatusCode.OK : _c, _d = _a.status, status = _d === void 0 ? true : _d, _e = _a.total, total = _e === void 0 ? null : _e;
        return { data: data, message: message, statusCode: statusCode, status: status, total: total };
    };
    return BaseController;
}());
exports.BaseController = BaseController;
