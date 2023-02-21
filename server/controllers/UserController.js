import Project from "../models/UserModel.js";
import Contact from "../models/ContactModel.js";
export const getProjects = async (req, res) => {
    try {
        const users = await Project.find();
        res.json(users);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const saveMessage = async (req, res) => {
    const user = new Contact(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}