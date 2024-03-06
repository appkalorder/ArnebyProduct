import Category from '../Models/categoryModel.js';
import Event from '../Models/eventModel.js';

export const pageHome = async (req, res) => {
    const categories = await Category.get({});
    const events = await Event.get({events: 8, page: 1});
    console.log(categories);
    return res.render('index', { categories: categories.data, events: events.data, session: req.session });
};

export const pageCondiciones = async (req, res) => {
    return res.render('pageCondiciones',  { session: req.session });
};

export const pageCookies = async (req, res) => {
    return res.render('pageCookies',  { session: req.session });
};

export const pageLegal = async (req, res) => {
    return res.render('pageLegal',  { session: req.session });
};

export const pagePrivacidad = async (req, res) => {
    return res.render('pagePrivacidad',  { session: req.session });
};