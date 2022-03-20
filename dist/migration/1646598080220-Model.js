"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model1646598080220 = void 0;
var Model1646598080220 = /** @class */ (function () {
    function Model1646598080220() {
        this.name = 'Model1646598080220';
    }
    Model1646598080220.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `roles` (`id` varchar(36) NOT NULL, `role` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_ccc7c1489f3a6b3c9b47d4537c` (`role`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `priviledge` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `view` tinyint NOT NULL DEFAULT 0, `edit` tinyint NOT NULL DEFAULT 0, `delete` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX `IDX_792f6214dac298ff98895f7a78` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `phoneNumber` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `gender` varchar(255) NOT NULL, `priviledges` text NOT NULL, `refreshToken` varchar(255) NULL, `Terminal` varchar(255) NULL, `block` tinyint NOT NULL DEFAULT 0, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `rolesId` varchar(36) NULL, `priviledgeId` varchar(36) NULL, UNIQUE INDEX `IDX_1e3d0240b49c40521aaeb95329` (`phoneNumber`), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), UNIQUE INDEX `IDX_4fdf5f552fcfe06082a35e9728` (`refreshToken`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `profile` (`id` varchar(36) NOT NULL, `nextOfKin` varchar(255) NOT NULL, `nextOfKinPhoneNumber` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `passengers` (`id` varchar(36) NOT NULL, `FullName` varchar(255) NOT NULL, `phoneNumber` varchar(255) NOT NULL, `seat` varchar(255) NULL, `ReturnSeat` varchar(255) NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `profileId` varchar(36) NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `captain_fee` (`id` varchar(36) NOT NULL, `NameOfCaptain` varchar(255) NOT NULL, `Route` varchar(255) NOT NULL, `RouteType` varchar(255) NOT NULL, `fee` int NOT NULL, `TravelDate` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `customers` (`id` varchar(36) NOT NULL, `role` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NULL, `phoneNumber` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_8536b8b85c06969f84f0c098b0` (`email`), UNIQUE INDEX `IDX_3e418bff40d3abac5642cd5d39` (`phoneNumber`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `states` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `lga` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `stateId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `terminals` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `lgaId` int NULL, `stateId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `routes` (`id` varchar(36) NOT NULL, `route` varchar(255) NOT NULL, `Terminal` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `arrivalId` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `terminalId` varchar(36) NULL, `arrivalTerminalId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `vehicle_features` (`id` varchar(36) NOT NULL, `attribute` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `vehicle_type` (`id` varchar(36) NOT NULL, `seatNumber` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `featureId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `vehicles` (`id` varchar(36) NOT NULL, `plateNumber` varchar(255) NOT NULL, `chasisNumber` varchar(255) NOT NULL, `PC` varchar(255) NOT NULL, `PCPhoneNumber` varchar(255) NOT NULL, `PCNextOfKin` varchar(255) NOT NULL, `PCNextOfKinPhoneNumber` varchar(255) NOT NULL, `HC` varchar(255) NULL, `HCNextOfKin` varchar(255) NULL, `HCNextOfKinPhoneNumber` int NULL, `Location` varchar(255) NOT NULL, `vehicleStatus` enum ('available', 'in_transit', 'assigned', 'arrived', 'down') NOT NULL DEFAULT 'available', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `vehicleTypeId` varchar(36) NULL, UNIQUE INDEX `IDX_66ea96381a7a7ceb35c72f3662` (`plateNumber`), UNIQUE INDEX `IDX_bf694919e3c7689ffaa0d880b1` (`chasisNumber`), UNIQUE INDEX `REL_72d0f0ecfc71ee89771f3de60d` (`vehicleTypeId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `payments` (`id` varchar(36) NOT NULL, `amount` varchar(255) NOT NULL, `referenceId` varchar(255) NOT NULL, `method` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `vehicle_location` (`id` varchar(36) NOT NULL, `Location` varchar(255) NOT NULL, `Left` varchar(255) NOT NULL, `HC` varchar(255) NOT NULL, `HeadingTo` varchar(255) NOT NULL, `status` enum ('available', 'in_transit', 'assigned', 'arrived', 'down') NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `vehicleId` varchar(36) NULL, UNIQUE INDEX `REL_ebf9aad6ec44bd4af760031654` (`vehicleId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seats` (`id` varchar(36) NOT NULL, `seatNumber` int NOT NULL, `seatStatus` enum ('available', 'booked') NOT NULL DEFAULT 'available', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `tripId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `trips` (`id` varchar(36) NOT NULL, `price` int NOT NULL, `schedule` varchar(255) NOT NULL, `Days` text NOT NULL, `TripStatus` enum ('available', 'booked', 'in_transit', 'arrived', 'not_available') NOT NULL DEFAULT 'available', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `routeId` varchar(36) NULL, `typeId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `bookings` (`id` varchar(36) NOT NULL, `amount` int NOT NULL, `referenceId` varchar(255) NOT NULL, `numberOfTravellers` int NOT NULL, `paymentType` enum ('card', 'pos', 'cash') NOT NULL, `type` enum ('one_way', 'round_trip') NOT NULL, `service` enum ('hire_service', 'book_a_seat') NOT NULL, `TravelDate` varchar(255) NOT NULL, `pickupLocation` varchar(255) NULL, `ReturnDate` varchar(255) NULL, `seat` varchar(255) NULL, `ReturnSeat` varchar(255) NULL, `schedule` varchar(255) NULL, `ConfirmedReturnTripId` varchar(255) NULL, `ConfirmedTripId` varchar(255) NOT NULL, `ConfirmedTravelDate` varchar(255) NOT NULL, `ConfirmedReturnDate` varchar(255) NULL, `vehicle` varchar(255) NULL, `DepartureTerminal` varchar(255) NOT NULL, `ArrivalTerminal` varchar(255) NOT NULL, `ReturnTripId` varchar(255) NULL, `bookingStatus` enum ('approved', 'check_in_and_approved', 'delay', 'change_travel_date', 'change_travel_trip', 'change_travel_route') NOT NULL DEFAULT 'approved', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `passengerIdId` varchar(36) NULL, `profileId` varchar(36) NULL, `tripId` varchar(36) NULL, `paymentId` varchar(36) NULL, UNIQUE INDEX `IDX_7e5c7deec95a04f096f98f0075` (`referenceId`), UNIQUE INDEX `REL_930fb9f4f4e4b510c956992be8` (`passengerIdId`), UNIQUE INDEX `REL_ba4c7b538b70d54010064df49d` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_30cd0bbcd1dcae7673af7888eb8` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_a4a07c7732e75b03d7f2798760c` FOREIGN KEY (`priviledgeId`) REFERENCES `priviledge`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `passengers` ADD CONSTRAINT `FK_fc619e82290ea934ad275f7b477` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `passengers` ADD CONSTRAINT `FK_ffc3292d96c45f5524c82165ed7` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `lga` ADD CONSTRAINT `FK_3739312e62be0013a3a9ed73d95` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_929f236cc347a75b8eda4c760ac` FOREIGN KEY (`lgaId`) REFERENCES `lga`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `terminals` ADD CONSTRAINT `FK_548d87d64091cad8b454f45d50e` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `routes` ADD CONSTRAINT `FK_a5a9b85ce601d51163c8894d495` FOREIGN KEY (`terminalId`) REFERENCES `terminals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `routes` ADD CONSTRAINT `FK_44b031036bac37c7a4f2e0efc02` FOREIGN KEY (`arrivalTerminalId`) REFERENCES `terminals`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `vehicle_type` ADD CONSTRAINT `FK_a1683272500371a07606dd012b2` FOREIGN KEY (`featureId`) REFERENCES `vehicle_features`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `vehicles` ADD CONSTRAINT `FK_72d0f0ecfc71ee89771f3de60dc` FOREIGN KEY (`vehicleTypeId`) REFERENCES `vehicle_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `vehicle_location` ADD CONSTRAINT `FK_ebf9aad6ec44bd4af760031654e` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seats` ADD CONSTRAINT `FK_4d031d469dc99ea4607503976fb` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_3fcad6442389eeb7aea5f1f25a8` FOREIGN KEY (`routeId`) REFERENCES `routes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `trips` ADD CONSTRAINT `FK_228dfd7c7bfdb7248e3340df2ea` FOREIGN KEY (`typeId`) REFERENCES `vehicle_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_930fb9f4f4e4b510c956992be85` FOREIGN KEY (`passengerIdId`) REFERENCES `passengers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_ba4c7b538b70d54010064df49de` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_e33f0b046a54956d011b3d377ef` FOREIGN KEY (`tripId`) REFERENCES `trips`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` ADD CONSTRAINT `FK_b6e3240be778554ea319f316841` FOREIGN KEY (`paymentId`) REFERENCES `payments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 38:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Model1646598080220.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_b6e3240be778554ea319f316841`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_e33f0b046a54956d011b3d377ef`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_ba4c7b538b70d54010064df49de`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bookings` DROP FOREIGN KEY `FK_930fb9f4f4e4b510c956992be85`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_228dfd7c7bfdb7248e3340df2ea`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `trips` DROP FOREIGN KEY `FK_3fcad6442389eeb7aea5f1f25a8`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seats` DROP FOREIGN KEY `FK_4d031d469dc99ea4607503976fb`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `vehicle_location` DROP FOREIGN KEY `FK_ebf9aad6ec44bd4af760031654e`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `vehicles` DROP FOREIGN KEY `FK_72d0f0ecfc71ee89771f3de60dc`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `vehicle_type` DROP FOREIGN KEY `FK_a1683272500371a07606dd012b2`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `routes` DROP FOREIGN KEY `FK_44b031036bac37c7a4f2e0efc02`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `routes` DROP FOREIGN KEY `FK_a5a9b85ce601d51163c8894d495`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_548d87d64091cad8b454f45d50e`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `terminals` DROP FOREIGN KEY `FK_929f236cc347a75b8eda4c760ac`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `lga` DROP FOREIGN KEY `FK_3739312e62be0013a3a9ed73d95`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `passengers` DROP FOREIGN KEY `FK_ffc3292d96c45f5524c82165ed7`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `passengers` DROP FOREIGN KEY `FK_fc619e82290ea934ad275f7b477`")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_a4a07c7732e75b03d7f2798760c`")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_30cd0bbcd1dcae7673af7888eb8`")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_ba4c7b538b70d54010064df49d` ON `bookings`")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_930fb9f4f4e4b510c956992be8` ON `bookings`")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_7e5c7deec95a04f096f98f0075` ON `bookings`")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `bookings`")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `trips`")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seats`")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_ebf9aad6ec44bd4af760031654` ON `vehicle_location`")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `vehicle_location`")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `payments`")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_72d0f0ecfc71ee89771f3de60d` ON `vehicles`")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_bf694919e3c7689ffaa0d880b1` ON `vehicles`")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_66ea96381a7a7ceb35c72f3662` ON `vehicles`")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `vehicles`")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `vehicle_type`")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `vehicle_features`")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `routes`")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `terminals`")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `lga`")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `states`")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_3e418bff40d3abac5642cd5d39` ON `customers`")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_8536b8b85c06969f84f0c098b0` ON `customers`")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `customers`")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `captain_fee`")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `passengers`")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `profile`")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_4fdf5f552fcfe06082a35e9728` ON `users`")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_1e3d0240b49c40521aaeb95329` ON `users`")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `users`")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_792f6214dac298ff98895f7a78` ON `priviledge`")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `priviledge`")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_ccc7c1489f3a6b3c9b47d4537c` ON `roles`")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `roles`")];
                    case 52:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Model1646598080220;
}());
exports.Model1646598080220 = Model1646598080220;
