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
exports.AuthService = void 0;
var Role_1 = require("../Role");
var utils_1 = require("../../utils");
var google_libphonenumber_1 = require("google-libphonenumber");
var User_1 = require("../User");
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var uuid_1 = require("uuid");
var Priviledge_1 = require("../Priviledge");
var Terminal_1 = require("../Terminal");
var AuthService = /** @class */ (function () {
    function AuthService() {
        //registration of customer
        var _this = this;
        this.createCustomer = function (customer) { return __awaiter(_this, void 0, void 0, function () {
            var _a, parsedPhoneNumber, isValidPhoneNumber, phone, email, role, expriviledge, _b, user, priviledge, refreshToken, AccessToken;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //check if role is customer
                        if (customer.role !== 'customer') {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        _a = this.parsePhoneNumber(customer.phoneNumber), parsedPhoneNumber = _a.parsedPhoneNumber, isValidPhoneNumber = _a.isValidPhoneNumber;
                        if (!isValidPhoneNumber) {
                            throw new utils_1.AppError('invalid phone number');
                        }
                        return [4 /*yield*/, User_1.Users.findOne({ phoneNumber: parsedPhoneNumber })];
                    case 1:
                        phone = _c.sent();
                        if (phone) {
                            throw new utils_1.AppError("An account with ".concat(customer.phoneNumber, " already exists"));
                        }
                        return [4 /*yield*/, User_1.Users.findOne({ email: customer.email })];
                    case 2:
                        email = _c.sent();
                        if (email) {
                            throw new utils_1.AppError("A user with this email ".concat(customer.email, " already exists "));
                        }
                        return [4 /*yield*/, Role_1.Roles.findOneOrFail({
                                where: [{ role: customer.role }],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid role selected');
                            })];
                    case 3:
                        role = _c.sent();
                        return [4 /*yield*/, Priviledge_1.Priviledge.findOne({
                                where: [{ name: role.role }],
                            })];
                    case 4:
                        expriviledge = _c.sent();
                        if (!expriviledge) {
                            throw new utils_1.AppError('invalid priviledge selected');
                        }
                        ;
                        (customer.phoneNumber = parsedPhoneNumber);
                        _b = customer;
                        return [4 /*yield*/, bcrypt_1.default.hash(customer.password, 8)];
                    case 5:
                        (_b.password = _c.sent());
                        user = User_1.Users.create(customer);
                        user.priviledge = expriviledge;
                        user.roles = role;
                        user.gender = customer.gender;
                        priviledge = [expriviledge];
                        user.priviledges = priviledge.map(function (item) { return item.name; });
                        return [4 /*yield*/, user.save()
                            //generate token and refreshToken
                        ];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.generateRefreshToken(user)];
                    case 7:
                        refreshToken = _c.sent();
                        return [4 /*yield*/, this.generateAcessToken(user)];
                    case 8:
                        AccessToken = _c.sent();
                        return [2 /*return*/, { user: user, refreshToken: refreshToken, AccessToken: AccessToken }];
                }
            });
        }); };
        this.loginCustomer = function (loginData) { return __awaiter(_this, void 0, void 0, function () {
            var _a, isValidPhoneNumber, parsedPhoneNumber, user, isMatch, refreshToken, AccessToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(loginData);
                        _a = this.parsePhoneNumber(loginData.phoneNumber), isValidPhoneNumber = _a.isValidPhoneNumber, parsedPhoneNumber = _a.parsedPhoneNumber;
                        if (!isValidPhoneNumber) {
                            throw new utils_1.AppError('invalid phone Number');
                        }
                        return [4 /*yield*/, User_1.Users.findOne({
                                where: [{ phoneNumber: parsedPhoneNumber }],
                                select: ['id', 'email', 'password', 'priviledges', 'phoneNumber', 'name'],
                                relations: ['roles', 'priviledge'],
                            })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new utils_1.AppError('no user with this credential exist');
                        }
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, bcrypt_1.default.compare(loginData.password, user.password)];
                    case 2:
                        isMatch = _b.sent();
                        if (!isMatch) {
                            throw new utils_1.AppError('no user with this credential exist');
                        }
                        delete user.password;
                        return [4 /*yield*/, this.generateRefreshToken(user)];
                    case 3:
                        refreshToken = _b.sent();
                        return [4 /*yield*/, this.generateAcessToken(user)];
                    case 4:
                        AccessToken = _b.sent();
                        return [2 /*return*/, { user: user, refreshToken: refreshToken, AccessToken: AccessToken }];
                }
            });
        }); };
        this.createUser = function (addUser) { return __awaiter(_this, void 0, void 0, function () {
            var _a, isValidPhoneNumber, parsedPhoneNumber, terminal, phone, email, role, _b, priviledge, user, priv, refreshToken, AccesToken;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (addUser.role === 'customer') {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        if (addUser.terminal === null) {
                            throw new utils_1.AppError('terminal ID required', null, 404);
                        }
                        _a = this.parsePhoneNumber(addUser.phoneNumber), isValidPhoneNumber = _a.isValidPhoneNumber, parsedPhoneNumber = _a.parsedPhoneNumber;
                        if (!isValidPhoneNumber) {
                            throw new utils_1.AppError('invalid phone Number');
                        }
                        return [4 /*yield*/, Terminal_1.Terminals.findOneOrFail({
                                where: [{ id: addUser.terminal }],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid terminal');
                            })];
                    case 1:
                        terminal = _c.sent();
                        return [4 /*yield*/, User_1.Users.findOne({
                                where: [{ phoneNumber: parsedPhoneNumber }],
                            })];
                    case 2:
                        phone = _c.sent();
                        if (phone) {
                            throw new utils_1.AppError("A user with this phoneNumber ".concat(addUser.phoneNumber, " already exist"));
                        }
                        return [4 /*yield*/, User_1.Users.findOne({ where: [{ email: addUser.email }] })];
                    case 3:
                        email = _c.sent();
                        if (email) {
                            throw new utils_1.AppError("A user with this email ".concat(addUser.email, " already exists"));
                        }
                        return [4 /*yield*/, Role_1.Roles.findOneOrFail({
                                where: [{ role: addUser.role }],
                            }).catch(function () {
                                throw new utils_1.AppError('invalid role selected');
                            })];
                    case 4:
                        role = _c.sent();
                        console.log(role, terminal);
                        addUser.phoneNumber = parsedPhoneNumber;
                        //hash password
                        _b = addUser;
                        return [4 /*yield*/, bcrypt_1.default.hash(addUser.password, 8)];
                    case 5:
                        //hash password
                        _b.password = _c.sent();
                        return [4 /*yield*/, Priviledge_1.Priviledge.findOne({
                                where: [{ name: role.role }],
                            })];
                    case 6:
                        priviledge = _c.sent();
                        if (priviledge === undefined) {
                            throw new utils_1.AppError('Invalid priviledge selected');
                        }
                        user = User_1.Users.create(addUser);
                        user.Terminal = terminal.id;
                        user.priviledge = priviledge;
                        priv = [priviledge];
                        user.priviledges = priv.map(function (item) { return item.name; });
                        user.roles = role;
                        return [4 /*yield*/, this.generateRefreshToken(user)];
                    case 7:
                        refreshToken = _c.sent();
                        return [4 /*yield*/, this.generateAcessToken(user)];
                    case 8:
                        AccesToken = _c.sent();
                        return [2 /*return*/, { user: user, refreshToken: refreshToken, AccesToken: AccesToken }];
                }
            });
        }); };
        this.loginUser = function (loginData) { return __awaiter(_this, void 0, void 0, function () {
            var _a, isValidPhoneNumber, parsedPhoneNumber, user, isMatch, refreshToken, AccessToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.parsePhoneNumber(loginData.phoneNumber), isValidPhoneNumber = _a.isValidPhoneNumber, parsedPhoneNumber = _a.parsedPhoneNumber;
                        if (!isValidPhoneNumber) {
                            throw new utils_1.AppError('invalid phone Number');
                        }
                        return [4 /*yield*/, User_1.Users.findOne({
                                where: [{ phoneNumber: parsedPhoneNumber }],
                                select: [
                                    'id',
                                    'name',
                                    'password',
                                    'phoneNumber',
                                    'priviledge',
                                    'Terminal',
                                    'priviledges',
                                ],
                                relations: ['roles', 'priviledge'],
                            })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new utils_1.AppError('no user with this credential exists ');
                        }
                        if (user.block) {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        return [4 /*yield*/, bcrypt_1.default.compare(loginData.password, user.password)];
                    case 2:
                        isMatch = _b.sent();
                        if (!isMatch) {
                            throw new utils_1.AppError('no user with this credential exists');
                        }
                        if (user.roles.role === 'customer') {
                            throw new utils_1.AppError('UnAuthorized', null, 404);
                        }
                        delete user.password;
                        console.log(user);
                        return [4 /*yield*/, this.generateRefreshToken(user)];
                    case 3:
                        refreshToken = _b.sent();
                        return [4 /*yield*/, this.generateAcessToken(user)];
                    case 4:
                        AccessToken = _b.sent();
                        return [2 /*return*/, { user: user, refreshToken: refreshToken, AccessToken: AccessToken }];
                }
            });
        }); };
        this.AssignPriviledge = function (id, assign) { return __awaiter(_this, void 0, void 0, function () {
            var user, _loop_1, _i, _a, priviledge;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, User_1.Users.findOneOrFail({ where: [{ id: id }] }).catch(function () {
                            throw new utils_1.AppError('user not found');
                        })];
                    case 1:
                        user = _b.sent();
                        _loop_1 = function (priviledge) {
                            var isMatch = user.priviledges.every(function (item) {
                                return priviledge.includes(item);
                            });
                            if (!isMatch) {
                                user.priviledges.push(priviledge);
                            }
                        };
                        for (_i = 0, _a = assign.priviledge; _i < _a.length; _i++) {
                            priviledge = _a[_i];
                            _loop_1(priviledge);
                        }
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, 'updated successfully'];
                }
            });
        }); };
        this.RemovePriviledge = function (id, assign) { return __awaiter(_this, void 0, void 0, function () {
            var user, _loop_2, _i, _a, priviledge;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, User_1.Users.findOneOrFail({ where: [{ id: id }] }).catch(function () {
                            throw new utils_1.AppError('user not found');
                        })];
                    case 1:
                        user = _b.sent();
                        _loop_2 = function (priviledge) {
                            console.log(priviledge);
                            var isMatch = user.priviledges.filter(function (item) { return item !== priviledge; });
                            user.priviledges = [];
                            for (var _c = 0, isMatch_1 = isMatch; _c < isMatch_1.length; _c++) {
                                var match = isMatch_1[_c];
                                user.priviledges.push(match);
                            }
                        };
                        for (_i = 0, _a = assign.priviledge; _i < _a.length; _i++) {
                            priviledge = _a[_i];
                            _loop_2(priviledge);
                        }
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, 'updated successfully'];
                }
            });
        }); };
        this.generateAcessToken = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var body, token;
            return __generator(this, function (_a) {
                body = { id: user.id };
                token = jsonwebtoken_1.default.sign({ iss: 'http://localhost:3000', user: body }, 'AIzaSyDnN72_PIUPd6mHgVQv2GuhpLn4wot3ke4', {
                    expiresIn: '1d',
                });
                return [2 /*return*/, token];
            });
        }); };
    }
    AuthService.prototype.parsePhoneNumber = function (phoneNumber) {
        var phoneNumberUtilInstance = google_libphonenumber_1.PhoneNumberUtil.getInstance();
        var googlePhoneNumber;
        var parsedPhoneNumber;
        try {
            googlePhoneNumber = phoneNumberUtilInstance.parse(phoneNumber.toString(), 'NG');
            parsedPhoneNumber = phoneNumberUtilInstance.format(googlePhoneNumber, google_libphonenumber_1.PhoneNumberFormat.E164);
        }
        catch (error) {
            /* Handle errors thrown by phoneNumber parsing */
            throw new utils_1.AppError(error.message);
        }
        var isValidPhoneNumber = phoneNumberUtilInstance.isValidNumberForRegion(googlePhoneNumber, 'NG');
        return { isValidPhoneNumber: isValidPhoneNumber, parsedPhoneNumber: parsedPhoneNumber };
    };
    AuthService.prototype.generateRefreshToken = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = (0, uuid_1.v4)();
                        user.refreshToken = refreshToken;
                        return [4 /*yield*/, user.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, refreshToken];
                }
            });
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
