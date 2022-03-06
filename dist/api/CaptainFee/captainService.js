"use strict";
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
exports.CapTainService = void 0;
var vehicle_1 = require("../vehicle");
var captainModel_1 = require("./captainModel");
var utils_1 = require("../../utils");
var CapTainService = /** @class */ (function () {
    function CapTainService() {
        var _this = this;
        this.createCaptainFee = function (trip, vehicle, transitData, route) { return __awaiter(_this, void 0, void 0, function () {
            var isAvailable, fee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, captainModel_1.CaptainFee.find({ where: [{
                                    NameOfCaptain: vehicle.PC,
                                    TravelDate: transitData.travelDate,
                                    Route: "".concat(route.Terminal, " - ").concat(route.route)
                                }] })];
                    case 1:
                        isAvailable = _a.sent();
                        if (isAvailable.length > 0) {
                            throw new utils_1.AppError('captain fee has already been created');
                        }
                        fee = captainModel_1.CaptainFee.create();
                        fee.TravelDate = transitData.travelDate;
                        fee.NameOfCaptain = vehicle.PC;
                        fee.Route = "".concat(route.Terminal, " - ").concat(route.route);
                        if (route.type === "short route") {
                            fee.fee = 1500;
                            fee.RouteType = route.type;
                        }
                        else if (route.type === "medium route") {
                            fee.fee = 2000;
                            fee.RouteType = route.type;
                        }
                        else {
                            fee.fee = 2500;
                            fee.RouteType = route.type;
                        }
                        return [4 /*yield*/, fee.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, "captain fee created"];
                }
            });
        }); };
        this.getCaptainFee = function (fee, user) { return __awaiter(_this, void 0, void 0, function () {
            var vehicle, captain, num, amount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (!user.priviledges.includes("captain")) {
                            throw new utils_1.AppError('UnAuthorize', null, 404);
                        }
                        return [4 /*yield*/, vehicle_1.Vehicles.findOneOrFail({ where: [{
                                        id: fee.id
                                    }] })
                                .catch(function () {
                                throw new utils_1.AppError('invalid vehicle selected');
                            })];
                    case 1:
                        vehicle = _a.sent();
                        return [4 /*yield*/, captainModel_1.CaptainFee.find({ where: [{
                                        NameOfCaptain: vehicle.PC
                                    }] })];
                    case 2:
                        captain = _a.sent();
                        if (captain.length <= 0) {
                            return [2 /*return*/, "No fee for this captain"];
                        }
                        num = captain.map(function (item) { return item.fee; });
                        amount = num.reduce(function (acc, value) {
                            return acc + value;
                        }, 0);
                        return [2 /*return*/, { amount: amount, captain: captain }];
                }
            });
        }); };
    }
    return CapTainService;
}());
exports.CapTainService = CapTainService;
