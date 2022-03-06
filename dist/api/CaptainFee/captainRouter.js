"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptainRouter = void 0;
var express_1 = __importDefault(require("express"));
var captainController_1 = require("./captainController");
var utils_1 = require("../../utils");
var middleware_1 = require("../../middleware");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new captainController_1.CaptainController();
router.get('/', middleware_1.authorize, call(control.getCaptainFee, function (req, res) { return [req.body, req.user]; }));
exports.CaptainRouter = router;
