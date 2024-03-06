import { Router } from 'express';
import { getEventSlug } from '../controllers/eventController.js';
//Middleware
import { authLogin } from '../middlewares/validateLogged.js';

export const eventRoute = Router();

eventRoute
    .get('/', (req, res) => {res.render('events', { session: req.session })})
    .get('/:slug', getEventSlug )