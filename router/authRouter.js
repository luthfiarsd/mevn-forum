import express from "express";
const router = express.Router();

import {RegisterUser, LoginUser, LogoutUser, getUser} from '../controllers/authController.js'

// POST /api/v1/auth/register
router.post('/register', RegisterUser)


// POST /api/v1/auth/login
router.post('/login', LoginUser)

// GET /api/v1/auth/logout
router.get('/logout', LogoutUser)

// GET /api/v1/auth/getuser
router.get('/getuser', getUser)

export default router;
