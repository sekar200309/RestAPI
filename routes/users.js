import express from 'express'
import { getUsers,createUser,getUser,deleteUser,updateUser } from '../controller/usersController.js';
const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);



export default router;