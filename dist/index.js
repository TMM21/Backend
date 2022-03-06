"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var logger_1 = require("./utils/logger");
var port = process.env.PORT || 4000;
app_1.default.listen(port, function () {
    return logger_1.logger.info("server is listening on ".concat(port));
});
// {
//   "type":"mysql",
//   "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
//   "port":3306,
//   "username":"admin",
//   "password":"okechukwu26",
//   "database":"Motor",
//   "synchronize":false,
//   "logging":false,
//  "entities":["**/api/**/*Model.js"],
//   "migrations":["src/migration/*.js"],
//   "cli":{
//       "migrationsDir":"src/migration"
//   }
// }
