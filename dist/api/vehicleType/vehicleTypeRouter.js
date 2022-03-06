"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleTypeRouter = void 0;
var express_1 = __importDefault(require("express"));
var utils_1 = require("../../utils");
var vehicleTypeController_1 = require("./vehicleTypeController");
var vehicleTypeValidator_1 = require("./vehicleTypeValidator");
var middleware_1 = require("../../middleware");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new vehicleTypeController_1.VehicleTypeController();
router.use((0, middleware_1.validation)(vehicleTypeValidator_1.VehicleTypesValidationSchema));
router.post('/', call(control.createVehicleType, function (req, res) { return [req.body]; }));
router.get("/", call(control.getVehicleType, function (req, res) { return []; }));
exports.VehicleTypeRouter = router;
