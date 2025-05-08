import express from "express";
import models from "../server";

const router = express.Router();

router.post("/add", async (req, res)=> {
    const title = req.body.title;
    const description = req.body.description;
    const done = req.body.done;

    const todo = await models.todoModel.create({
        title,
        description,
        done
    })
    res.json({
        message : "todo added"
    })
})

router.get("/preview", async(req , res)=> {
    //@ts-ignore
    const userid = req.id;
    const todo = await models.todoModel.findOne({
        userid
    })
    res.json({
        todo
    })
})

export default router