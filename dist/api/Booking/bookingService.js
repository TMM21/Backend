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
exports.BookingService = void 0;
var utils_1 = require("../../utils");
var dayjs_1 = __importDefault(require("dayjs"));
var Trips_1 = require("../Trips");
var typeorm_plus_1 = require("typeorm-plus");
var bookingModel_1 = require("./bookingModel");
var Profile_1 = require("../Profile");
var vehicle_1 = require("../vehicle");
var vehicleType_1 = require("../vehicleType");
var Passenger_1 = require("../Passenger");
var enums_1 = require("../../enums");
var Payment_1 = require("../Payment");
var CaptainFee_1 = require("../CaptainFee");
var Routes_1 = require("../Routes");
var Terminal_1 = require("../Terminal");
var vehicleLocation_1 = require("../vehicleLocation");
var typeorm_plus_2 = require("typeorm-plus");
var BookingService = /** @class */ (function () {
    function BookingService() {
        //customer booking
        var _this = this;
        this.BookATrip = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var trip, date, available, payment, bookingModels, _i, _a, passenger, profile, bookingModel, passengers, month, day, hour, min, sec, milli, ref, bookings, trip, ReturnTrip, date, available, Return, isAvailable, payment, profile, bookingModels, _b, _c, roundTripPassenger, bookingModel, month, day, hour, min, sec, milli, refe, passenger, bookings, returnBookingModels, _d, _e, returnPasenger, bookingModel, month, day, hour, min, sec, milli, ref, passenger, returnBookings, trip, bookingModels, profile, _f, _g, passenger, bookingModel, passengers, booking, trip, ReturnTrip, date, available, Return, isAvailable, profile, bookingModels, _h, _j, passengers, bookingModel, passenger, booking, ReturnBookingModels, _k, _l, returnPassenger, ReturnBookingModel, returnPassengers, ReturnBooking;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        if (bookingData.referenceId === '') {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (!(bookingData.service === 'book_a_seat')) return [3 /*break*/, 29];
                        if (!(bookingData.type === 'one_way')) return [3 /*break*/, 10];
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.tripId,
                                    },
                                ],
                                relations: ['route'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 1:
                        trip = _m.sent();
                        date = (0, dayjs_1.default)(bookingData.travelDate).format('dddd').toLowerCase();
                        available = trip.Days.includes(date);
                        if (!available) {
                            throw new utils_1.AppError("Trip is not available for ".concat(date));
                        }
                        console.log(trip);
                        return [4 /*yield*/, this.verifySeat(trip.id, bookingData.seat, bookingData.numberOfTravellers, bookingData.travelDate)];
                    case 2:
                        _m.sent();
                        return [4 /*yield*/, this.verifyPayment(trip.price, bookingData.referenceId, bookingData.numberOfTravellers, user)];
                    case 3:
                        payment = _m.sent();
                        bookingModels = [];
                        _i = 0, _a = bookingData.passenger;
                        _m.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        passenger = _a[_i];
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 5:
                        profile = _m.sent();
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        passengers = Passenger_1.Passengers.create(passenger);
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        passengers.user = user;
                        passengers.profile = profile;
                        return [4 /*yield*/, passengers.save()];
                    case 6:
                        _m.sent();
                        bookingModel.passengerId = passengers;
                        bookingModel.amount = trip.price;
                        bookingModel.trip = trip;
                        bookingModel.seat = passenger.seat;
                        bookingModel.DepartureTerminal = trip.route.Terminal;
                        bookingModel.ArrivalTerminal = trip.route.route;
                        bookingModel.payment = payment;
                        (bookingModel.paymentType = enums_1.paymentType.CARD),
                            (bookingModel.schedule = trip.schedule);
                        bookingModel.service = bookingData.service;
                        bookingModel.type = bookingData.type;
                        bookingModel.numberOfTravellers = 1;
                        bookingModel.referenceId = ref;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModel.pickupLocation = bookingData.pickupLocation;
                        bookingModels.push(bookingModel);
                        _m.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 4];
                    case 8: return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 9:
                        bookings = _m.sent();
                        return [2 /*return*/, bookings];
                    case 10:
                        if (!(bookingData.type === 'round_trip')) return [3 /*break*/, 27];
                        if (!bookingData.returnTripId ||
                            !bookingData.ReturnSeat ||
                            !bookingData.returnDate) {
                            throw new utils_1.AppError('incomplete Data');
                        }
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.tripId,
                                    },
                                ],
                                relations: ['route'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 11:
                        trip = _m.sent();
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.returnTripId,
                                    },
                                ],
                                relations: ['route'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid return trip');
                            })];
                    case 12:
                        ReturnTrip = _m.sent();
                        date = (0, dayjs_1.default)(bookingData.travelDate).format('dddd').toLowerCase();
                        available = trip.Days.includes(date);
                        if (!available) {
                            throw new utils_1.AppError("Trip is not available for ".concat(date));
                        }
                        Return = (0, dayjs_1.default)(bookingData.returnDate)
                            .format('dddd')
                            .toLowerCase();
                        isAvailable = ReturnTrip.Days.includes(Return);
                        if (!isAvailable) {
                            throw new utils_1.AppError('Trip Return Date is not available for this trip');
                        }
                        return [4 /*yield*/, this.verifySeat(trip.id, bookingData.seat, bookingData.numberOfTravellers, bookingData.travelDate)];
                    case 13:
                        _m.sent();
                        return [4 /*yield*/, this.verifySeat(ReturnTrip.id, bookingData.ReturnSeat, bookingData.numberOfTravellers, bookingData.returnDate)];
                    case 14:
                        _m.sent();
                        return [4 /*yield*/, this.OneWayRounTrip(trip.price, bookingData.numberOfTravellers, bookingData.referenceId, user)];
                    case 15:
                        payment = _m.sent();
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 16:
                        profile = _m.sent();
                        bookingModels = [];
                        _b = 0, _c = bookingData.passenger;
                        _m.label = 17;
                    case 17:
                        if (!(_b < _c.length)) return [3 /*break*/, 20];
                        roundTripPassenger = _c[_b];
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        refe = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        passenger = Passenger_1.Passengers.create(roundTripPassenger);
                        passenger.user = user;
                        passenger.profile = profile;
                        return [4 /*yield*/, passenger.save()];
                    case 18:
                        passenger = _m.sent();
                        bookingModel.passengerId = passenger;
                        bookingModel.trip = trip;
                        bookingModel.DepartureTerminal = trip.route.Terminal;
                        bookingModel.ArrivalTerminal = trip.route.route;
                        bookingModel.payment = payment;
                        bookingModel.amount = trip.price;
                        bookingModel.paymentType = enums_1.paymentType.CARD;
                        bookingModel.schedule = trip.schedule;
                        bookingModel.seat = roundTripPassenger.seat;
                        bookingModel.ReturnSeat = roundTripPassenger.ReturnSeat;
                        bookingModel.service = bookingData.service;
                        bookingModel.type = bookingData.type;
                        bookingModel.ReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedReturnTripId = bookingData.returnTripId;
                        bookingModel.numberOfTravellers = 1;
                        bookingModel.referenceId = refe;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModels.push(bookingModel);
                        _m.label = 19;
                    case 19:
                        _b++;
                        return [3 /*break*/, 17];
                    case 20: return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 21:
                        bookings = _m.sent();
                        returnBookingModels = [];
                        _d = 0, _e = bookingData.passenger;
                        _m.label = 22;
                    case 22:
                        if (!(_d < _e.length)) return [3 /*break*/, 25];
                        returnPasenger = _e[_d];
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        passenger = Passenger_1.Passengers.create(returnPasenger);
                        passenger.user = user;
                        passenger.profile = profile;
                        return [4 /*yield*/, passenger.save()];
                    case 23:
                        passenger = _m.sent();
                        bookingModel.passengerId = passenger;
                        bookingModel.trip = ReturnTrip;
                        bookingModel.ConfirmedReturnTripId = bookingData.returnTripId;
                        bookingModel.ReturnTripId = ReturnTrip.id;
                        bookingModel.seat = passenger.seat;
                        bookingModel.DepartureTerminal = ReturnTrip.route.Terminal;
                        bookingModel.ArrivalTerminal = ReturnTrip.route.route;
                        bookingModel.amount = trip.price;
                        bookingModel.ReturnSeat = returnPasenger.ReturnSeat;
                        bookingModel.payment = payment;
                        bookingModel.paymentType = enums_1.paymentType.CARD;
                        bookingModel.schedule = ReturnTrip.schedule;
                        bookingModel.service = bookingData.service;
                        bookingModel.type = bookingData.type;
                        bookingModel.numberOfTravellers = 1;
                        bookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        bookingModel.referenceId = ref;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.ReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedTravelDate = bookingData.returnDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        returnBookingModels.push(bookingModel);
                        _m.label = 24;
                    case 24:
                        _d++;
                        return [3 /*break*/, 22];
                    case 25: return [4 /*yield*/, bookingModel_1.Bookings.save(returnBookingModels)];
                    case 26:
                        returnBookings = _m.sent();
                        return [2 /*return*/, { bookings: bookings, returnBookings: returnBookings }];
                    case 27: throw new utils_1.AppError('invalid booking type selected');
                    case 28: return [3 /*break*/, 54];
                    case 29:
                        if (!(bookingData.service == 'hire_service')) return [3 /*break*/, 53];
                        if (!(bookingData.type == 'one_way')) return [3 /*break*/, 37];
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.tripId,
                                    },
                                ],
                                relations: ['route'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 30:
                        trip = _m.sent();
                        bookingModels = [];
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 31:
                        profile = _m.sent();
                        _f = 0, _g = bookingData.passenger;
                        _m.label = 32;
                    case 32:
                        if (!(_f < _g.length)) return [3 /*break*/, 35];
                        passenger = _g[_f];
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        passengers = Passenger_1.Passengers.create(passenger);
                        passengers.profile = profile;
                        passengers.user = user;
                        return [4 /*yield*/, passengers.save()];
                    case 33:
                        _m.sent();
                        bookingModel.trip = trip;
                        bookingModel.passengerId = passengers;
                        bookingModel.referenceId = bookingData.referenceId;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.schedule = trip.schedule;
                        (bookingModel.DepartureTerminal = trip.route.Terminal),
                            (bookingModel.ArrivalTerminal = trip.route.route);
                        bookingModel.amount = trip.price;
                        bookingModel.numberOfTravellers = 5;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModel.type = bookingData.type;
                        bookingModel.service = bookingData.service;
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModels.push(bookingModel);
                        _m.label = 34;
                    case 34:
                        _f++;
                        return [3 /*break*/, 32];
                    case 35: return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 36:
                        booking = _m.sent();
                        return [2 /*return*/, booking];
                    case 37:
                        if (!(bookingData.type == 'round_trip')) return [3 /*break*/, 51];
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.tripId,
                                    },
                                ],
                                relations: ['route'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 38:
                        trip = _m.sent();
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.returnTripId,
                                    },
                                ],
                                relations: ['route'],
                            })];
                    case 39:
                        ReturnTrip = _m.sent();
                        date = (0, dayjs_1.default)(bookingData.travelDate).format('dddd').toLowerCase();
                        available = trip.Days.includes(date);
                        if (!available) {
                            throw new utils_1.AppError("Trip is not available for ".concat(date));
                        }
                        Return = (0, dayjs_1.default)(bookingData.returnDate)
                            .format('dddd')
                            .toLowerCase();
                        isAvailable = ReturnTrip.Days.includes(Return);
                        if (!isAvailable) {
                            throw new utils_1.AppError('Trip Return DAte is not available for this trip');
                        }
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 40:
                        profile = _m.sent();
                        bookingModels = [];
                        _h = 0, _j = bookingData.passenger;
                        _m.label = 41;
                    case 41:
                        if (!(_h < _j.length)) return [3 /*break*/, 44];
                        passengers = _j[_h];
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        passenger = Passenger_1.Passengers.create(passengers);
                        passenger.user = user;
                        passenger.profile = profile;
                        return [4 /*yield*/, passenger.save()];
                    case 42:
                        _m.sent();
                        bookingModel.trip = trip;
                        bookingModel.passengerId = passenger;
                        bookingModel.ReturnTripId = ReturnTrip.id;
                        bookingModel.ConfirmedReturnTripId = ReturnTrip.id;
                        bookingModel.amount = trip.price;
                        (bookingModel.DepartureTerminal = trip.route.Terminal),
                            (bookingModel.ArrivalTerminal = trip.route.route),
                            (bookingModel.TravelDate = bookingData.travelDate);
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModel.ReturnDate = bookingData.returnDate;
                        bookingModel.schedule = trip.schedule;
                        bookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModel.numberOfTravellers = 7;
                        bookingModel.referenceId = bookingData.referenceId;
                        bookingModel.type = bookingData.type;
                        bookingModel.service = bookingData.service;
                        bookingModels.push(bookingModel);
                        _m.label = 43;
                    case 43:
                        _h++;
                        return [3 /*break*/, 41];
                    case 44: return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 45:
                        booking = _m.sent();
                        ReturnBookingModels = [];
                        _k = 0, _l = bookingData.passenger;
                        _m.label = 46;
                    case 46:
                        if (!(_k < _l.length)) return [3 /*break*/, 49];
                        returnPassenger = _l[_k];
                        ReturnBookingModel = bookingModel_1.Bookings.create(bookingData);
                        returnPassengers = Passenger_1.Passengers.create(returnPassenger);
                        returnPassengers.user = user;
                        returnPassengers.profile = profile;
                        return [4 /*yield*/, returnPassengers.save()];
                    case 47:
                        _m.sent();
                        console.log(returnPassengers);
                        ReturnBookingModel.passengerId = returnPassengers;
                        ReturnBookingModel.referenceId = bookingData.referenceId;
                        ReturnBookingModel.amount = trip.price;
                        ReturnBookingModel.trip = ReturnTrip;
                        ReturnBookingModel.DepartureTerminal = ReturnTrip.route.Terminal;
                        ReturnBookingModel.ArrivalTerminal = ReturnTrip.route.route;
                        ReturnBookingModel.ConfirmedTripId = ReturnTrip.id;
                        ReturnBookingModel.ReturnTripId = ReturnTrip.id;
                        ReturnBookingModel.schedule = ReturnTrip.schedule;
                        ReturnBookingModel.ConfirmedReturnTripId = ReturnTrip.id;
                        ReturnBookingModel.TravelDate = bookingData.returnDate;
                        ReturnBookingModel.ConfirmedTravelDate = bookingData.returnDate;
                        ReturnBookingModel.ReturnDate = bookingData.returnDate;
                        ReturnBookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        ReturnBookingModel.numberOfTravellers = 7;
                        ReturnBookingModel.service = bookingData.service;
                        ReturnBookingModel.type = bookingData.type;
                        ReturnBookingModels.push(ReturnBookingModel);
                        _m.label = 48;
                    case 48:
                        _k++;
                        return [3 /*break*/, 46];
                    case 49: return [4 /*yield*/, bookingModel_1.Bookings.save(ReturnBookingModels)];
                    case 50:
                        ReturnBooking = _m.sent();
                        return [2 /*return*/, { booking: booking, ReturnBooking: ReturnBooking }];
                    case 51: throw new utils_1.AppError('invalid service type selected');
                    case 52: return [3 /*break*/, 54];
                    case 53: throw new utils_1.AppError('invalid service type selected');
                    case 54: return [2 /*return*/];
                }
            });
        }); };
        this.verifySeat = function (id, seat, passengers, TravelDate) { return __awaiter(_this, void 0, void 0, function () {
            var seats, bookedSeat, _i, seat_1, newSeat, book, unAvailable, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Trips_1.Seats.find({
                            where: [
                                {
                                    id: (0, typeorm_plus_1.In)(seat),
                                    trip: id,
                                },
                            ],
                        })];
                    case 1:
                        seats = _a.sent();
                        if (!seats || seats.length == 0) {
                            throw new utils_1.AppError('invalid seat id selected');
                        }
                        else if (seats.length != Number(passengers)) {
                            throw new utils_1.AppError("Please select ".concat(passengers, " seats. Only ").concat(seats.length, " selected!"), seats);
                        }
                        bookedSeat = [];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 8]);
                        _i = 0, seat_1 = seat;
                        _a.label = 3;
                    case 3:
                        if (!(_i < seat_1.length)) return [3 /*break*/, 6];
                        newSeat = seat_1[_i];
                        return [4 /*yield*/, bookingModel_1.Bookings.findOne({
                                where: [
                                    {
                                        seat: newSeat,
                                        TravelDate: TravelDate,
                                        service: enums_1.BOOK.BOOK_A_SEAT,
                                    },
                                ],
                            })];
                    case 4:
                        book = _a.sent();
                        bookedSeat.push(book);
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        unAvailable = bookedSeat.includes(undefined);
                        console.log(unAvailable, bookedSeat);
                        if (!unAvailable || bookedSeat === []) {
                            throw new utils_1.AppError('seat already booked');
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        throw new utils_1.AppError(error_1);
                    case 8: return [2 /*return*/, seats];
                }
            });
        }); };
        this.UserBooking = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var Authorized, trip, payment, date, available, payments, bookingModels, _i, _a, passenger, profile, bookingModel, passengers, month, day, hour, min, sec, milli, ref, book, error_2, ReturnTrip, date, available, Return, isAvailable, amount, profile, payments, bookingModels, _b, _c, roundTrip, bookingModel, month, day, hour, min, sec, milli, ref, passenger, bookings, returnBookingModels, _d, _e, returnPasenger, bookingModel, month, day, hour, min, sec, milli, ref, passenger, returnBookings, bookingModels, profile, payments, _f, _g, passenger, month, day, hour, min, sec, milli, ref, bookingModel, passengers, booking, ReturnTrip, profile, bookingModels, payments, _h, _j, passengers, bookingModel, month, day, hour, min, sec, milli, ref, passenger, booking, ReturnBookingModels, _k, _l, returnPassenger, month, day, hour, min, sec, milli, ref, ReturnBookingModel, returnPassengers, returnBooking;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        if (user.block === true) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        Authorized = user.priviledges.includes('ticket');
                        if (!Authorized) {
                            console.log('hello');
                        }
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.tripId,
                                    },
                                ],
                                relations: ['route'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 1:
                        trip = _m.sent();
                        payment = {
                            amount: String(trip.price),
                            method: 'offline',
                            status: 'paid',
                            referenceId: user.id,
                        };
                        if (!(bookingData.service === 'book_a_seat')) return [3 /*break*/, 31];
                        if (!(bookingData.type === 'one_way')) return [3 /*break*/, 13];
                        date = (0, dayjs_1.default)(bookingData.travelDate).format('dddd').toLowerCase();
                        available = trip.Days.includes(date);
                        if (!available) {
                            throw new utils_1.AppError("Trip is not available for ".concat(date));
                        }
                        return [4 /*yield*/, this.verifySeat(trip.id, bookingData.seat, bookingData.numberOfTravellers, bookingData.travelDate)];
                    case 2:
                        _m.sent();
                        return [4 /*yield*/, Payment_1.Payments.create(payment).save()];
                    case 3:
                        payments = _m.sent();
                        bookingModels = [];
                        _i = 0, _a = bookingData.passenger;
                        _m.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        passenger = _a[_i];
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 5:
                        profile = _m.sent();
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        passengers = Passenger_1.Passengers.create(passenger);
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        passengers.user = user;
                        passengers.profile = profile;
                        return [4 /*yield*/, passengers.save()];
                    case 6:
                        _m.sent();
                        bookingModel.passengerId = passengers;
                        bookingModel.profile = profile;
                        bookingModel.trip = trip;
                        bookingModel.seat = passenger.seat;
                        bookingModel.ArrivalTerminal = trip.route.route;
                        bookingModel.DepartureTerminal = trip.route.Terminal;
                        bookingModel.amount = bookingData.amount;
                        bookingModel.payment = payments;
                        bookingModel.passengerId = passengers;
                        (bookingModel.paymentType = bookingData.paymentType),
                            (bookingModel.schedule = trip.schedule);
                        bookingModel.service = bookingData.service;
                        bookingModel.type = bookingData.type;
                        bookingModel.numberOfTravellers = 1;
                        bookingModel.referenceId = ref;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModel.pickupLocation = bookingData.pickupLocation;
                        bookingModels.push(bookingModel);
                        _m.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 4];
                    case 8:
                        console.log(bookingModels);
                        _m.label = 9;
                    case 9:
                        _m.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 10:
                        book = _m.sent();
                        return [2 /*return*/, book];
                    case 11:
                        error_2 = _m.sent();
                        console.log(error_2);
                        return [3 /*break*/, 12];
                    case 12: return [3 /*break*/, 30];
                    case 13:
                        if (!(bookingData.type === 'round_trip')) return [3 /*break*/, 29];
                        if (!bookingData.returnTripId ||
                            !bookingData.ReturnSeat ||
                            !bookingData.returnDate) {
                            throw new utils_1.AppError('incomplete Data');
                        }
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                id: bookingData.returnTripId,
                            }).catch(function () {
                                throw new utils_1.AppError('invalid return trip');
                            })];
                    case 14:
                        ReturnTrip = _m.sent();
                        date = (0, dayjs_1.default)(bookingData.travelDate).format('dddd').toLowerCase();
                        available = trip.Days.includes(date);
                        if (!available) {
                            throw new utils_1.AppError("Trip is not available for ".concat(date));
                        }
                        Return = (0, dayjs_1.default)(bookingData.returnDate)
                            .format('dddd')
                            .toLowerCase();
                        isAvailable = ReturnTrip.Days.includes(Return);
                        if (!isAvailable) {
                            throw new utils_1.AppError('Trip Return Date is not available for this trip');
                        }
                        amount = Number(bookingData.amount / bookingData.numberOfTravellers);
                        return [4 /*yield*/, this.verifySeat(trip.id, bookingData.seat, bookingData.numberOfTravellers, bookingData.travelDate)];
                    case 15:
                        _m.sent();
                        return [4 /*yield*/, this.verifySeat(ReturnTrip.id, bookingData.ReturnSeat, bookingData.numberOfTravellers, bookingData.returnDate)];
                    case 16:
                        _m.sent();
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 17:
                        profile = _m.sent();
                        return [4 /*yield*/, Payment_1.Payments.create(payment).save()];
                    case 18:
                        payments = _m.sent();
                        console.log(amount);
                        bookingModels = [];
                        _b = 0, _c = bookingData.passenger;
                        _m.label = 19;
                    case 19:
                        if (!(_b < _c.length)) return [3 /*break*/, 22];
                        roundTrip = _c[_b];
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        passenger = Passenger_1.Passengers.create(roundTrip);
                        passenger.user = user;
                        passenger.profile = profile;
                        return [4 /*yield*/, passenger.save()];
                    case 20:
                        passenger = _m.sent();
                        bookingModel.passengerId = passenger;
                        bookingModel.trip = trip;
                        bookingModel.payment = payments;
                        bookingModel.amount = trip.price;
                        (bookingModel.referenceId = ref),
                            (bookingModel.paymentType = bookingData.paymentType);
                        bookingModel.schedule = trip.schedule;
                        bookingModel.seat = roundTrip.seat;
                        bookingModel.ReturnSeat = roundTrip.ReturnSeat;
                        bookingModel.service = bookingData.service;
                        bookingModel.type = bookingData.type;
                        bookingModel.ReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedReturnTripId = bookingData.returnTripId;
                        bookingModel.numberOfTravellers = 1;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModels.push(bookingModel);
                        _m.label = 21;
                    case 21:
                        _b++;
                        return [3 /*break*/, 19];
                    case 22: return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 23:
                        bookings = _m.sent();
                        returnBookingModels = [];
                        _d = 0, _e = bookingData.passenger;
                        _m.label = 24;
                    case 24:
                        if (!(_d < _e.length)) return [3 /*break*/, 27];
                        returnPasenger = _e[_d];
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        passenger = Passenger_1.Passengers.create(returnPasenger);
                        passenger.user = user;
                        passenger.profile = profile;
                        return [4 /*yield*/, passenger.save()];
                    case 25:
                        passenger = _m.sent();
                        bookingModel.passengerId = passenger;
                        bookingModel.trip = ReturnTrip;
                        bookingModel.ConfirmedReturnTripId = bookingData.returnTripId;
                        bookingModel.ReturnTripId = ReturnTrip.id;
                        bookingModel.seat = passenger.seat;
                        bookingModel.amount = trip.price;
                        bookingModel.ReturnSeat = returnPasenger.ReturnSeat;
                        bookingModel.payment = payments;
                        bookingModel.paymentType = bookingData.paymentType;
                        bookingModel.schedule = ReturnTrip.schedule;
                        bookingModel.service = bookingData.service;
                        bookingModel.type = bookingData.type;
                        bookingModel.numberOfTravellers = 1;
                        bookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        bookingModel.referenceId = ref;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.ReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedTravelDate = bookingData.returnDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        returnBookingModels.push(bookingModel);
                        _m.label = 26;
                    case 26:
                        _d++;
                        return [3 /*break*/, 24];
                    case 27: return [4 /*yield*/, bookingModel_1.Bookings.save(returnBookingModels)];
                    case 28:
                        returnBookings = _m.sent();
                        return [2 /*return*/, { bookings: bookings, returnBookings: returnBookings }];
                    case 29: throw new utils_1.AppError('invalid booking type selected');
                    case 30: return [3 /*break*/, 56];
                    case 31:
                        if (!(bookingData.service === 'hire_service')) return [3 /*break*/, 55];
                        if (!(bookingData.type === 'one_way')) return [3 /*break*/, 39];
                        bookingModels = [];
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 32:
                        profile = _m.sent();
                        return [4 /*yield*/, Payment_1.Payments.create(payment).save()];
                    case 33:
                        payments = _m.sent();
                        _f = 0, _g = bookingData.passenger;
                        _m.label = 34;
                    case 34:
                        if (!(_f < _g.length)) return [3 /*break*/, 37];
                        passenger = _g[_f];
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        bookingModel = bookingModel_1.Bookings.create(bookingData);
                        passengers = Passenger_1.Passengers.create(passenger);
                        passengers.profile = profile;
                        passengers.user = user;
                        return [4 /*yield*/, passengers.save()];
                    case 35:
                        _m.sent();
                        bookingModel.trip = trip;
                        bookingModel.passengerId = passengers;
                        bookingModel.referenceId = ref;
                        bookingModel.TravelDate = bookingData.travelDate;
                        (bookingModel.schedule = trip.schedule),
                            (bookingModel.payment = payments);
                        bookingModel.amount = trip.price;
                        bookingModel.numberOfTravellers = 7;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModel.type = bookingData.type;
                        bookingModel.service = bookingData.service;
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModel.paymentType = bookingData.paymentType;
                        bookingModels.push(bookingModel);
                        _m.label = 36;
                    case 36:
                        _f++;
                        return [3 /*break*/, 34];
                    case 37: return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 38:
                        booking = _m.sent();
                        return [2 /*return*/, booking];
                    case 39:
                        if (!(bookingData.type === 'round_trip')) return [3 /*break*/, 53];
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                id: bookingData.returnTripId,
                            })];
                    case 40:
                        ReturnTrip = _m.sent();
                        return [4 /*yield*/, Profile_1.Profile.create(bookingData.profile).save()];
                    case 41:
                        profile = _m.sent();
                        bookingModels = [];
                        return [4 /*yield*/, Payment_1.Payments.create(payment).save()];
                    case 42:
                        payments = _m.sent();
                        _h = 0, _j = bookingData.passenger;
                        _m.label = 43;
                    case 43:
                        if (!(_h < _j.length)) return [3 /*break*/, 46];
                        passengers = _j[_h];
                        bookingModel = bookingModel_1.Bookings.create(passengers);
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        passenger = Passenger_1.Passengers.create(passengers);
                        passenger.user = user;
                        passenger.profile = profile;
                        return [4 /*yield*/, passenger.save()];
                    case 44:
                        _m.sent();
                        bookingModel.payment = payments;
                        bookingModel.referenceId = ref;
                        bookingModel.paymentType = bookingData.paymentType;
                        bookingModel.trip = trip;
                        bookingModel.passengerId = passenger;
                        bookingModel.ReturnTripId = ReturnTrip.id;
                        bookingModel.ConfirmedReturnTripId = ReturnTrip.id;
                        bookingModel.amount = trip.price;
                        bookingModel.TravelDate = bookingData.travelDate;
                        bookingModel.ConfirmedTravelDate = bookingData.travelDate;
                        bookingModel.ReturnDate = bookingData.returnDate;
                        bookingModel.schedule = trip.schedule;
                        bookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        bookingModel.ConfirmedTripId = trip.id;
                        bookingModel.numberOfTravellers = 7;
                        bookingModel.type = bookingData.type;
                        bookingModel.service = bookingData.service;
                        bookingModels.push(bookingModel);
                        _m.label = 45;
                    case 45:
                        _h++;
                        return [3 /*break*/, 43];
                    case 46: return [4 /*yield*/, bookingModel_1.Bookings.save(bookingModels)];
                    case 47:
                        booking = _m.sent();
                        ReturnBookingModels = [];
                        _k = 0, _l = bookingData.passenger;
                        _m.label = 48;
                    case 48:
                        if (!(_k < _l.length)) return [3 /*break*/, 51];
                        returnPassenger = _l[_k];
                        month = (0, dayjs_1.default)(new Date()).format('MMM').charAt(0).toUpperCase();
                        day = (0, dayjs_1.default)(new Date()).format('dd').charAt(0).toUpperCase();
                        hour = (0, dayjs_1.default)(new Date()).format('hh');
                        min = (0, dayjs_1.default)(new Date()).format('mm');
                        sec = (0, dayjs_1.default)(new Date()).format('ss');
                        milli = (0, dayjs_1.default)(new Date()).format('SSS');
                        ref = "".concat(hour).concat(min, "-").concat(month).concat(day, "-").concat(sec).concat(milli);
                        ReturnBookingModel = bookingModel_1.Bookings.create(bookingData);
                        returnPassengers = Passenger_1.Passengers.create(returnPassenger);
                        returnPassengers.user = user;
                        returnPassengers.profile = profile;
                        return [4 /*yield*/, returnPassengers.save()];
                    case 49:
                        _m.sent();
                        ReturnBookingModel.passengerId = returnPassengers;
                        ReturnBookingModel.referenceId = ref;
                        ReturnBookingModel.payment = payments;
                        ReturnBookingModel.paymentType = bookingData.paymentType;
                        ReturnBookingModel.amount = trip.price;
                        ReturnBookingModel.trip = ReturnTrip;
                        ReturnBookingModel.ConfirmedTripId = ReturnTrip.id;
                        ReturnBookingModel.ReturnTripId = ReturnTrip.id;
                        ReturnBookingModel.schedule = ReturnTrip.schedule;
                        ReturnBookingModel.ConfirmedReturnTripId = ReturnTrip.id;
                        ReturnBookingModel.TravelDate = bookingData.returnDate;
                        ReturnBookingModel.ConfirmedTravelDate = bookingData.returnDate;
                        ReturnBookingModel.ReturnDate = bookingData.returnDate;
                        ReturnBookingModel.ConfirmedReturnDate = bookingData.returnDate;
                        ReturnBookingModel.numberOfTravellers = 7;
                        ReturnBookingModel.pickupLocation = bookingData.pickupLocation;
                        ReturnBookingModel.service = bookingData.service;
                        ReturnBookingModel.type = bookingData.type;
                        ReturnBookingModels.push(ReturnBookingModel);
                        console.log(returnPassengers);
                        _m.label = 50;
                    case 50:
                        _k++;
                        return [3 /*break*/, 48];
                    case 51: return [4 /*yield*/, bookingModel_1.Bookings.save(ReturnBookingModels)];
                    case 52:
                        returnBooking = _m.sent();
                        return [2 /*return*/, { booking: booking, returnBooking: returnBooking }];
                    case 53: throw new utils_1.AppError('invalid booking type selected');
                    case 54: return [3 /*break*/, 56];
                    case 55: throw new utils_1.AppError('invalid booking service selected');
                    case 56: return [2 /*return*/];
                }
            });
        }); };
        //Assigning Bus to passengers
        this.assignus = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var trip, route, type, vehicle, booking, booked;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.priviledges.includes('manager')) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        id: bookingData.tripId,
                                        schedule: bookingData.schedule,
                                        type: bookingData.typeId,
                                    },
                                ],
                                relations: ['type', 'route'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 1:
                        trip = _a.sent();
                        return [4 /*yield*/, Routes_1.Routes.findOneOrFail({
                                where: [
                                    {
                                        id: trip.route.id,
                                    },
                                ],
                                relations: ['terminal'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid route selected');
                            })];
                    case 2:
                        route = _a.sent();
                        if (user.Terminal !== route.terminal.id) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, vehicleType_1.VehicleType.findOneOrFail({
                                where: [
                                    {
                                        id: trip.type.id,
                                    },
                                ],
                                relations: ['feature'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid vehicle type selected');
                            })];
                    case 3:
                        type = _a.sent();
                        return [4 /*yield*/, vehicle_1.Vehicles.findOne({
                                where: [
                                    {
                                        id: bookingData.vehicleId,
                                        vehicleType: type.id,
                                        vehicleStatus: (0, typeorm_plus_2.Not)(enums_1.VehicleStatus.IN_TRANSIT),
                                    },
                                ],
                            })];
                    case 4:
                        vehicle = _a.sent();
                        if (!vehicle) {
                            throw new utils_1.AppError('vehicle is already in transit or already assigned to a trip');
                        }
                        return [4 /*yield*/, bookingModel_1.Bookings.find({
                                where: [
                                    {
                                        ConfirmedTravelDate: bookingData.travelDate,
                                        service: bookingData.service,
                                        type: bookingData.type,
                                        trip: trip.id,
                                        schedule: trip.schedule,
                                        bookingStatus: enums_1.BookingStatus.CHECK_IN_AND_APPROVED,
                                    },
                                ],
                            })];
                    case 5:
                        booking = _a.sent();
                        return [4 /*yield*/, bookingModel_1.Bookings.find({
                                where: [
                                    {
                                        vehicle: vehicle.id,
                                        TravelDate: bookingData.travelDate,
                                    },
                                ],
                            })];
                    case 6:
                        booked = _a.sent();
                        if (booked.length > type.seatNumber) {
                            throw new utils_1.AppError('bookings length has exceeded vehicle seat');
                        }
                        if (!(bookingData.service == 'book_a_seat')) return [3 /*break*/, 8];
                        if (booking.length > type.seatNumber) {
                            throw new utils_1.AppError('number of passengers is greater than vehicle seat number');
                        }
                        if (booking.length === 0) {
                            throw new utils_1.AppError("you can not assigned a vehicle to an empty trip");
                        }
                        booking.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(item.bookingStatus == enums_1.BookingStatus.CHECK_IN_AND_APPROVED)) return [3 /*break*/, 2];
                                        item.vehicle = vehicle.id;
                                        return [4 /*yield*/, item.save()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2: throw new utils_1.AppError('passenger has to be checked in before assigning a vehicle to them');
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        vehicle.vehicleStatus = enums_1.VehicleStatus.ASSIGNED;
                        return [4 /*yield*/, vehicle.save()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, 'passenger has been assigned to a vehicle'];
                    case 8:
                        if (!(bookingData.service == 'hire_service')) return [3 /*break*/, 10];
                        if (booking.length === 0) {
                            throw new utils_1.AppError('you can not assign a vehicle to an empty trip');
                        }
                        booking.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(item.bookingStatus === enums_1.BookingStatus.CHECK_IN_AND_APPROVED)) return [3 /*break*/, 2];
                                        item.vehicle = vehicle.id;
                                        return [4 /*yield*/, item.save()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2: throw new utils_1.AppError('passenger has to be checked in before assigning a vehicle to them');
                                }
                            });
                        }); });
                        vehicle.vehicleStatus = enums_1.VehicleStatus.ASSIGNED;
                        return [4 /*yield*/, vehicle.save()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                    case 10: throw new utils_1.AppError('invalid booking service selected');
                }
            });
        }); };
        //vehicle in transit
        this.InTransit = function (transitData, user) { return __awaiter(_this, void 0, void 0, function () {
            var route, trip, booking, vehicle, captainFee, location, info, terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.priviledges.includes('manager')) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, Routes_1.Routes.findOneOrFail({
                                where: [
                                    {
                                        route: transitData.route,
                                        terminal: user.Terminal,
                                    },
                                ],
                                relations: ['terminal'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid route selected');
                            })];
                    case 1:
                        route = _a.sent();
                        console.log(route);
                        // console.log(route.terminal, user.Terminal)
                        if (user.Terminal !== route.terminal.id) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, Trips_1.Trips.findOneOrFail({
                                where: [
                                    {
                                        route: route.id,
                                        schedule: transitData.schedule,
                                    },
                                ],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid trip selected');
                            })];
                    case 2:
                        trip = _a.sent();
                        return [4 /*yield*/, bookingModel_1.Bookings.findOne({
                                where: [
                                    {
                                        ConfirmedTravelDate: transitData.travelDate,
                                        ConfirmedTripId: trip.id,
                                        vehicle: transitData.vehicleId,
                                    },
                                ],
                            })];
                    case 3:
                        booking = _a.sent();
                        if (booking === undefined) {
                            throw new utils_1.AppError('no booking has been done on this trip and on this day');
                        }
                        return [4 /*yield*/, vehicle_1.Vehicles.findOneOrFail({
                                where: [
                                    { id: transitData.vehicleId, vehicleStatus: enums_1.VehicleStatus.ASSIGNED },
                                ],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid vehicle selected');
                            })];
                    case 4:
                        vehicle = _a.sent();
                        vehicle.vehicleStatus = enums_1.VehicleStatus.IN_TRANSIT;
                        captainFee = new CaptainFee_1.CapTainService();
                        return [4 /*yield*/, captainFee.createCaptainFee(trip, vehicle, transitData, route)];
                    case 5:
                        _a.sent();
                        location = new vehicleLocation_1.VehicleServiceLocation();
                        info = {
                            location: route.route,
                            left: route.Terminal,
                            vehicle: vehicle,
                            headingTo: route.route,
                            status: enums_1.VehicleStatus.IN_TRANSIT,
                        };
                        return [4 /*yield*/, location.CreateVehicleLocation(info)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, vehicle.save()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, Terminal_1.Terminals.findOneOrFail({
                                where: [{ id: user.Terminal }],
                                relations: ['state', 'lga'],
                            })];
                    case 8:
                        terminal = _a.sent();
                        console.log(terminal);
                        return [2 /*return*/, 'captain fee and vehicle updated'];
                }
            });
        }); };
        this.GetBookingWithVehicles = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var booking, data, book, _i, booking_1, profile, prof;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (!user.priviledges.includes('manager')) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, bookingModel_1.Bookings.find({
                                where: [
                                    {
                                        TravelDate: bookingData.travelDate,
                                        schedule: bookingData.schedule,
                                        vehicle: bookingData.vehicle,
                                        trip: bookingData.tripId,
                                        service: bookingData.service,
                                        type: bookingData.type,
                                    },
                                ],
                                relations: ['passengerId'],
                            })];
                    case 1:
                        booking = _a.sent();
                        book = [];
                        _i = 0, booking_1 = booking;
                        _a.label = 2;
                    case 2:
                        if (!(_i < booking_1.length)) return [3 /*break*/, 5];
                        profile = booking_1[_i];
                        return [4 /*yield*/, Passenger_1.Passengers.find({
                                where: [{ id: profile.passengerId.id }],
                                relations: ['profile'],
                            })];
                    case 3:
                        prof = _a.sent();
                        data = prof[0].profile;
                        book.push(__assign(__assign({}, profile), data));
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, book];
                }
            });
        }); };
        this.checkBookingStatus = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        //updating passenger booking status
        this.updataBookingStatus = function (update, user) { return __awaiter(_this, void 0, void 0, function () {
            var booking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (!user.priviledges.includes('ticket')) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, bookingModel_1.Bookings.findOneOrFail({
                                where: [
                                    {
                                        ConfirmedTravelDate: update.travelDate,
                                        referenceId: update.referenceId,
                                    },
                                ],
                            }).catch(function () {
                                throw new utils_1.AppError('Invalid credential');
                            })];
                    case 1:
                        booking = _a.sent();
                        if (booking.bookingStatus === enums_1.BookingStatus.CHECK_IN_AND_APPROVED) {
                            return [2 /*return*/, 'Already checked in'];
                        }
                        booking.bookingStatus = enums_1.BookingStatus.CHECK_IN_AND_APPROVED;
                        return [4 /*yield*/, booking.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'Booking updated'];
                }
            });
        }); };
        //vehicle arrived at terminal
        this.vehicleArrived = function (status, user) { return __awaiter(_this, void 0, void 0, function () {
            var route, vehicle, location, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.priviledges.includes('manager')) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, Routes_1.Routes.findOneOrFail({
                                where: [{ id: status.routeId }],
                                relations: ['terminal'],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid route selected');
                            })];
                    case 1:
                        route = _a.sent();
                        return [4 /*yield*/, vehicle_1.Vehicles.findOne({
                                where: [
                                    {
                                        id: status.id,
                                    },
                                ],
                            })];
                    case 2:
                        vehicle = _a.sent();
                        if (!vehicle) {
                            throw new utils_1.AppError('invalid vehicle selected');
                        }
                        vehicle.vehicleStatus = status.status;
                        location = new vehicleLocation_1.VehicleServiceLocation();
                        info = {
                            location: route.route,
                            headingTo: route.route,
                            left: route.Terminal,
                            status: status.status,
                            vehicle: vehicle,
                        };
                        return [4 /*yield*/, location.CreateVehicleLocation(info)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, vehicle.save()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, 'vehicle updated'];
                }
            });
        }); };
        this.changeToDelay = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var authorize, booking;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.block === true) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        authorize = user.priviledges.includes('manager');
                        if (!authorize) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        console.log(bookingData);
                        return [4 /*yield*/, bookingModel_1.Bookings.findOneOrFail({
                                where: [
                                    {
                                        referenceId: bookingData.id,
                                        vehicle: null,
                                        bookingStatus: enums_1.BookingStatus.APPROVED,
                                    },
                                ],
                            }).catch(function () {
                                throw new utils_1.AppError('Invalid data');
                            })];
                    case 1:
                        booking = _a.sent();
                        booking.bookingStatus = enums_1.BookingStatus.DELAY;
                        return [4 /*yield*/, booking.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'Passenger status changed to delay'
                            // booking.bookingStatus = BookingStatus.DELAY;
                            // await booking.save();
                            // return 'status updated';
                        ];
                }
            });
        }); };
        this.changePassengerStatus = function (bookingData) { return __awaiter(_this, void 0, void 0, function () {
            var updates, isAllowed, isMatch, booking_2, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updates = Object.keys(bookingData);
                        isAllowed = [
                            'trip',
                            'schedule',
                            'ConfirmedTravelDate',
                            'referenceId',
                            'bookingStatus',
                        ];
                        isMatch = updates.every(function (item) { return isAllowed.includes(item); });
                        if (!isMatch) {
                            throw new utils_1.AppError('invalid update');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, bookingModel_1.Bookings.findOneOrFail({
                                where: [
                                    {
                                        referenceId: bookingData.referenceId,
                                        bookingStatus: enums_1.BookingStatus.DELAY,
                                    },
                                ],
                            }).catch(function () {
                                throw new utils_1.AppError('no referenceId match this search');
                            })];
                    case 2:
                        booking_2 = _a.sent();
                        updates.forEach(function (item) { return (booking_2[item] = bookingData[item]); });
                        return [4 /*yield*/, booking_2.save()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_3 = _a.sent();
                        throw new utils_1.AppError(error_3);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.TransLoading = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        this.OneWayRounTrip = function (trip, passenger, ref, user) { return __awaiter(_this, void 0, void 0, function () {
            var price, paymentService, verifyPaymentResponse, paymentData, amount, PaymentModel, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        price = Number(trip) * passenger;
                        paymentService = new Payment_1.PaymentsService();
                        console.log(price);
                        return [4 /*yield*/, paymentService.verifyPayment(ref)];
                    case 1:
                        verifyPaymentResponse = _a.sent();
                        if (verifyPaymentResponse.status &&
                            verifyPaymentResponse.data.status === 'success') {
                            paymentData = verifyPaymentResponse.data;
                            amount = paymentData.amount / 100;
                            console.log(paymentData, amount);
                            PaymentModel = {
                                amount: String(amount),
                                method: paymentData.channel,
                                currency: paymentData.currency,
                                referenceId: paymentData.reference,
                                status: 'paid',
                            };
                            return [2 /*return*/, Payment_1.Payments.create(PaymentModel).save()];
                        }
                        else {
                            throw new utils_1.AppError('invalid transaction');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.SearchBooking = function (bookingData, user) { return __awaiter(_this, void 0, void 0, function () {
            var isValid, search, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized');
                        }
                        isValid = user.priviledges.includes('customer');
                        if (isValid) {
                            throw new utils_1.AppError('UnAuthorized');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, bookingModel_1.Bookings.find({
                                where: [
                                    {
                                        DepartureTerminal: bookingData.departureTerminal,
                                        ArrivalTerminal: bookingData.arrivalTerminal,
                                        TravelDate: bookingData.travelDate,
                                    },
                                ],
                            })];
                    case 2:
                        search = _a.sent();
                        return [2 /*return*/, search];
                    case 3:
                        error_5 = _a.sent();
                        throw new utils_1.AppError('No booking was done on this travel date');
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.Reference = function (reference, user) { return __awaiter(_this, void 0, void 0, function () {
            var isValid, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized');
                        }
                        isValid = user.priviledges.includes('customer');
                        if (isValid) {
                            throw new utils_1.AppError('UnAuthorized');
                        }
                        return [4 /*yield*/, bookingModel_1.Bookings.findOneOrFail({
                                where: [{ referenceId: reference.id }],
                            }).catch(function () {
                                throw new utils_1.AppError('Invalid reference Number');
                            })];
                    case 1:
                        ref = _a.sent();
                        return [2 /*return*/, ref];
                }
            });
        }); };
        this.PrintManifest = function (manifest, user) { return __awaiter(_this, void 0, void 0, function () {
            var print, vehicle, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (user.priviledges.includes('customer')) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, bookingModel_1.Bookings.find({
                                where: [
                                    {
                                        vehicle: manifest.vehicleId,
                                        schedule: manifest.schedule,
                                        TravelDate: manifest.travelDate,
                                    },
                                ],
                            })];
                    case 2:
                        print = _a.sent();
                        if (!(print.length !== 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, vehicle_1.Vehicles.findOne({ id: manifest.vehicleId })];
                    case 3:
                        vehicle = _a.sent();
                        return [2 /*return*/, { print: print, vehicle: vehicle }];
                    case 4: throw new utils_1.AppError('invalid data');
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_6 = _a.sent();
                        throw new utils_1.AppError('invalid data');
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    }
    BookingService.prototype.verifyPayment = function (trip, ref, numberOfTraveller, user) {
        return __awaiter(this, void 0, void 0, function () {
            var tripPrice, paymentService, verifyPaymentResponse, paymentData, amount, expectedTotal, paymentModel, expected, paymentModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tripPrice = Number(trip) * numberOfTraveller;
                        paymentService = new Payment_1.PaymentsService();
                        return [4 /*yield*/, paymentService.verifyPayment(ref)];
                    case 1:
                        verifyPaymentResponse = _a.sent();
                        if (verifyPaymentResponse.status &&
                            verifyPaymentResponse.data.status === 'success') {
                            paymentData = verifyPaymentResponse.data;
                            amount = paymentData.amount / 100;
                            if (user) {
                                expectedTotal = tripPrice;
                                if (amount === expectedTotal) {
                                    paymentModel = {
                                        amount: String(amount),
                                        method: paymentData.channel,
                                        currency: paymentData.currency,
                                        referenceId: paymentData.reference,
                                        status: 'paid',
                                        type: 'card',
                                    };
                                    return [2 /*return*/, Payment_1.Payments.create(paymentModel).save()];
                                }
                                else {
                                    throw new utils_1.AppError(" expected ".concat(expectedTotal, " but got ").concat(amount));
                                }
                            }
                            else {
                                expected = tripPrice;
                                if (amount === expected) {
                                    paymentModel = {
                                        amount: String(amount),
                                        method: paymentData.channel,
                                        currency: paymentData.currency,
                                        referenceId: paymentData.reference,
                                        status: 'paid',
                                    };
                                    return [2 /*return*/, Payment_1.Payments.create(paymentModel).save()];
                                }
                                else {
                                    throw new utils_1.AppError(" expected ".concat(expected, " but got ").concat(amount));
                                }
                            }
                        }
                        else {
                            throw new utils_1.AppError('invalid transaction');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return BookingService;
}());
exports.BookingService = BookingService;
