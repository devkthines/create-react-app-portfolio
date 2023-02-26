import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
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
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server up and running...'));





