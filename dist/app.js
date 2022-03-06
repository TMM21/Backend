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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var typeorm_plus_1 = require("typeorm-plus");
var logger_1 = require("./utils/logger");
//   import {BASE_PATH } from "./config";
var middleware_1 = require("./middleware");
var api_1 = require("./api");
var App = /** @class */ (function () {
    // public basePath = BASE_PATH || '';
    function App() {
        this.express = (0, express_1.default)();
        this.boot();
    }
    App.prototype.boot = function () {
        this.initializeDB();
        this.registerMiddlewares();
        this.Routers();
        this.handleUncaughtError();
    };
    App.prototype.registerMiddlewares = function () {
        (0, middleware_1.global)(this.express);
    };
    App.prototype.Routers = function () {
        this.express.use('/states', api_1.stateRouter);
        this.express.use('/terminals', api_1.TerminalRouter);
        this.express.use('/routes', api_1.RoutesRouter);
        this.express.use('/trip', api_1.TripRouter);
        this.express.use('/vehiclefeatures', api_1.VehicleFeatureRouter);
        this.express.use('/vehicleTypes', api_1.VehicleTypeRouter);
        this.express.use('/roles', api_1.RoleRouter);
        this.express.use('/bookings', api_1.BookingRouter);
        this.express.use('/vehicle', api_1.VehicleRouter);
        this.express.use('/auth', api_1.AuthRouter);
        this.express.use('/priviledge', api_1.PriviledgeRouter);
        this.express.use('/location', api_1.locationRouter);
        // this.express.use(authorize)
        this.express.use('/lga', api_1.LgaRouter);
        this.express.use('/user', api_1.userRouter);
        this.express.use('/captainfee', api_1.CaptainRouter);
    };
    App.prototype.initializeDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        //   await createConnection()
                        // await createConnection({
                        //     type:"mysql",
                        //     host:DB_HOST,
                        //     port:3306,
                        //     username:DB_USER,
                        //     password:DB_PASSWORD,
                        //     database:DB_NAME,
                        //     synchronize:false,
                        //     entities:['**/api/**/*Model.js'],
                        //     migrations:['/src/db/migrations/**.ts'],
                        //     cli:{
                        //         "migrationsDir":"src/migration"
                        //     }
                        // })
                        return [4 /*yield*/, (0, typeorm_plus_1.createConnection)()
                            //   {
                            //     "type":"mysql",
                            //     "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
                            //     "port":3306,
                            //     "username":"admin",
                            //     "password":"okechukwu26",
                            //     "database":"Motor",
                            //     "synchronize":false,
                            //     "logging":false,
                            //    "entities":["**/api/**/*Model.{js, ts}"],
                            //     "migrations":["src/migration/*.ts"],
                            //     "cli":{
                            //         "migrationsDir":"src/migration"
                            //     }
                            // }
                            //   {
                            //     type:"mysql",
                            //     host:"localhost",
                            //     username:"root",
                            //     password:"Okechukwuemordi26",
                            //     database:"miracle",
                            //     synchronize:false,
                            //     entities:['**/api/**/*Model.js'],
                            //     migrations:['/src/db/migrations/**.ts'],
                            //     cli:{
                            //         "migrationsDir":"src/migration"
                            //     }
                            // }
                        ];
                    case 1:
                        //   await createConnection()
                        // await createConnection({
                        //     type:"mysql",
                        //     host:DB_HOST,
                        //     port:3306,
                        //     username:DB_USER,
                        //     password:DB_PASSWORD,
                        //     database:DB_NAME,
                        //     synchronize:false,
                        //     entities:['**/api/**/*Model.js'],
                        //     migrations:['/src/db/migrations/**.ts'],
                        //     cli:{
                        //         "migrationsDir":"src/migration"
                        //     }
                        // })
                        _a.sent();
                        //   {
                        //     "type":"mysql",
                        //     "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
                        //     "port":3306,
                        //     "username":"admin",
                        //     "password":"okechukwu26",
                        //     "database":"Motor",
                        //     "synchronize":false,
                        //     "logging":false,
                        //    "entities":["**/api/**/*Model.{js, ts}"],
                        //     "migrations":["src/migration/*.ts"],
                        //     "cli":{
                        //         "migrationsDir":"src/migration"
                        //     }
                        // }
                        //   {
                        //     type:"mysql",
                        //     host:"localhost",
                        //     username:"root",
                        //     password:"Okechukwuemordi26",
                        //     database:"miracle",
                        //     synchronize:false,
                        //     entities:['**/api/**/*Model.js'],
                        //     migrations:['/src/db/migrations/**.ts'],
                        //     cli:{
                        //         "migrationsDir":"src/migration"
                        //     }
                        // }
                        logger_1.logger.info('Database connection was succesful');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error('unable to connect to database ' + error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.handleUncaughtError = function () {
        process.on('unhandledRejection', function (reason, promise) {
            throw reason;
        });
        process.on('uncaughtException', function (error) {
            logger_1.logger.error("Uncaught Exception: ".concat(500, " - ").concat(error.message, ", Stack: ").concat(error.stack));
            process.exit(1);
        });
        process.on('SIGINT', function () {
            logger_1.logger.info(' Alright! Bye bye!');
            process.exit();
        });
        this.express.use(middleware_1.errorHandler);
    };
    return App;
}());
var app = new App().express;
exports.default = app;
// {
//         "type":"mysql",
//         "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
//         "port":3306,
//         "username":"admin",
//         "password":"okechukwu26",
//         "database":"miracle",
//         "synchronize":false,
//         "logging":false,
//        "entities":["**/api/**/*Model.ts"],
//         "migrations":["src/migration/*.ts"],
//         "cli":{
//             "migrationsDir":"src/migration"
//         }
//     }
// {
//   "type":"mysql",
//   "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
//   "port":3306,
//   "username":"admin",
//   "password":"okechukwu26",
//   "database":"Motor",
//   "synchronize":false,
//   "logging":false,
//  "entities":["**/api/**/*Model.ts"],
//   "migrations":["src/migration/*.ts"],
//   "cli":{
//       "migrationsDir":"src/migration"
//   }
// }
// {
//   "type":"mysql",
//   "host":"localhost",
//   "username":"root",
//   "password":"Okechukwuemordi26",
//   "database":"miracle",
//   "logging":false,
//   "synchronize":false,
//   "entities":["**/api/**/*Model.ts"],
//   "migrations":["src/migration/*.ts"],
//   "cli":{
//       "migrationsDir":"src/migration"
//   }
// }
