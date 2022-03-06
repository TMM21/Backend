"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationRouter = void 0;
var utils_1 = require("../../utils");
var express_1 = __importDefault(require("express"));
var locationController_1 = require("./locationController");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new locationController_1.locationController();
router.get('/', call(control.getLocation, function (req, res) { return [req.body]; }));
exports.locationRouter = router;
