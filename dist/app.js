"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
// import notFound from './app/middlewares/';
const app = (0, express_1.default)();
//api middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ['http://localhost:5173'], credentials: true }));
//create api route
app.use("/api", routes_1.default);
//global error handle
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFound_1.default);
app.get("/", (req, res) => {
    res.send("server is connecting");
});
exports.default = app;
