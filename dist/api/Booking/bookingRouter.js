"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRouter = void 0;
var bookingController_1 = require("./bookingController");
var utils_1 = require("../../utils");
var express_1 = __importDefault(require("express"));
var middleware_1 = require("../../middleware");
var bookingValidator_1 = require("./bookingValidator");
var router = express_1.default.Router();
var call = utils_1.controlHandler;
var control = new bookingController_1.BookingControler();
//customer  booking
router.post('/', middleware_1.authorize, (0, middleware_1.validation)(bookingValidator_1.createBookingSchema), call(control.BookATrip, function (req, res) { return [req.body, req.user]; }));
//user booking
router.post('/user', middleware_1.authorize, (0, middleware_1.validation)(bookingValidator_1.createBookingSchema), call(control.UserBooking, function (req, res) { return [req.body, req.user]; }));
//getRefence
router.get('/ref', middleware_1.authorize, call(control.Reference, function (req, res) { return [req.query, req.user]; }));
//searchBooking
router.get('/search', middleware_1.authorize, call(control.searchBooking, function (req, res) { return [req.body, req.user]; }));
//assign bus to a booking
router.put('/', middleware_1.authorize, call(control.AssignBus, function (req, res) { return [req.body, req.user]; }));
router.get('/', middleware_1.authorize, call(control.GetBookingWithVehicles, function (req, res) { return [req.body, req.user]; }));
router.put('/status', middleware_1.authorize, call(control.updateBookingStatus, function (req, res) { return [req.body, req.user]; }));
router.put('/vehicleStatus', call(control.vehicleStatus, function (req, res) { return [req.body, req.user]; }));
router.post('/unauth', (0, middleware_1.validation)(bookingValidator_1.createBookingSchema), call(control.UnAuthBooking, function (req, res) { return [req.body]; }));
router.post('/transit', middleware_1.authorize, call(control.InTransitVehicle, function (req, res) { return [req.body, req.user]; }));
router.put('/delay', middleware_1.authorize, call(control.changeToDelay, function (req, res) { return [req.body, req.user]; }));
router.post('/trip', call(control.changePassengerTrip, function (req, res) { return [req.body]; }));
// print manifest
router.post('/manifest', middleware_1.authorize, call(control.printManifest, function (req, res) { return [req.body, req.user]; }));
exports.BookingRouter = router;
