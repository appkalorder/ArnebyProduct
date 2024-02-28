import { Router } from 'express';
import { getLogin, getRegister, getForgetPass, getNewPass, postLogin,postRegister, postForgetPass, postNewPass } from '../controllers/authController.js';
import { authNotLogin } from '../middlewares/validateLogged.js';

export const authRoute = Router();

authRoute
    .get('/login', authNotLogin, getLogin )
    .get('/register', authNotLogin, getRegister)
    .get('/forget-password', authNotLogin, getForgetPass)
    .get('/new-password', authNotLogin, getNewPass)

    .post('/login', authNotLogin, postLogin )
    .post('/register', authNotLogin, postRegister )
    .post('/forget-pass', authNotLogin, postForgetPass )
    .post('/new-password', authNotLogin, postNewPass)