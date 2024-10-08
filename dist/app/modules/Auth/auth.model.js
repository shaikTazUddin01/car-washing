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
exports.Auth = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const AuthSchema = new mongoose_1.Schema({
    image: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    role: {
        type: String,
        enum: { values: ["user", "admin"], message: "{VALUE} is not supported" },
        required: true,
        trim: true,
    },
    address: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});
// middleware
AuthSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const Auth = this;
        Auth.password = yield bcrypt_1.default.hash(Auth.password, Number(config_1.default.bcrypt_saltRounds));
        next();
    });
});
AuthSchema.set("toJSON", {
    transform: function (doc, ret) {
        ret === null || ret === void 0 ? true : delete ret.password;
        return ret;
    },
});
exports.Auth = (0, mongoose_1.model)("Auth", AuthSchema);
