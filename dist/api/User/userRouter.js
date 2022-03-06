"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var UserController_1 = require("./UserController");
var utils_1 = require("../../utils");
var router = express_1.default.Router();
var control = new UserController_1.UserController();
var call = utils_1.controlHandler;
router.put('/block', call(control.updateUser, function (req, res) { return [req.body, req.user]; }));
router.put('/unblock', call(control.unblock, function (req, res) { return [req.body, req.user]; }));
exports.userRouter = router;
