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
exports.TerminalService = void 0;
var terminalModel_1 = require("./terminalModel");
var State_1 = require("../State");
var Lga_1 = require("../Lga");
var utils_1 = require("../../utils");
var Routes_1 = require("../Routes");
var Trips_1 = require("../Trips");
var TerminalService = /** @class */ (function () {
    function TerminalService() {
        var _this = this;
        this.createTerminal = function (terminalData, user) { return __awaiter(_this, void 0, void 0, function () {
            var lga, state, tempTerminal, terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.priviledges.includes('admin')) return [3 /*break*/, 5];
                        console.log('hello');
                        return [4 /*yield*/, Lga_1.LGA.findOneOrFail({ id: terminalData.lgaId }).catch(function () {
                                throw new utils_1.AppError('invalid lga selected');
                            })];
                    case 1:
                        lga = _a.sent();
                        return [4 /*yield*/, State_1.States.findOneOrFail({
                                id: terminalData.stateId,
                            }).catch(function () {
                                throw new utils_1.AppError('invalid state selected');
                            })];
                    case 2:
                        state = _a.sent();
                        return [4 /*yield*/, terminalModel_1.Terminals.findOne({ name: terminalData.name })];
                    case 3:
                        tempTerminal = _a.sent();
                        if (tempTerminal) {
                            throw new utils_1.AppError('terminal already exists');
                        }
                        terminal = terminalModel_1.Terminals.create(terminalData);
                        terminal.state = state;
                        terminal.lga = lga;
                        return [4 /*yield*/, terminal.save()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: throw new utils_1.AppError('UnAuthorized', null, 404);
                }
            });
        }); };
        this.deleteTerminal = function (id, user) { return __awaiter(_this, void 0, void 0, function () {
            var terminal, route;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.priviledges.includes('admin')) return [3 /*break*/, 4];
                        return [4 /*yield*/, terminalModel_1.Terminals.findOneOrFail({ id: id }).catch(function () {
                                throw new utils_1.AppError('invalid terminal selected');
                            })];
                    case 1:
                        terminal = _a.sent();
                        return [4 /*yield*/, Routes_1.Routes.find({ where: [{ terminal: terminal.id }] })];
                    case 2:
                        route = _a.sent();
                        console.log(route);
                        try {
                            route.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var trip;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Trips_1.Trips.find({ where: [{ route: item.id }] })];
                                        case 1:
                                            trip = _a.sent();
                                            trip.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                var seat;
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, Trips_1.Seats.find({ where: [{ trip: item.id }] })];
                                                        case 1:
                                                            seat = _a.sent();
                                                            seat.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, Trips_1.Seats.getRepository().delete({ id: item.id })];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); });
                                                            return [4 /*yield*/, Trips_1.Trips.getRepository().delete({ id: item.id })];
                                                        case 2:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            return [4 /*yield*/, Routes_1.Routes.getRepository().delete({ id: item.id })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        catch (error) {
                            console.log(error);
                        }
                        return [4 /*yield*/, terminalModel_1.Terminals.getRepository().delete({ id: terminal.id })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 'terminal deleted'];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getTerminal = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, terminalModel_1.Terminals.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
    }
    return TerminalService;
}());
exports.TerminalService = TerminalService;
