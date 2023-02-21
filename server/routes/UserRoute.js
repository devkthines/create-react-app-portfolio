import express from "express";
import {
    getProjects, saveMessage,

} from "../controllers/UserController.js";

const router = express.Router();

router.get('/projects', getProjects);
router.post('/contact', saveMessage);

export default router;