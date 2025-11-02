let who = [
    'El perro', 'Mi abuela', 'El cartero', 'Mi pájaro',
    'El gato del vecino', 'Una ardilla espacial', 'La IA de mi asistente',
    'Mi gemelo malvado', 'El duende del hardware', 'Un grupo de hámsteres',
    'El repartidor de pizza', 'El conserje', 'Un hacker ético (demasiado ético)',
    'El último parche de seguridad', 'Un error cósmico', 'Mi tostadora inteligente'
];

let action = [
    'se comió', 'orinó sobre', 'aplastó', 'rompió',
    'saboteó', 'confundió con', 'reprogramó', 'se llevó',
    'inutilizó', 'desmaterializó', 'secuestró', 'virtualizó',
    'corrompió', 'desfragmentó accidentalmente', 'abdujo', 'hackeó'
];

let what = [
    'mi tarea', 'mi teléfono', 'el coche', 'mi informe',
    'la presentación crucial', 'el servidor de correo', 'mi agenda',
    'el disco duro principal', 'el cable de red', 'el cronograma del proyecto',
    'la base de datos de clientes', 'mi conexión a internet', 'el teclado inalámbrico',
    'el archivo zip con los entregables', 'el código fuente', 'el café de la mañana'
];

let when = [
    'antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio',
    'durante mi almuerzo', 'mientras rezaba', 'durante la tormenta de anoche',
    'justo antes de la fecha límite', 'en medio de la videoconferencia',
    'mientras estaba en el baño', 'durante el apagón', 'al amanecer',
    'en un sueño profundo', 'durante la actualización del sistema', 'justo después de guardarlo',
    'en el momento menos oportuno', 'tras una fuerte descarga eléctrica'
];


function generateRandomExcuse() {
    const getRandomElement = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    let randomWho = getRandomElement(who);
    let randomAction = getRandomElement(action);
    let randomWhat = getRandomElement(what);
    let randomWhen = getRandomElement(when);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

}

window.onload = function() {
    let excuseElement = document.getElementById('excuse');

    if (excuseElement) {
        excuseElement.innerHTML = generateRandomExcuse();
    } else {
        console.error("Error: El elemento con ID 'excuse' no se encontró en el DOM.");
    }
};