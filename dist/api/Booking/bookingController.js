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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingControler = void 0;
var baseController_1 = require("../baseController");
var bookingService_1 = require("./bookingService");
var enums_1 = require("../../enums");
var BookingControler = /** @class */ (function (_super) {
    __extends(BookingControler, _super);
    function BookingControler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.service = new bookingService_1.BookingService();
        //CUSTOMER BOOKING
        _this.BookATrip = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.BookATrip(bookingData, user)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: data, statusCode: enums_1.HttpStatusCode.CREATED })];
                }
            });
        }); };
        //get ref
        _this.Reference = function (id, user) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.Reference(id, user)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: data, statusCode: enums_1.HttpStatusCode.OK })];
                }
            });
        }); };
        //searchBooking
        _this.searchBooking = function (search, user) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.SearchBooking(search, user)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: data, statusCode: enums_1.HttpStatusCode.OK })];
                }
            });
        }); };
        //USER BOOKING
        _this.UserBooking = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.UserBooking(bookingData, user)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: data, statusCode: enums_1.HttpStatusCode.CREATED })];
                }
            });
        }); };
        _this.UnAuthBooking = function (bookingData) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.BookATrip(bookingData)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: data, message: "booking successfull", statusCode: enums_1.HttpStatusCode.OK })];
                }
            });
        }); };
        _this.AssignBus = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var bus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.assignus(bookingData, user)];
                    case 1:
                        bus = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: bus, message: "vehicle assigned", statusCode: enums_1.HttpStatusCode.CREATED })];
                }
            });
        }); };
        _this.GetBookingWithVehicles = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var booking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.GetBookingWithVehicles(bookingData, user)];
                    case 1:
                        booking = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: booking, message: "fetched", statusCode: enums_1.HttpStatusCode.OK })];
                }
            });
        }); };
        _this.updateBookingStatus = function (update, user) { return __awaiter(_this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.updataBookingStatus(update, user)];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: status, message: "booking updated", statusCode: enums_1.HttpStatusCode.OK })];
                }
            });
        }); };
        _this.vehicleStatus = function (vehicleStatus, user) { return __awaiter(_this, void 0, void 0, function () {
            var vehicle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.vehicleArrived(vehicleStatus, user)];
                    case 1:
                        vehicle = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: vehicle, message: "vehicle status updated", statusCode: enums_1.HttpStatusCode.OK })];
                }
            });
        }); };
        _this.InTransitVehicle = function (transitData, user) { return __awaiter(_this, void 0, void 0, function () {
            var transit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.InTransit(transitData, user)];
                    case 1:
                        transit = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: transit })];
                }
            });
        }); };
        _this.changeToDelay = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.changeToDelay(bookingData, user)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: data })];
                }
            });
        }); };
        _this.changePassengerTrip = function (bookingData) { return __awaiter(_this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.changePassengerStatus(bookingData)];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: status })];
                }
            });
        }); };
        _this.printManifest = function (manifest, user) { return __awaiter(_this, void 0, void 0, function () {
            var vehicle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.PrintManifest(manifest, user)];
                    case 1:
                        vehicle = _a.sent();
                        return [2 /*return*/, this.sendResponse({ data: vehicle, statusCode: enums_1.HttpStatusCode.OK })];
                }
            });
        }); };
        return _this;
    }
    return BookingControler;
}(baseController_1.BaseController));
exports.BookingControler = BookingControler;
