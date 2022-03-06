"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LgaRouter = void 0;
var express_1 = __importDefault(require("express"));
var utils_1 = require("../../utils");
var lgaController_1 = require("./lgaController");
var lgaValidator_1 = require("./lgaValidator");
var middleware_1 = require("../../middleware");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var Lga = new lgaController_1.LgaController();
router.use((0, middleware_1.validation)(lgaValidator_1.lgaValidationSchema));
router.post('/', call(Lga.createLga, function (req, res) { return [req.body, req.user]; }));
router.get('/', call(Lga.getLga, function (req, res) { return [req.user]; }));
exports.LgaRouter = router;
