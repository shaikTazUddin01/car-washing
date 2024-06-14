"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cteateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cteateToken = (jwtpayload, secret, expiresIn) => {
    return jsonwebtoken_1.default.sign(jwtpayload, secret, {
        expiresIn: expiresIn,
    });
};
exports.cteateToken = cteateToken;
