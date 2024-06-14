"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,
    bcrypt_saltRounds: process.env.BCRYPT_SALTROUND,
    access_token_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
    access_token_expires_in: process.env.JWT_ACCESS_EXPIRES_IN
};
