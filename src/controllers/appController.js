import Category from '../Models/categoryModel.js';

export const pageHome = async (req, res) => {
    const categories = await Category.get({});
    console.log(categories);
    return res.render('index', { categories: categories.data, session: req.session });
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