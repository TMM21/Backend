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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripService = void 0;
var tripModel_1 = require("./tripModel");
var Routes_1 = require("../Routes");
var utils_1 = require("../../utils");
var vehicleType_1 = require("../vehicleType");
var seatModel_1 = require("./seatModel");
var dayjs_1 = __importDefault(require("dayjs"));
var Booking_1 = require("../Booking");
var enums_1 = require("../../enums");
var typeorm_plus_1 = require("typeorm-plus");
var TripService = /** @class */ (function () {
    function TripService() {
        var _this = this;
        this.createTrip = function (tripData, user) { return __awaiter(_this, void 0, void 0, function () {
            var isValid, route, type, trip, newTrip, seat, i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(user);
                        if (user.block) {
                            throw new utils_1.AppError("UnAuthorized");
                        }
                        isValid = user.priviledges.includes("admin");
                        if (!isValid) {
                            throw new utils_1.AppError("UnAuthorized", null, 404);
                        }
                        return [4 /*yield*/, Routes_1.Routes.findOneOrFail({ id: tripData.routeId })
                                .catch(function () {
                                throw new utils_1.AppError("invalid route");
                            })];
                    case 1:
                        route = _b.sent();
                        return [4 /*yield*/, vehicleType_1.VehicleType.findOneOrFail({ id: tripData.typeId })
                                .catch(function () {
                                throw new utils_1.AppError('invalid vehicle type selected');
                            })];
                    case 2:
                        type = _b.sent();
                        console.log(route, type);
                        return [4 /*yield*/, tripModel_1.Trips.findOne({ where: [{
                                        schedule: tripData.schedule,
                                        route: tripData.routeId
                                    }] })];
                    case 3:
                        trip = _b.sent();
                        if (trip) {
                            throw new utils_1.AppError('schedule already exists');
                        }
                        newTrip = tripModel_1.Trips.create(tripData);
                        seat = [];
                        for (i = 1; i <= type.seatNumber; i++) {
                            seat.push({ seatNumber: i, });
                        }
                        _a = newTrip;
                        return [4 /*yield*/, seatModel_1.Seats.save(seat)];
                    case 4:
                        _a.seat = _b.sent();
                        newTrip.type = type;
                        newTrip.route = route;
                        newTrip.Days = tripData.day;
                        return [4 /*yield*/, newTrip.save()];
                    case 5: return [2 /*return*/, _b.sent()];
                }
            });
        }); };
        this.searchTrip = function (tripData) { return __awaiter(_this, void 0, void 0, function () {
            var day, trips, searchResult, _i, trips_1, trip, available, booking, _loop_1, _a, booking_1, book, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        day = (0, dayjs_1.default)(tripData.travelDate).format('dddd').toLowerCase();
                        return [4 /*yield*/, tripModel_1.Trips.find({ where: [{
                                        route: tripData.routeId
                                    }], relations: ['type', 'seat', 'route'] })];
                    case 1:
                        trips = _b.sent();
                        if (!trips) {
                            throw new utils_1.AppError('invalid trip selected');
                        }
                        searchResult = [];
                        _i = 0, trips_1 = trips;
                        _b.label = 2;
                    case 2:
                        if (!(_i < trips_1.length)) return [3 /*break*/, 7];
                        trip = trips_1[_i];
                        available = trip.Days.includes(day);
                        console.log(available);
                        if (!available) {
                            trip.TripStatus = enums_1.TripStatus.NOTAVAILABLE;
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, Booking_1.Bookings.find({ where: [{
                                        trip: trip.id,
                                        ConfirmedTravelDate: tripData.travelDate,
                                        service: "book_a_seat",
                                        bookingStatus: (0, typeorm_plus_1.Not)(enums_1.BookingStatus.DELAY)
                                    }], relations: ["passengerId"] })];
                    case 4:
                        booking = _b.sent();
                        if (booking.length === 0) {
                            searchResult.push(trip);
                        }
                        else {
                            _loop_1 = function (book) {
                                trip.seat = trip.seat.filter(function (item) { return item.id !== book.seat; });
                            };
                            for (_a = 0, booking_1 = booking; _a < booking_1.length; _a++) {
                                book = booking_1[_a];
                                _loop_1(book);
                            }
                            searchResult.push(trip);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        throw new utils_1.AppError(error_1);
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, searchResult];
                }
            });
        }); };
        this.updateTrip = function (id, trips, user) { return __awaiter(_this, void 0, void 0, function () {
            var trip, updates, allowed, isAllowed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tripModel_1.Trips.findOneOrFail({ id: id })
                            .catch(function () {
                            throw new utils_1.AppError('invalid trip selected');
                        })];
                    case 1:
                        trip = _a.sent();
                        updates = Object.keys(trips);
                        allowed = ["price", 'schedule',];
                        isAllowed = updates.every(function (item) { return allowed.includes(item); });
                        if (!isAllowed) {
                            throw new utils_1.AppError('invalid updates');
                        }
                        updates.forEach(function (item) { return trip[item] = trips[item]; });
                        return [4 /*yield*/, trip.save()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.updateDay = function (id, day, user) { return __awaiter(_this, void 0, void 0, function () {
            var newDay, AllowedUpdates, isAllowed, trip, _i, newDay_1, days;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newDay = day.day.map(function (item) { return item.toLowerCase(); });
                        AllowedUpdates = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
                        isAllowed = newDay.every(function (item) { return AllowedUpdates.includes(item); });
                        if (!isAllowed) {
                            throw new utils_1.AppError('invalid day selected');
                        }
                        return [4 /*yield*/, tripModel_1.Trips.findOneOrFail({ id: id })
                                .catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 1:
                        trip = _a.sent();
                        for (_i = 0, newDay_1 = newDay; _i < newDay_1.length; _i++) {
                            days = newDay_1[_i];
                            if (trip.Days.includes(days)) {
                                return [2 /*return*/, null];
                            }
                            trip.Days.push(days);
                        }
                        return [4 /*yield*/, trip.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, "updated"];
                }
            });
        }); };
        this.deleteDay = function (id, user) { return __awaiter(_this, void 0, void 0, function () {
            var trip, seat;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tripModel_1.Trips.findOneOrFail({ where: [{
                                    id: id
                                }], relations: ["seat"] })
                            .catch(function () {
                            throw new utils_1.AppError('invalid trip selected');
                        })];
                    case 1:
                        trip = _a.sent();
                        return [4 /*yield*/, seatModel_1.Seats.find({ where: [{
                                        trip: trip.id
                                    }] })];
                    case 2:
                        seat = _a.sent();
                        seat.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, seatModel_1.Seats.getRepository().delete({ id: item.id })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, tripModel_1.Trips.getRepository().delete({ id: trip.id })
                            // await trip.save()
                        ];
                    case 3:
                        _a.sent();
                        // await trip.save()
                        return [2 /*return*/, 'trip deleted'];
                }
            });
        }); };
        this.getTrip = function () { return __awaiter(_this, void 0, void 0, function () {
            var trip, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, tripModel_1.Trips.find({ where: [{}], relations: ["route"] })];
                    case 1:
                        trip = _a.sent();
                        return [2 /*return*/, trip];
                    case 2:
                        error_2 = _a.sent();
                        throw new utils_1.AppError(error_2);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return TripService;
}());
exports.TripService = TripService;
