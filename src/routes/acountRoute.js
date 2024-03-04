import { Router } from 'express';
import fileUpload from 'express-fileupload'; //Upload files
import { getFormEvent, postFormEvent } from '../controllers/eventController.js';

export const AcountRoute = Router();

AcountRoute.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: {
        fileSize: 15000000 //15mb
    },
    abortOnLimit: true
}));

AcountRoute
    .get('/', (req, res) => {res.render('profile', { session: req.session })})
    .get('/post', getFormEvent)
    .post('/post', postFormEvent)