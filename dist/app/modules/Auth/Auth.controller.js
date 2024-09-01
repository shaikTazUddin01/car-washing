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
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const cathcAsync_1 = __importDefault(require("../../utils/cathcAsync"));
const signUpAuth = (0, cathcAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { password, ...signUpInfo } = req.body;
    console.log(req.body);
    const result = yield auth_service_1.AuthServices.signUpAuth(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User registered successfully",
        data: result,
    });
}));
const loginAuth = (0, cathcAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield auth_service_1.AuthServices.loginAuth(req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User logged in successfully",
        data: { data: data.user, token: data.token },
    });
}));
const getMyAccountInFo = (0, cathcAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield auth_service_1.AuthServices.getMyAccountInFo(id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Retrieve My Account InFo",
        data: data,
    });
}));
const getUserFromDB = (0, cathcAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield auth_service_1.AuthServices.getUserFromDB();
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "user retrieve success",
        data: data,
    });
}));
const updateMyAccountInFo = (0, cathcAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield auth_service_1.AuthServices.updateMyAccountInFo(id, req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Profile updated",
        data: data,
    });
}));
const updateUserRole = (0, cathcAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield auth_service_1.AuthServices.updateUserRole(id, req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "user role updated",
        data: data,
    });
}));
exports.AuthController = {
    signUpAuth,
    loginAuth,
    getMyAccountInFo,
    updateMyAccountInFo,
    getUserFromDB,
    updateUserRole
};
