// Campos del Formulario
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const adicionalInput = document.querySelector('#adicional');

// Interfaz del Usuario
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

// Contructor
class Citas {
    constructor() {
        this.citas = [];
    }
}

class UI {

    mostrarAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12', 'display-4');

        // Agregar clase en base al tipo de error
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar la alerta
        setTimeout ( () => {
            divMensaje.remove();
        }, 5000 );
    }
}

const ui = new UI();
const administrarCitas = new Citas();

// Registrar Eventos
eventListeners();
function eventListeners() {
    nombreInput.addEventListener('input', datosCita);
    apellidoInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    adicionalInput.addEventListener('input', datosCita);
    formulario.addEventListener('submit', nuevaCita);
}

// Objeto con la informacion de la Cita/Reserva
const citaObj = {
    nombre: '',
    apellido: '',
    telefono: '',
    fecha: '',
    hora: '',
    adicional: ''
}

// Agrega datos al Objeto Cita/Reserva
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

    console.log(citaObj);
}

// Validar y Agregar una nueva cita  a la clase citas
function nuevaCita(e) {
    e.preventDefault();

    // Extraer la informacion del objeto Cita
    const { nombre, apellido, telefono, fecha, hora, adicional } = citaObj;

    // Validar
    if( nombre === '' || apellido === '' || telefono === '' || fecha === '' || hora === '' || adicional === '') {
        ui.mostrarAlerta('Todos los campos son Obligatorios', 'error');

        return;
    } else {
        ui.mostrarAlerta('Tu reserva ha sido Exitosa');
    }
}