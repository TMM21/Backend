"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRouter = void 0;
var express_1 = __importDefault(require("express"));
var utils_1 = require("../../utils");
var roleController_1 = require("./roleController");
var middleware_1 = require("../../middleware");
var roleValidator_1 = require("./roleValidator");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new roleController_1.RoleController();
router.use((0, middleware_1.validation)(roleValidator_1.RoleValidationSchema));
router.post('/', call(control.creatRole, function (req, res) { return [req.body]; }));
router.get('/', call(control.getRole, function (req, res) { return []; }));
exports.RoleRouter = router;
