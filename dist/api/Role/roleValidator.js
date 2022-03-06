"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleValidationSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
exports.RoleValidationSchema = joi_1.default.object().keys({
    role: joi_1.default.string().lowercase().valid('captain', "maintenance", 'customer', 'manager', 'ticket', 'admin').required(),
});
