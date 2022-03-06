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
exports.Trips = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var Routes_1 = require("../Routes");
var vehicleType_1 = require("../vehicleType");
var Booking_1 = require("../Booking");
var seatModel_1 = require("./seatModel");
var enums_1 = require("../../enums");
var Trips = /** @class */ (function (_super) {
    __extends(Trips, _super);
    function Trips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Trips.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", Number)
    ], Trips.prototype, "price", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Trips.prototype, "schedule", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)('simple-array'),
        __metadata("design:type", Array)
    ], Trips.prototype, "Days", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: "enum", enum: enums_1.TripStatus, default: enums_1.TripStatus.AVAILABLE }),
        __metadata("design:type", String)
    ], Trips.prototype, "TripStatus", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Routes_1.Routes; }, function (route) { return route.trip; }),
        __metadata("design:type", Routes_1.Routes)
    ], Trips.prototype, "route", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return vehicleType_1.VehicleType; }, function (type) { return type.trip; }),
        __metadata("design:type", vehicleType_1.VehicleType)
    ], Trips.prototype, "type", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToMany)(function (type) { return Booking_1.Bookings; }, function (book) { return book.trip; }),
        __metadata("design:type", Array)
    ], Trips.prototype, "book", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToMany)(function (type) { return seatModel_1.Seats; }, function (seat) { return seat.trip; }),
        __metadata("design:type", Array)
    ], Trips.prototype, "seat", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Trips.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Trips.prototype, "updatedAt", void 0);
    Trips = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], Trips);
    return Trips;
}(typeorm_plus_1.BaseEntity));
exports.Trips = Trips;
