import {MigrationInterface, QueryRunner} from "typeorm";

export class init1646301585363 implements MigrationInterface {
    name = 'init1646301585363'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`states\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` varchar(36) NOT NULL, \`role\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_ccc7c1489f3a6b3c9b47d4537c\` (\`role\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`profile\` (\`id\` varchar(36) NOT NULL, \`nextOfKin\` varchar(255) NOT NULL, \`nextOfKinPhoneNumber\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`passengers\` (\`id\` varchar(36) NOT NULL, \`FullName\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`seat\` varchar(255) NULL, \`ReturnSeat\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`profileId\` varchar(36) NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`priviledge\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`view\` tinyint NOT NULL DEFAULT 0, \`edit\` tinyint NOT NULL DEFAULT 0, \`delete\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`IDX_792f6214dac298ff98895f7a78\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`priviledges\` text NOT NULL, \`refreshToken\` varchar(255) NULL, \`Terminal\` varchar(255) NULL, \`block\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`rolesId\` varchar(36) NULL, \`priviledgeId\` varchar(36) NULL, UNIQUE INDEX \`IDX_1e3d0240b49c40521aaeb95329\` (\`phoneNumber\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_4fdf5f552fcfe06082a35e9728\` (\`refreshToken\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lga\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`stateId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`terminals\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`lgaId\` int NULL, \`stateId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`routes\` (\`id\` varchar(36) NOT NULL, \`route\` varchar(255) NOT NULL, \`Terminal\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`arrivalId\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`terminalId\` varchar(36) NULL, \`arrivalTerminalId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicle_features\` (\`id\` varchar(36) NOT NULL, \`attribute\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicle_type\` (\`id\` varchar(36) NOT NULL, \`seatNumber\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`featureId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicles\` (\`id\` varchar(36) NOT NULL, \`plateNumber\` varchar(255) NOT NULL, \`chasisNumber\` varchar(255) NOT NULL, \`PC\` varchar(255) NOT NULL, \`PCPhoneNumber\` varchar(255) NOT NULL, \`PCNextOfKin\` varchar(255) NOT NULL, \`PCNextOfKinPhoneNumber\` varchar(255) NOT NULL, \`HC\` varchar(255) NULL, \`HCNextOfKin\` varchar(255) NULL, \`HCNextOfKinPhoneNumber\` int NULL, \`Location\` varchar(255) NOT NULL, \`vehicleStatus\` enum ('available', 'in_transit', 'assigned', 'arrived', 'down') NOT NULL DEFAULT 'available', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`vehicleTypeId\` varchar(36) NULL, UNIQUE INDEX \`IDX_66ea96381a7a7ceb35c72f3662\` (\`plateNumber\`), UNIQUE INDEX \`IDX_bf694919e3c7689ffaa0d880b1\` (\`chasisNumber\`), UNIQUE INDEX \`REL_72d0f0ecfc71ee89771f3de60d\` (\`vehicleTypeId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payments\` (\`id\` varchar(36) NOT NULL, \`amount\` varchar(255) NOT NULL, \`referenceId\` varchar(255) NOT NULL, \`method\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`captain_fee\` (\`id\` varchar(36) NOT NULL, \`NameOfCaptain\` varchar(255) NOT NULL, \`Route\` varchar(255) NOT NULL, \`RouteType\` varchar(255) NOT NULL, \`fee\` int NOT NULL, \`TravelDate\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicle_location\` (\`id\` varchar(36) NOT NULL, \`Location\` varchar(255) NOT NULL, \`Left\` varchar(255) NOT NULL, \`HC\` varchar(255) NOT NULL, \`HeadingTo\` varchar(255) NOT NULL, \`status\` enum ('available', 'in_transit', 'assigned', 'arrived', 'down') NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`vehicleId\` varchar(36) NULL, UNIQUE INDEX \`REL_ebf9aad6ec44bd4af760031654\` (\`vehicleId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`seats\` (\`id\` varchar(36) NOT NULL, \`seatNumber\` int NOT NULL, \`seatStatus\` enum ('available', 'booked') NOT NULL DEFAULT 'available', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`tripId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`trips\` (\`id\` varchar(36) NOT NULL, \`price\` int NOT NULL, \`schedule\` varchar(255) NOT NULL, \`Days\` text NOT NULL, \`TripStatus\` enum ('available', 'booked', 'in_transit', 'arrived', 'not_available') NOT NULL DEFAULT 'available', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`routeId\` varchar(36) NULL, \`typeId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bookings\` (\`id\` varchar(36) NOT NULL, \`amount\` int NOT NULL, \`referenceId\` varchar(255) NOT NULL, \`numberOfTravellers\` int NOT NULL, \`paymentType\` enum ('card', 'pos', 'cash') NOT NULL, \`type\` enum ('one_way', 'round_trip') NOT NULL, \`service\` enum ('hire_service', 'book_a_seat') NOT NULL, \`TravelDate\` varchar(255) NOT NULL, \`pickupLocation\` varchar(255) NULL, \`ReturnDate\` varchar(255) NULL, \`seat\` varchar(255) NULL, \`ReturnSeat\` varchar(255) NULL, \`schedule\` varchar(255) NULL, \`ConfirmedReturnTripId\` varchar(255) NULL, \`ConfirmedTripId\` varchar(255) NOT NULL, \`ConfirmedTravelDate\` varchar(255) NOT NULL, \`ConfirmedReturnDate\` varchar(255) NULL, \`vehicle\` varchar(255) NULL, \`DepartureTerminal\` varchar(255) NOT NULL, \`ArrivalTerminal\` varchar(255) NOT NULL, \`ReturnTripId\` varchar(255) NULL, \`bookingStatus\` enum ('approved', 'check_in_and_approved', 'delay', 'change_travel_date', 'change_travel_trip', 'change_travel_route') NOT NULL DEFAULT 'approved', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`passengerIdId\` varchar(36) NULL, \`profileId\` varchar(36) NULL, \`tripId\` varchar(36) NULL, \`paymentId\` varchar(36) NULL, UNIQUE INDEX \`IDX_7e5c7deec95a04f096f98f0075\` (\`referenceId\`), UNIQUE INDEX \`REL_930fb9f4f4e4b510c956992be8\` (\`passengerIdId\`), UNIQUE INDEX \`REL_ba4c7b538b70d54010064df49d\` (\`profileId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` varchar(36) NOT NULL, \`role\` varchar(255) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`phoneNumber\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_8536b8b85c06969f84f0c098b0\` (\`email\`), UNIQUE INDEX \`IDX_3e418bff40d3abac5642cd5d39\` (\`phoneNumber\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`passengers\` ADD CONSTRAINT \`FK_fc619e82290ea934ad275f7b477\` FOREIGN KEY (\`profileId\`) REFERENCES \`profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`passengers\` ADD CONSTRAINT \`FK_ffc3292d96c45f5524c82165ed7\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_30cd0bbcd1dcae7673af7888eb8\` FOREIGN KEY (\`rolesId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a4a07c7732e75b03d7f2798760c\` FOREIGN KEY (\`priviledgeId\`) REFERENCES \`priviledge\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`lga\` ADD CONSTRAINT \`FK_3739312e62be0013a3a9ed73d95\` FOREIGN KEY (\`stateId\`) REFERENCES \`states\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`terminals\` ADD CONSTRAINT \`FK_929f236cc347a75b8eda4c760ac\` FOREIGN KEY (\`lgaId\`) REFERENCES \`lga\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`terminals\` ADD CONSTRAINT \`FK_548d87d64091cad8b454f45d50e\` FOREIGN KEY (\`stateId\`) REFERENCES \`states\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`routes\` ADD CONSTRAINT \`FK_a5a9b85ce601d51163c8894d495\` FOREIGN KEY (\`terminalId\`) REFERENCES \`terminals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`routes\` ADD CONSTRAINT \`FK_44b031036bac37c7a4f2e0efc02\` FOREIGN KEY (\`arrivalTerminalId\`) REFERENCES \`terminals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vehicle_type\` ADD CONSTRAINT \`FK_a1683272500371a07606dd012b2\` FOREIGN KEY (\`featureId\`) REFERENCES \`vehicle_features\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` ADD CONSTRAINT \`FK_72d0f0ecfc71ee89771f3de60dc\` FOREIGN KEY (\`vehicleTypeId\`) REFERENCES \`vehicle_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vehicle_location\` ADD CONSTRAINT \`FK_ebf9aad6ec44bd4af760031654e\` FOREIGN KEY (\`vehicleId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`seats\` ADD CONSTRAINT \`FK_4d031d469dc99ea4607503976fb\` FOREIGN KEY (\`tripId\`) REFERENCES \`trips\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`trips\` ADD CONSTRAINT \`FK_3fcad6442389eeb7aea5f1f25a8\` FOREIGN KEY (\`routeId\`) REFERENCES \`routes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`trips\` ADD CONSTRAINT \`FK_228dfd7c7bfdb7248e3340df2ea\` FOREIGN KEY (\`typeId\`) REFERENCES \`vehicle_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD CONSTRAINT \`FK_930fb9f4f4e4b510c956992be85\` FOREIGN KEY (\`passengerIdId\`) REFERENCES \`passengers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD CONSTRAINT \`FK_ba4c7b538b70d54010064df49de\` FOREIGN KEY (\`profileId\`) REFERENCES \`profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD CONSTRAINT \`FK_e33f0b046a54956d011b3d377ef\` FOREIGN KEY (\`tripId\`) REFERENCES \`trips\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bookings\` ADD CONSTRAINT \`FK_b6e3240be778554ea319f316841\` FOREIGN KEY (\`paymentId\`) REFERENCES \`payments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP FOREIGN KEY \`FK_b6e3240be778554ea319f316841\``);
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP FOREIGN KEY \`FK_e33f0b046a54956d011b3d377ef\``);
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP FOREIGN KEY \`FK_ba4c7b538b70d54010064df49de\``);
        await queryRunner.query(`ALTER TABLE \`bookings\` DROP FOREIGN KEY \`FK_930fb9f4f4e4b510c956992be85\``);
        await queryRunner.query(`ALTER TABLE \`trips\` DROP FOREIGN KEY \`FK_228dfd7c7bfdb7248e3340df2ea\``);
        await queryRunner.query(`ALTER TABLE \`trips\` DROP FOREIGN KEY \`FK_3fcad6442389eeb7aea5f1f25a8\``);
        await queryRunner.query(`ALTER TABLE \`seats\` DROP FOREIGN KEY \`FK_4d031d469dc99ea4607503976fb\``);
        await queryRunner.query(`ALTER TABLE \`vehicle_location\` DROP FOREIGN KEY \`FK_ebf9aad6ec44bd4af760031654e\``);
        await queryRunner.query(`ALTER TABLE \`vehicles\` DROP FOREIGN KEY \`FK_72d0f0ecfc71ee89771f3de60dc\``);
        await queryRunner.query(`ALTER TABLE \`vehicle_type\` DROP FOREIGN KEY \`FK_a1683272500371a07606dd012b2\``);
        await queryRunner.query(`ALTER TABLE \`routes\` DROP FOREIGN KEY \`FK_44b031036bac37c7a4f2e0efc02\``);
        await queryRunner.query(`ALTER TABLE \`routes\` DROP FOREIGN KEY \`FK_a5a9b85ce601d51163c8894d495\``);
        await queryRunner.query(`ALTER TABLE \`terminals\` DROP FOREIGN KEY \`FK_548d87d64091cad8b454f45d50e\``);
        await queryRunner.query(`ALTER TABLE \`terminals\` DROP FOREIGN KEY \`FK_929f236cc347a75b8eda4c760ac\``);
        await queryRunner.query(`ALTER TABLE \`lga\` DROP FOREIGN KEY \`FK_3739312e62be0013a3a9ed73d95\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a4a07c7732e75b03d7f2798760c\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_30cd0bbcd1dcae7673af7888eb8\``);
        await queryRunner.query(`ALTER TABLE \`passengers\` DROP FOREIGN KEY \`FK_ffc3292d96c45f5524c82165ed7\``);
        await queryRunner.query(`ALTER TABLE \`passengers\` DROP FOREIGN KEY \`FK_fc619e82290ea934ad275f7b477\``);
        await queryRunner.query(`DROP INDEX \`IDX_3e418bff40d3abac5642cd5d39\` ON \`customers\``);
        await queryRunner.query(`DROP INDEX \`IDX_8536b8b85c06969f84f0c098b0\` ON \`customers\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP INDEX \`REL_ba4c7b538b70d54010064df49d\` ON \`bookings\``);
        await queryRunner.query(`DROP INDEX \`REL_930fb9f4f4e4b510c956992be8\` ON \`bookings\``);
        await queryRunner.query(`DROP INDEX \`IDX_7e5c7deec95a04f096f98f0075\` ON \`bookings\``);
        await queryRunner.query(`DROP TABLE \`bookings\``);
        await queryRunner.query(`DROP TABLE \`trips\``);
        await queryRunner.query(`DROP TABLE \`seats\``);
        await queryRunner.query(`DROP INDEX \`REL_ebf9aad6ec44bd4af760031654\` ON \`vehicle_location\``);
        await queryRunner.query(`DROP TABLE \`vehicle_location\``);
        await queryRunner.query(`DROP TABLE \`captain_fee\``);
        await queryRunner.query(`DROP TABLE \`payments\``);
        await queryRunner.query(`DROP INDEX \`REL_72d0f0ecfc71ee89771f3de60d\` ON \`vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_bf694919e3c7689ffaa0d880b1\` ON \`vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_66ea96381a7a7ceb35c72f3662\` ON \`vehicles\``);
        await queryRunner.query(`DROP TABLE \`vehicles\``);
        await queryRunner.query(`DROP TABLE \`vehicle_type\``);
        await queryRunner.query(`DROP TABLE \`vehicle_features\``);
        await queryRunner.query(`DROP TABLE \`routes\``);
        await queryRunner.query(`DROP TABLE \`terminals\``);
        await queryRunner.query(`DROP TABLE \`lga\``);
        await queryRunner.query(`DROP INDEX \`IDX_4fdf5f552fcfe06082a35e9728\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_1e3d0240b49c40521aaeb95329\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_792f6214dac298ff98895f7a78\` ON \`priviledge\``);
        await queryRunner.query(`DROP TABLE \`priviledge\``);
        await queryRunner.query(`DROP TABLE \`passengers\``);
        await queryRunner.query(`DROP TABLE \`profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_ccc7c1489f3a6b3c9b47d4537c\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`states\``);
    }

}
