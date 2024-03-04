// Obtener el dominio/subdominio automáticamente
const domain = window.location.origin;

document.addEventListener('DOMContentLoaded', function () {
    //Page Login
    if (window.location.href.includes('/account/post')) {
        // Crear un mapa centrado en Ecuador, Santo Domingo
        var map = L.map('map').setView([-0.2295, -78.5243], 13);

        // Agregar capa de mapa base de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Crear un marcador en la posición inicial (Ecuador, Santo Domingo)
        var marker = L.marker([-0.2295, -78.5243], {
            draggable: true
        }).addTo(map);

        // Función para actualizar los campos de entrada con las coordenadas del marcador
        function updateInputFields(latlng) {
            document.getElementById('latitude').value = latlng.lat.toFixed(6);
            document.getElementById('longitude').value = latlng.lng.toFixed(6);
        }

        // Actualizar los campos de entrada cuando el marcador se mueve
        marker.on('dragend', function (event) {
            var position = marker.getLatLng();
            updateInputFields(position);
        });

        // Actualizar los campos de entrada cuando se hace clic en el mapa
        map.on('click', function (event) {
            var clickedPosition = event.latlng;
            marker.setLatLng(clickedPosition);
            updateInputFields(clickedPosition);
        });


        //FORM DATE

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
});