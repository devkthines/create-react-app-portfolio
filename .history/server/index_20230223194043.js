
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
  }


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect('mongodb+srv://dev_kthines:newMe116@cluster0.yv4efwq.mongodb.net/Portfolio?retryWrites=true&w=majority',{

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
// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    })