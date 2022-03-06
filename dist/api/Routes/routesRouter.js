"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesRouter = void 0;
var utils_1 = require("../../utils");
var routesController_1 = require("./routesController");
var express_1 = __importDefault(require("express"));
var call = utils_1.controlHandler;
var router = express_1.default.Router();
var Controller = new routesController_1.RoutesController();
router.post('/', call(Controller.createRoute, function (req, res) { return [req.body]; }));
router.get('/search', call(Controller.searchRoute, function (req, res) { return [req.query]; }));
exports.RoutesRouter = router;
