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
exports.Priviledge = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var User_1 = require("../User");
var Priviledge = /** @class */ (function (_super) {
    __extends(Priviledge, _super);
    function Priviledge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Priviledge.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Priviledge.prototype, "name", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToMany)(function (type) { return User_1.Users; }, function (user) { return user.priviledge; }),
        __metadata("design:type", Array)
    ], Priviledge.prototype, "user", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Priviledge.prototype, "view", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Priviledge.prototype, "edit", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'boolean', default: false }),
        __metadata("design:type", Boolean)
    ], Priviledge.prototype, "delete", void 0);
    Priviledge = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], Priviledge);
    return Priviledge;
}(typeorm_plus_1.BaseEntity));
exports.Priviledge = Priviledge;
