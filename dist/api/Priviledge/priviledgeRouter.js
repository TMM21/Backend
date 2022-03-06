"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriviledgeRouter = void 0;
var express_1 = __importDefault(require("express"));
var priviledgeController_1 = require("./priviledgeController");
var utils_1 = require("../../utils");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new priviledgeController_1.PriviledgeController();
router.post('/', call(control.createPriviledge, function (req, res) { return [req.body]; }));
exports.PriviledgeRouter = router;
