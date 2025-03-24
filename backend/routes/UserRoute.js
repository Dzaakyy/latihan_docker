import express from "express";
import {getUsers, 
        getUsersById,
        createUser,
        updateUser,
        deletedUser
    } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/create-users', createUser)
router.patch('/update-users/:id', updateUser)
router.delete('/delete-users/:id', deletedUser)

export default router;