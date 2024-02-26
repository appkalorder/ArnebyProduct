/**
 * Clase para tener los puntos de la Api a usar
 * @class
 */
class apiQuery {
    apiURL = process.env.API_URL || "https://api.arneby.com/"
    
    static getEvents({ version }){
        return apiURL + "/" + version + "/events/";
    }
}

export default JsonModel;
