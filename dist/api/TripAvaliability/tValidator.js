"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripAvaliabilitySchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
exports.TripAvaliabilitySchema = joi_1.default.object().keys({
    departureTime: joi_1.default.string().required(),
    tripId: joi_1.default.string().uuid().required(),
    routeId: joi_1.default.string().uuid().required(),
});
