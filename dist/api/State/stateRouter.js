"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
var express_1 = __importDefault(require("express"));
var utils_1 = require("../../utils");
var stateController_1 = require("./stateController");
var middleware_1 = require("../../middleware");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var States = new stateController_1.StateController();
router.post('/', call(States.createState, function (req, res) { return [req.body]; }));
router.get('/', middleware_1.authorize, call(States.getState, function (req, res) { return [req.user]; }));
exports.stateRouter = router;
