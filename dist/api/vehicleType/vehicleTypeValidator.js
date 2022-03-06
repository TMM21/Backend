"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleTypesValidationSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
exports.VehicleTypesValidationSchema = joi_1.default.object().keys({
    seatNumber: joi_1.default.number().required(),
    featureId: joi_1.default.string().uuid().required()
});
