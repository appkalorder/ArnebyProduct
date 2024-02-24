import { Router } from 'express';
import fileUpload from 'express-fileupload'; 
import { authLogin } from '../middlewares/validateLogged.js';

export const AcountRoute = Router();

AcountRoute
    .use(fileUpload({
        useTempFiles : true,
        tempFileDir : './uploads'
    }))
    .get('/', authLogin, (req, res) => {res.render('profile')})