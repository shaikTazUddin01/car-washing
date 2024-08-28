"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/signup', 
// validateRequest(AuthValidation.signUpValidationSchema),
auth_controller_1.AuthController.signUpAuth);
router.post('/login', (0, validationRequest_1.default)(auth_validation_1.AuthValidation.logInValidationSchema), auth_controller_1.AuthController.loginAuth);
exports.authRouter = router;
