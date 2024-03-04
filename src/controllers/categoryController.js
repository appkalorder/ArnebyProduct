import Category from '../Models/categoryModel.js';

export const getCategory = async (req, res) => {
    try {
        //Los valores de la Api
        const result = await Auth.login({email: email, password: password});
        return result;
    } catch (err) {
        console.log(err);
        return {};
    }
}