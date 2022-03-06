"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminalValidationSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
exports.terminalValidationSchema = joi_1.default.object().keys({
    name: joi_1.default.string().lowercase().required(),
    stateId: joi_1.default.string().required(),
    lgaId: joi_1.default.string().required()
});
