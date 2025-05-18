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
        done, 
        //@ts-ignore
        userId : req.id
    })
    res.json({
        message : "todo added"
    })
})

router.get("/todos", async(req , res)=> {
    //@ts-ignore
    const userid = req.id;
    console.log(userid)
    const todo = await models.todoModel.find({
       userId : userid
    })
    console.log(todo)
    res.json({
        todo
    })
})

router.delete("/todos/:id", async (req, res)=> {
    console.log("reached here")
    try {
   const { id } = req.params;
   console.log({id})
   await models.todoModel.findByIdAndDelete(id)
   res.json({
    message : 'req delted'
   })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message : "error deleting content"
        })
    }
})
router.put("/todos/:id", async (req, res)=> {
    console.log("reached")
    try {
        const { id } = req.params;
        const updated = req.body;

        await models.todoModel.findByIdAndUpdate(id, updated, { new: true })
        res.status(200).json({
            message : "updated succesfully"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message : "error updating"
        })
    }
})
export default router