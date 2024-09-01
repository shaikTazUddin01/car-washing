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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const auth_model_1 = require("./auth.model");
const auth_utils_1 = require("./auth.utils");
const config_1 = __importDefault(require("../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUpAuth = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.role = "user";
    const user = yield auth_model_1.Auth.create(payload);
    return user;
});
// login Auth
const loginAuth = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield auth_model_1.Auth.findOne({ email: email });
    const isEmailMatch = (user === null || user === void 0 ? void 0 : user.email) === email;
    if (!isEmailMatch) {
        throw new Error("You are not authorized");
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
    // console.log("object-->", isPasswordMatch);
    // const isPasswordMatch = user?.password === password;
    if (!isPasswordMatch) {
        throw new Error("You are not authorized");
    }
    const jwtpayload = {
        AuthId: user === null || user === void 0 ? void 0 : user._id.toString(),
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
    };
    const token = (0, auth_utils_1.cteateToken)(jwtpayload, config_1.default.access_token_secret, config_1.default.access_token_expires_in);
    // const decoded = jwt.verify(token, "shhhhh");
    const loginInfo = {
        user: jwtpayload,
        token,
    };
    return loginInfo;
});
// get my account info
const getMyAccountInFo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.Auth.findById(id);
    return result;
});
// get account info
const getUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.Auth.find();
    return result;
});
// update my account info
const updateMyAccountInFo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.Auth.findByIdAndUpdate(id, data);
    return result;
});
const updateUserRole = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.Auth.findByIdAndUpdate(id, data);
    return result;
});
exports.AuthServices = {
    signUpAuth,
    loginAuth,
    getMyAccountInFo,
    updateMyAccountInFo,
    getUserFromDB,
    updateUserRole,
};
