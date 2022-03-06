"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
var express_1 = __importDefault(require("express"));
var utils_1 = require("../../utils");
var authController_1 = require("./authController");
// import {authorize} from '../../middleware'
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new authController_1.AuthController();
router.post('/signup/customer', call(control.createCustomer, function (req, res) { return [req.body]; }));
router.post('/remove/:id', call(control.removePriviledge, function (req, res) { return [req.params.id, req.body,]; }));
router.post('/login/customer', call(control.loginCustomer, function (req, res) { return [req.body]; }));
router.post('/loginUsers', call(control.loginUser, function (req, res) { return [req.body]; }));
router.post('/signup/user', call(control.createUser, function (req, res) { return [req.body]; }));
router.post('/assign/:id', call(control.assignPriviledge, function (req, res) { return [req.params.id, req.body]; }));
//  router.delete()   
exports.AuthRouter = router;
