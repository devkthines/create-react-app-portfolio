import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect('mongodb+srv://vercel-admin-user:SCmvlapFFfeWFS1E@cluster0.yv4efwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{

        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true

});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...' ));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server up and running...'));