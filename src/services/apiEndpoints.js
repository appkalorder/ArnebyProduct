/**
 * Clase para tener los puntos de la Api a usar
 * @class
 */
class apiEndpoints {
    //Domain without /
    static apiURL = process.env.API_URL || "https://api.arneby.com"

    //URL for login
    static login({ version }){
        return this.apiURL + "/" + version + "/auth/login";
    }

    //URL for Register
    static register({ version }){
        return this.apiURL + "/" + version + "/auth/register";
    }

    //URl para pedir link y token para login
    static lostPassword({ version }){
        return this.apiURL + "/" + version + "/auth/lost-password";
    }

    //URl para pedir nueva contraseña con el token
    static lostPassword({ version }){
        return this.apiURL + "/" + version + "/auth/new-password";
    }

    //URL for getEvents
    static getOneEvents({ version, id }){
        return this.apiURL + "/" + version + "/event/" + id;
    }

    //URL for getEvents
    static getEvents({ version, params }){
        return this.apiURL + "/" + version + "/event/" + params;
    }
}

export default apiEndpoints;
