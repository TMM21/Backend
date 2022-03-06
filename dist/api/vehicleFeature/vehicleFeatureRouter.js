"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFeatureRouter = void 0;
var vehicleFeatureController_1 = require("./vehicleFeatureController");
var vehicleFeatureValidator_1 = require("./vehicleFeatureValidator");
var utils_1 = require("../../utils");
var express_1 = __importDefault(require("express"));
var middleware_1 = require("../../middleware");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new vehicleFeatureController_1.VehicleFeatureController();
router.use((0, middleware_1.validation)(vehicleFeatureValidator_1.vehiclesFeaturesValidationSchema));
router.post('/', call(control.createFeature, function (req, res) { return [req.body]; }));
router.patch('/:id', call(control.updateFeature, function (req, res) { return [req.params.id, req.body]; }));
exports.VehicleFeatureRouter = router;
