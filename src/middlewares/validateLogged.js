export const authLogin = (req, res, next) => {
    //Si tenemos guardado un token en la session
    if(!req.session.logged){
        res.redirect('/login');
    }
    next();
}

export const authNotLogin = (req, res, next) => {
    //Si tenemos guardado un token en la session
    if(req.session.logged){
        res.redirect('/');
    }
    next();
}