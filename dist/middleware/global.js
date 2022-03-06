"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var trimInputs_1 = require("./trimInputs");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var passport_1 = __importDefault(require("passport"));
var passport_2 = require("./passport");
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var helmet_1 = __importDefault(require("helmet"));
var body_parser_1 = __importDefault(require("body-parser"));
exports.default = (function (app) {
    app.enable("trust proxy");
    app.use((0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 1000, // limit each IP to 100 requests per windowMs
    }));
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)({ maxAge: 1728000 }));
    app.use(express_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    app.use((0, morgan_1.default)("dev"));
    passport_1.default.use("jwt", passport_2.jwtStrategy);
    app.use(trimInputs_1.trimInput);
});
