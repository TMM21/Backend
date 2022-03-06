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
exports.Passengers = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var User_1 = require("../User");
var Profile_1 = require("../Profile");
var Passengers = /** @class */ (function (_super) {
    __extends(Passengers, _super);
    function Passengers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Passengers.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Passengers.prototype, "FullName", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Passengers.prototype, "phoneNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Passengers.prototype, "seat", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Passengers.prototype, "ReturnSeat", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Profile_1.Profile; }, function (profile) { return profile.passenger; }),
        __metadata("design:type", Profile_1.Profile)
    ], Passengers.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return User_1.Users; }, function (user) { return user.passenger; }, { nullable: true }),
        __metadata("design:type", User_1.Users)
    ], Passengers.prototype, "user", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Passengers.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Passengers.prototype, "updatedAt", void 0);
    Passengers = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], Passengers);
    return Passengers;
}(typeorm_plus_1.BaseEntity));
exports.Passengers = Passengers;
