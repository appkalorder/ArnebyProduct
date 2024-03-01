export const pageHome = async (req, res) => {
    return res.render('index', { session: req.session });
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