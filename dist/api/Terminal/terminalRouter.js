"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalRouter = void 0;
var express_1 = __importDefault(require("express"));
var terminalController_1 = require("./terminalController");
var middleware_1 = require("../../middleware");
var terminalValidator_1 = require("./terminalValidator");
var utils_1 = require("../../utils");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
router.use((0, middleware_1.validation)(terminalValidator_1.terminalValidationSchema));
var terminal = new terminalController_1.TerminalController();
router.post('/', middleware_1.authorize, call(terminal.createTerminal, function (req, res) { return [req.body, req.user]; }));
router.delete('/delete/:id', middleware_1.authorize, call(terminal.deleteTerminal, function (req, res) { return [req.params.id, req.user]; }));
router.get('/', call(terminal.getTerminal, function (req, res) { return []; }));
exports.TerminalRouter = router;
