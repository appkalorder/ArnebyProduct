import { Router } from 'express';
import { getLogin, getRegister, getForgetPass, getNewPass, logout, postLogin,postRegister, postForgetPass, postNewPass } from '../controllers/authController.js';
import { authNotLogin } from '../middlewares/validateLogged.js';

export const authRoute = Router();

authRoute
    .get('/login', authNotLogin, getLogin )
    .get('/register', authNotLogin, getRegister)
    .get('/forget-pass', authNotLogin, getForgetPass)
    .get('/new-password/', authNotLogin, getNewPass)
    .get('/new-password/:token', authNotLogin, getNewPass)
    .get('/logout', logout)

    .post('/login', authNotLogin, postLogin )
    .post('/register', authNotLogin, postRegister )
    .post('/forget-pass', authNotLogin, postForgetPass )
    .post('/new-password', authNotLogin, postNewPass )
    .post('/new-password/:token', authNotLogin, postNewPass )