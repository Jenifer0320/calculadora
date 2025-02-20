function enviar() {
    var contenido = document.querySelector('#contenido');
    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;
    var url = "";

    // Validar selección de operación
    if (document.querySelector('#opcion1').checked) {
        url = `http://127.0.0.1:5000/suma/${v1}/${v2}`;
    } else if (document.querySelector('#opcion2').checked) {
        url = `http://127.0.0.1:5000/resta/${v1}/${v2}`;
    } else if (document.querySelector('#opcion3').checked) {
        url = `http://127.0.0.1:5000/multiplicacion/${v1}/${v2}`;
    } else if (document.querySelector('#opcion4').checked) {
        url = `http://127.0.0.1:5000/division/${v1}/${v2}`;
    } else if (document.querySelector('#opcion5').checked) {
        url = `http://127.0.0.1:5000/potenciacion/${v1}/${v2}`;
    } else if (document.querySelector('#opcion6').checked) {
        url = `http://127.0.0.1:5000/seno/${v1}`;
    } else if (document.querySelector('#opcion7').checked) {
        url = `http://127.0.0.1:5000/coseno/${v1}`;
    } else {
        swal("Mensaje", "Seleccione una opción", "warning");
        return; // Salir de la función si no hay selección
    }

    // Validar valores numéricos
    if (!v1 || (document.querySelector('#t2') && !v2)) {
        swal("Advertencia", "Por favor, ingrese los valores requeridos.", "warning");
        return;
    }

    // Llamada a la API
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la llamada al servidor");
            }
        })
        .then(function (data) {
            // Mostrar el resultado en el HTML
            contenido.innerHTML = `
                <h3>Resultado: ${data.Resultado}</h3>
                <h3>Operación: ${data.Operacion}</h3>
            `;
            swal("Éxito", "Proceso realizado correctamente", "success");
        })
        .catch(function (error) {
            console.error(error);
            swal("Error", "Hubo un problema con la operación. Detalles: " + error.message, "error");
        });
}

