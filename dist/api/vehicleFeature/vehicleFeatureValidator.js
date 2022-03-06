"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiclesFeaturesValidationSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
exports.vehiclesFeaturesValidationSchema = joi_1.default.object().keys({
    attribute: joi_1.default.string().lowercase().required(),
});
