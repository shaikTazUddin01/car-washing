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
exports.decodedData = exports.auth = void 0;
const cathcAsync_1 = __importDefault(require("../utils/cathcAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const auth_model_1 = require("../modules/Auth/auth.model");
const auth = (...requiredRole) => {
    return (0, cathcAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        let decoded = (0, exports.decodedData)((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization);
        // let token = req?.headers?.authorization;
        // token = token?.split(" ")[1];
        // console.log(token);
        // if (!token) {
        //   throw new Error("You are not authorizes.!");
        // }
        // const decoded = jwt.verify(
        //   token,
        //   config.access_token_secret as string
        // ) as JwtPayload;
        // console.log(decoded);
        const { AuthId, email, role, iat } = decoded;
        const isUserExists = yield auth_model_1.Auth.findOne({
            _id: AuthId,
            email,
            role,
        });
        if (!isUserExists) {
            // throw new Error("You are not authorized");
            res.json({
                success: false,
                statusCode: 401,
                message: "You have no access to this route",
            });
        }
        if (requiredRole && !requiredRole.includes(role)) {
            res.json({
                success: false,
                statusCode: 401,
                message: "You have no access to this route",
            });
            // throw new Error("you are not authorized");
        }
        // return decoded;
        next();
    }));
};
exports.auth = auth;
const decodedData = (header) => {
    let token = header;
    token = token === null || token === void 0 ? void 0 : token.split(" ")[1];
    // console.log(token);
    if (!token) {
        throw new Error("You are not authorizes.!");
    }
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.access_token_secret);
    return decoded;
};
exports.decodedData = decodedData;
