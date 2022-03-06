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
exports.Routes = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var Terminal_1 = require("../Terminal");
var Trips_1 = require("../Trips");
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Routes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Routes.prototype, "route", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Routes.prototype, "Terminal", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", String)
    ], Routes.prototype, "type", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: 'uuid' }),
        __metadata("design:type", String)
    ], Routes.prototype, "arrivalId", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Terminal_1.Terminals; }, function (terminal) { return terminal.route; }),
        __metadata("design:type", Terminal_1.Terminals)
    ], Routes.prototype, "terminal", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return Terminal_1.Terminals; }, function (terminal) { return terminal.route; }),
        __metadata("design:type", Terminal_1.Terminals)
    ], Routes.prototype, "arrivalTerminal", void 0);
    __decorate([
        (0, typeorm_plus_1.OneToMany)(function (type) { return Trips_1.Trips; }, function (trip) { return trip.route; }),
        __metadata("design:type", Array)
    ], Routes.prototype, "trip", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Routes.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Routes.prototype, "updatedAt", void 0);
    Routes = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], Routes);
    return Routes;
}(typeorm_plus_1.BaseEntity));
exports.Routes = Routes;
