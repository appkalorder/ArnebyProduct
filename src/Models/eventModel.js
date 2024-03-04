import apiurl from '../services/apiEndpoints.js';
import axios from 'axios';

class eventModel{
    static async getCategories(){
        const url = apiurl.newEvent({ version: 'v1'});
        return await axios.post(url, obj)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
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
            return error.response.data;
        });
    }
}

export default eventModel;