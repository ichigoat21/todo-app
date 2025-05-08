"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const userMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        res.json({
            message: "bad request"
        });
        return;
    }
    const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_KEY);
    //@ts-ignore
    console.log(decoded, decoded._id);
    if (decoded) {
        //@ts-ignore
        req.id = decoded._id;
        next();
    }
};
exports.userMiddleware = userMiddleware;
