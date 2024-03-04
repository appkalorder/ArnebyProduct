import { Router } from 'express';

//Middleware
import { authLogin } from '../middlewares/validateLogged.js';

export const eventRoute = Router();

eventRoute
    .get('/', (req, res) => {res.render('events', { session: req.session })})
    .get('/:cat/:id', (req, res) => {res.render('eventSingle', { session: req.session })})