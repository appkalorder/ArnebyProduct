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
    static getCategory({ version }){
        return this.apiURL + "/" + version + "/event/category/";
    }

    //URL for post Event
    static getCategoryById({ version, id }){
        return this.apiURL + "/" + version + "/event/category/" + id;
    }

    //URL for post Event
    static getCategoryBySlug({ version, slug }){
        return this.apiURL + "/" + version + "/event/category_slug/" + slug;
    }

    //URL for post Event
    static getCategoryByName({ version, name }){
        return this.apiURL + "/" + version + "/event/category_name/" + name;
    }

    //URL for post Event
    static newCategory({ version }){
        return this.apiURL + "/" + version + "/event/category/";
    }

    //URL for post Event
    static newEvent({ version, id }){
        return this.apiURL + "/" + version + "/event/";
    }

    //URL for getEvents
    static getEventId({ version, id }){
        return this.apiURL + "/" + version + "/event/" + id;
    }

    //URL for getEvents
    static getEventSlug({ version, slug }){
        return this.apiURL + "/" + version + "/event/slug/" + slug;
    }

    //URL for getEvents
    static getEvent({ version, events, page }){
        return this.apiURL + "/" + version + "/event/?events=" + events + "&page=" + page;
    }
}

export default apiEndpoints;
