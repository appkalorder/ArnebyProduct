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
    static newPassword({ version }){
        return this.apiURL + "/" + version + "/auth/new-password";
    }

    //URL for post Event
    static newFile({ version }){
        return this.apiURL + "/" + version + "/file/upload/";
    }

    //URL for post Event
    static newEvent({ version, id }){
        return this.apiURL + "/" + version + "/event/";
    }

    //URL for getEvents
    static getOneEvent({ version, id }){
        return this.apiURL + "/" + version + "/event/" + id;
    }

    //URL for getEvents
    static getEvent({ version, params }){
        return this.apiURL + "/" + version + "/event/" + params;
    }
}

export default apiEndpoints;
