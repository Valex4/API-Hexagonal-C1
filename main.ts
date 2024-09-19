import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./src/User/Infrastructure/Routes/UserRouter";
import { shopRouter } from "./src/Shop/Infrastructure/Routes/ShopRouter";

dotenv.config()

const app = express();

app.use(express.json());

app.use('/API/v1/users', userRouter);
app.use('/API/v1/shops', shopRouter);

app.listen(3000, ()=> {
    console.log("The API is running in the port 3000")
})