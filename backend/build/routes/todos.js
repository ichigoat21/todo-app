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
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("../server"));
const router = express_1.default.Router();
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const description = req.body.description;
    const done = req.body.done;
    const todo = yield server_1.default.todoModel.create({
        title,
        description,
        done,
        //@ts-ignore
        userId: req.id
    });
    res.json({
        message: "todo added"
    });
}));
router.get("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userid = req.id;
    console.log(userid);
    const todo = yield server_1.default.todoModel.find({
        userId: userid
    });
    console.log(todo);
    res.json({
        todo
    });
}));
router.delete("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached here");
    try {
        const { id } = req.params;
        console.log({ id });
        yield server_1.default.todoModel.findByIdAndDelete(id);
        res.json({
            message: 'req delted'
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "error deleting content"
        });
    }
}));
router.put("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached");
    try {
        const { id } = req.params;
        const updated = req.body;
        yield server_1.default.todoModel.findByIdAndUpdate(id, updated, { new: true });
        res.status(200).json({
            message: "updated succesfully"
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "error updating"
        });
    }
}));
exports.default = router;
