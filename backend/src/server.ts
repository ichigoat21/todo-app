import mongoose, { Schema } from "mongoose";
mongoose.connect("mongodb+srv://shivresides:TjLuNHyDlELlttOM@second-brain.4jq3gmh.mongodb.net/todo-app").then(()=> console.log("connected to db"))

const userSchema = new Schema({
    username : String,
    password : String
})
//db pass - TjLuNHyDlELlttOM
const todoSchema = new Schema({
    title : String,
    userId: { type: mongoose.Types.ObjectId, ref: 'UserTable', required: true }
})

const userModel = mongoose.model("UserTable", userSchema)
const todoModel = mongoose.model("TodoTable", todoSchema)


const models = {userModel, todoModel}

export default models