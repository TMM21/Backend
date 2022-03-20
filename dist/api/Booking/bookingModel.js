"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookings = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var enums_1 = require("../../enums");
var Trips_1 = require("../Trips");
var Passenger_1 = require("../Passenger");
var Payment_1 = require("../Payment");
var Profile_1 = require("../Profile");
var Bookings = /** @class */ (function (_super) {
    __extends(Bookings, _super);
    function Bookings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Bookings.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", Number)
    ], Bookings.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "referenceId", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", Number)
    ], Bookings.prototype, "numberOfTravellers", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToOne)(function (type) { return Passenger_1.Passengers; }, { eager: true }),
        (0, typeorm_plus_1.JoinColumn)(),
        __metadata("design:type", Passenger_1.Passengers)
    ], Bookings.prototype, "passengerId", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'enum', enum: enums_1.paymentType }),
        __metadata("design:type", String)
    ], Bookings.prototype, "paymentType", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToOne)(function (type) { return Profile_1.Profile; }, { eager: true }),
        (0, typeorm_plus_1.JoinColumn)(),
        __metadata("design:type", Profile_1.Profile)
    ], Bookings.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'enum', enum: enums_1.BookingType }),
        __metadata("design:type", String)
    ], Bookings.prototype, "type", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'enum', enum: enums_1.BOOK }),
        __metadata("design:type", String)
    ], Bookings.prototype, "service", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Bookings.prototype, "TravelDate", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "pickupLocation", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "ReturnDate", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "seat", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "ReturnSeat", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "schedule", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true, type: 'uuid' }),
        __metadata("design:type", String)
    ], Bookings.prototype, "ConfirmedReturnTripId", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'uuid' }),
        __metadata("design:type", String)
    ], Bookings.prototype, "ConfirmedTripId", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Bookings.prototype, "ConfirmedTravelDate", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "ConfirmedReturnDate", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Trips_1.Trips; }, function (trip) { return trip.book; }),
        __metadata("design:type", Trips_1.Trips)
    ], Bookings.prototype, "trip", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Payment_1.Payments; }, function (payment) { return payment.booking; }),
        __metadata("design:type", Payment_1.Payments)
    ], Bookings.prototype, "payment", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'uuid', nullable: true }),
        __metadata("design:type", String)
    ], Bookings.prototype, "vehicle", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Bookings.prototype, "DepartureTerminal", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Bookings.prototype, "ArrivalTerminal", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true, type: 'uuid' }),
        __metadata("design:type", String)
    ], Bookings.prototype, "ReturnTripId", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({
            type: 'enum',
            enum: enums_1.BookingStatus,
            default: enums_1.BookingStatus.APPROVED,
        }),
        __metadata("design:type", String)
    ], Bookings.prototype, "bookingStatus", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Bookings.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Bookings.prototype, "updatedAt", void 0);
    Bookings = __decorate([
        (0, typeorm_plus_1.Entity)({ orderBy: { createdAt: 'DESC' } })
    ], Bookings);
    return Bookings;
}(typeorm_plus_1.BaseEntity));
exports.Bookings = Bookings;
