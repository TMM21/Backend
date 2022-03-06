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
exports.Vehicles = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var enums_1 = require("../../enums");
var vehicleType_1 = require("../vehicleType");
var Vehicles = /** @class */ (function (_super) {
    __extends(Vehicles, _super);
    function Vehicles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Vehicles.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Vehicles.prototype, "plateNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Vehicles.prototype, "chasisNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Vehicles.prototype, "PC", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Vehicles.prototype, "PCPhoneNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Vehicles.prototype, "PCNextOfKin", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Vehicles.prototype, "PCNextOfKinPhoneNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Vehicles.prototype, "HC", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Vehicles.prototype, "HCNextOfKin", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], Vehicles.prototype, "HCNextOfKinPhoneNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Vehicles.prototype, "Location", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: "enum", enum: enums_1.VehicleStatus, default: enums_1.VehicleStatus.AVAILABLE }),
        __metadata("design:type", String)
    ], Vehicles.prototype, "vehicleStatus", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToOne)(function (type) { return vehicleType_1.VehicleType; }),
        (0, typeorm_plus_1.JoinColumn)(),
        __metadata("design:type", vehicleType_1.VehicleType)
    ], Vehicles.prototype, "vehicleType", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Vehicles.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Vehicles.prototype, "updatedAt", void 0);
    Vehicles = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], Vehicles);
    return Vehicles;
}(typeorm_plus_1.BaseEntity));
exports.Vehicles = Vehicles;
