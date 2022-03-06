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
exports.Users = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var Role_1 = require("../Role");
var Passenger_1 = require("../Passenger");
var Priviledge_1 = require("../Priviledge");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Users.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "name", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Users.prototype, "phoneNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ select: false }),
        __metadata("design:type", String)
    ], Users.prototype, "password", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "gender", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)('simple-array'),
        __metadata("design:type", Array)
    ], Users.prototype, "priviledges", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Role_1.Roles; }, function (role) { return role.user; }),
        __metadata("design:type", Role_1.Roles)
    ], Users.prototype, "roles", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Priviledge_1.Priviledge; }, function (priviledge) { return priviledge.user; }),
        __metadata("design:type", Priviledge_1.Priviledge)
    ], Users.prototype, "priviledge", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true, unique: true }),
        __metadata("design:type", String)
    ], Users.prototype, "refreshToken", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ nullable: true, type: 'uuid' }),
        __metadata("design:type", String)
    ], Users.prototype, "Terminal", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToMany)(function (type) { return Passenger_1.Passengers; }, function (passenger) { return passenger.user; }),
        __metadata("design:type", Array)
    ], Users.prototype, "passenger", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Users.prototype, "block", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Users.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Users.prototype, "updatedAt", void 0);
    Users = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], Users);
    return Users;
}(typeorm_plus_1.BaseEntity));
exports.Users = Users;
