"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookingSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
var enums_1 = require("../../enums");
exports.createBookingSchema = joi_1.default.object().keys({
    tripId: joi_1.default.string().uuid().required(),
    returnTripId: joi_1.default.string().uuid().optional(),
    travelDate: joi_1.default.string().optional(),
    type: joi_1.default.string().valid(enums_1.BookingType.ONE_WAY, enums_1.BookingType.ROUND_TRIP).required(),
    service: joi_1.default.string().valid(enums_1.BOOK.BOOK_A_SEAT, enums_1.BOOK.HIRE_SERVICE).required(),
    numberOfTravellers: joi_1.default.number().required(),
    paymentType: joi_1.default.string().valid(enums_1.paymentType.POS, enums_1.paymentType.CASH, enums_1.paymentType.CARD).required(),
    seat: joi_1.default.array().items(joi_1.default.string().optional()),
    ReturnSeat: joi_1.default.array().items(joi_1.default.string().optional()),
    referenceId: joi_1.default.string().optional(),
    terminalId: joi_1.default.string().optional(),
    returnDate: joi_1.default.string().optional(),
    pickupLocation: joi_1.default.string().optional(),
    passenger: joi_1.default.array().items(joi_1.default.object().keys({
        FullName: joi_1.default.string().required(),
        phoneNumber: joi_1.default.string().required(),
        seat: joi_1.default.string().uuid().optional(),
        ReturnSeat: joi_1.default.string().uuid().optional()
    })),
    profile: joi_1.default.object().keys({
        nextOfKin: joi_1.default.string().required(),
        nextOfKinPhoneNumber: joi_1.default.string().required(),
        address: joi_1.default.string().required()
    })
});
