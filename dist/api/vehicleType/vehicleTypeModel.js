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
exports.VehicleType = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var vehicleFeature_1 = require("../vehicleFeature");
var Trips_1 = require("../Trips");
var VehicleType = /** @class */ (function (_super) {
    __extends(VehicleType, _super);
    function VehicleType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], VehicleType.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", Number)
    ], VehicleType.prototype, "seatNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToMany)(function (type) { return Trips_1.Trips; }, function (trip) { return trip.type; }),
        __metadata("design:type", Array)
    ], VehicleType.prototype, "trip", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return vehicleFeature_1.VehicleFeatures; }, function (feature) { return feature.type; }),
        __metadata("design:type", vehicleFeature_1.VehicleFeatures)
    ], VehicleType.prototype, "feature", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], VehicleType.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], VehicleType.prototype, "updatedAt", void 0);
    VehicleType = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], VehicleType);
    return VehicleType;
}(typeorm_plus_1.BaseEntity));
exports.VehicleType = VehicleType;
