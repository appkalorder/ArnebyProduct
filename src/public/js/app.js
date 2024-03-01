// Obtener el dominio/subdominio automáticamente
const domain = window.location.origin;

//Page Login
if (window.location.href.includes('/account/post')) {
    // Obtener referencias a los campos de fecha de inicio y fin
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    // Función para validar la fecha de inicio
    function validateStartDate() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        // Comprobar si la fecha de inicio es posterior a la fecha de fin
        if (startDate > endDate) {
            alert('La fecha de inicio no puede ser posterior a la fecha de fin');
            startDateInput.value = ''; // Limpiar el campo de fecha de inicio
        }
    }

    // Función para validar la fecha de fin
    function validateEndDate() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        // Comprobar si la fecha de fin es anterior a la fecha de inicio
        if (endDate < startDate) {
            alert('La fecha de fin no puede ser anterior a la fecha de inicio');
            endDateInput.value = ''; // Limpiar el campo de fecha de fin
        }
    }

    // Agregar oyentes de eventos para la validación
    startDateInput.addEventListener('change', validateStartDate);
    endDateInput.addEventListener('change', validateEndDate);
}

//Page Panel
if (window.location.href.includes('/panel')) {
    const txt_data1 = document.getElementById("ip-data1");
    const txt_data2 = document.getElementById("ip-data2");
    const txt_data3 = document.getElementById("ip-data3");
    const txt_data4 = document.getElementById("ip-data4");

    // Obtén una referencia al elemento contenedor donde se mostrarán las aplicaciones
    const panelAppsContainer = document.querySelector('.panel-apps');

    //Get Title
    const txt_title = document.getElementById("panel-title");

    if(txt_data1 && txt_data2 && txt_data3 && txt_data4) {
        // La URL actual contiene '/panel', por lo que estamos en la página de panel
        fetch(`${domain}/api/v1/auth`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            txt_data1.textContent = data.data.user.credits? data.data.user.credits : 0;
            txt_data2.textContent = data.data.user.apps ? data.data.user.apps : 0;
            txt_data3.textContent = data.data.user.posts ? data.data.user.posts : 0;
            txt_data4.textContent = "US$ " + (data.data.user.balance ? data.data.user.balance : 0);
            txt_title.textContent = "Hola, " + data.data.user.username;

            // Supongamos que data.apps es un arreglo de objetos con los datos de las aplicaciones
            data.data.apps.forEach(app => {
                // Crea un nuevo elemento <a> para cada aplicación
                const appElement = document.createElement('a');
                appElement.classList.add('item-app');
                appElement.href = `panel/app?appid=${app.appid}`; // Asegúrate de utilizar el campo de ID correcto

                // Crea un elemento <h3> para el nombre de la aplicación
                const appNameElement = document.createElement('h3');
                appNameElement.textContent = app.name;

                // Crea un elemento <p> para el tipo de aplicación (apptype)
                const appTypeElement = document.createElement('p');
                appTypeElement.textContent = app.apptype;

                // Agrega los elementos al contenedor
                appElement.appendChild(appNameElement);
                appElement.appendChild(appTypeElement);
                panelAppsContainer.appendChild(appElement);
            });

        })
        .catch(error => {
            console.error("Error en la solicitud a la API:", error);
        });
    }
}