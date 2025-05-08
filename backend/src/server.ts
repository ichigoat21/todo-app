import mongoose, { Schema } from "mongoose";
mongoose.connect("mongodb+srv://shivresides:XYWrWNrSyWnfM4q2@second-brain.4jq3gmh.mongodb.net/todo-app").then(()=> console.log("connected to db"))

const userSchema = new Schema({
    username : String,
    password : String
})

const todoSchema = new Schema({
    title : String,
    id : mongoose.Types.ObjectId,
    description : String,
    done : Boolean
})

const userModel = mongoose.model("UserTable", userSchema)
const todoModel = mongoose.model("TodoTable", todoSchema)

const models = {
    userModel,
    todoModel
}

export default models