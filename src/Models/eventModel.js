import apiurl from '../services/apiEndpoints.js';
import errorCatch from '../Models/errorModel.js';
import axios from 'axios';

class eventModel{
    static async getCategories(){
        const url = apiurl.newEvent({ version: 'v1'});
        return await axios.post(url, obj)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return errorCatch(error);
        });
    }

    static async getSlug({ slug }){
        //Obtener la URL e la api para registrar
        const url = apiurl.getEventSlug({ version: 'v1', slug: slug });
        return await axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return errorCatch(error);
        });
    }

    static async get({events, page}){
        //Obtener la URL e la api para registrar
        const url = apiurl.getEvent({ version: 'v1', events: events, page: page });
        return await axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return errorCatch(error);
        });
    }

    static async post(obj){
        //Obtener la URL e la api para registrar
        const url = apiurl.newEvent({ version: 'v1'});
        return await axios.post(url, obj)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return errorCatch(error);
        });
    }
}

export default eventModel;