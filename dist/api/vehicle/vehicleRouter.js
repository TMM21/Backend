"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRouter = void 0;
var express_1 = __importDefault(require("express"));
var middleware_1 = require("../../middleware");
var utils_1 = require("../../utils");
var vehicleController_1 = require("./vehicleController");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new vehicleController_1.VehicelController();
router.post('/', call(control.createVehicle, function (req, res) { return [req.body]; }));
router.get('/', call(control.getVehicle, function (req, res) { return []; }));
router.put('/:id', middleware_1.authorize, call(control.changeVehicleStatus, function (req, res) { return [req.params.id, req.body, req.user]; }));
exports.VehicleRouter = router;
