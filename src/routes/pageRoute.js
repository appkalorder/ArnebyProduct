import { Router } from 'express';
import {pageHome, pageCondiciones, pageCookies, pageLegal, pagePrivacidad} from '../controllers/appController.js';

export const pageRoute = Router();

pageRoute
    .get('/', pageHome )
    .get('/terms', pageCondiciones )
    .get('/privacy', pagePrivacidad )
    .get('/legal', pageLegal )
    .get('/cookies', pageCookies )