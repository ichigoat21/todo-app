import express from "express";
import userRouter from "./routes/user";
import router from "./routes/todos";
import { userMiddleware } from "./middleware";

const app = express();
const PORT = 3000;

app.use(express.json())

app.use('/users', userRouter)
app.use("/todos", userMiddleware, router)

app.listen(PORT, ()=> {console.log("server is running")})