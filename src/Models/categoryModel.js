import apiurl from '../services/apiEndpoints.js';
import axios from 'axios';

class categoryModel{
    static async post(obj){
        //Obtener la URL e la api para registrar
        const url = apiurl.newCategory({ version: 'v1'});
        return await axios.post(url, obj)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
    }

    static async get(){
        //Obtener la URL e la api para registrar
        const url = apiurl.getCategory({ version: 'v1'});
        return await axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
    }

    static async getById({ id }){
        //Obtener la URL e la api para registrar
        const url = apiurl.getCategoryById({ version: 'v1', id: id });
        return await axios.get(url, {})
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
    }

    static async getBySlug({ slug }){
        //Obtener la URL e la api para registrar
        const url = apiurl.getCategoryBySlug({ version: 'v1', slug: slug});
        return await axios.get(url, {})
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
    }

    static async getByName({ name }){
        //Obtener la URL e la api para registrar
        const url = apiurl.getCategoryBySlug({ version: 'v1', name: name});
        return await axios.get(url, {})
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
    }
}

export default categoryModel;