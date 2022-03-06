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
exports.RoutesService = void 0;
var Terminal_1 = require("../Terminal");
var routesModel_1 = require("./routesModel");
var utils_1 = require("../../utils");
var RoutesService = /** @class */ (function () {
    function RoutesService() {
        var _this = this;
        this.createRoutes = function (routeData) { return __awaiter(_this, void 0, void 0, function () {
            var terminal, arrival, exroute, newRoute;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Terminal_1.Terminals.findOneOrFail({ id: routeData.terminalId })
                            .catch(function () {
                            throw new utils_1.AppError("invalid terminal selected");
                        })];
                    case 1:
                        terminal = _a.sent();
                        return [4 /*yield*/, Terminal_1.Terminals.findOne({ name: routeData.arrivalName })];
                    case 2:
                        arrival = _a.sent();
                        if (!arrival) {
                            throw new utils_1.AppError('invalid arrival route name selected');
                        }
                        return [4 /*yield*/, routesModel_1.Routes.findOne({ where: [{
                                        route: routeData.route,
                                        terminal: routeData.terminalId
                                    }] })];
                    case 3:
                        exroute = _a.sent();
                        console.log(exroute, terminal);
                        if (exroute) {
                            throw new utils_1.AppError('route name already exists');
                        }
                        newRoute = routesModel_1.Routes.create(routeData);
                        newRoute.route = arrival.name;
                        newRoute.Terminal = terminal.name;
                        newRoute.arrivalId = arrival.id;
                        newRoute.type = routeData.type;
                        newRoute.terminal = terminal;
                        newRoute.arrivalTerminal = arrival;
                        return [4 /*yield*/, newRoute.save()
                            // const exroute = await Routes.findOne({ name: routeData.name})
                            // if(exroute){
                            //     throw new AppError('routes already exists')
                            // }
                            // const route = Routes.create(routeData)
                            // route.terminal =terminal
                            // await route.save()
                            // return route
                        ];
                    case 4: return [2 /*return*/, _a.sent()
                        // const exroute = await Routes.findOne({ name: routeData.name})
                        // if(exroute){
                        //     throw new AppError('routes already exists')
                        // }
                        // const route = Routes.create(routeData)
                        // route.terminal =terminal
                        // await route.save()
                        // return route
                    ];
                }
            });
        }); };
        this.searchRoute = function (routeData) { return __awaiter(_this, void 0, void 0, function () {
            var terminal, route;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Terminal_1.Terminals.findOneOrFail({ id: routeData.terminalId })
                            .catch(function () {
                            throw new utils_1.AppError('invalid terminal selected');
                        })];
                    case 1:
                        terminal = _a.sent();
                        return [4 /*yield*/, routesModel_1.Routes.find({ where: [{
                                        Terminal: routeData.Terminal,
                                        terminal: terminal.id
                                    }] })];
                    case 2:
                        route = _a.sent();
                        if (!route) {
                            return [2 /*return*/, "No routes exists for this terminal"];
                        }
                        return [2 /*return*/, route];
                }
            });
        }); };
    }
    return RoutesService;
}());
exports.RoutesService = RoutesService;
