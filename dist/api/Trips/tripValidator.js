"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripSearch = exports.TripUpdateSchema = exports.TripValidationSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
exports.TripValidationSchema = joi_1.default.object().keys({
    routeId: joi_1.default.string().uuid().required(),
    schedule: joi_1.default.string().required(),
    typeId: joi_1.default.string().uuid().required(),
    day: joi_1.default.array().required(),
    price: joi_1.default.number().required()
});
exports.TripUpdateSchema = joi_1.default.object().keys({
    price: joi_1.default.string().optional(),
    schedule: joi_1.default.string().optional()
});
exports.TripSearch = joi_1.default.object().keys({
    routeId: joi_1.default.string().uuid().required(),
    travelDate: joi_1.default.string().required(),
});
