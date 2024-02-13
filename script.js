// EJERCICIO 1: CAMBIAR EL TÍTULO Y DESCRIPCION.
/*
Para cambiar el texto primero debemos de crear una variable de tipo string que
contenga el nuevo texto; tras ello, mediante la funcion document.getElementById() accedemos
al elemento que queremos modificar y añadimos textContent para modificarlo; finalmente igualamos esto
a la variable creada que contiene el nuevo texto.
*/

var titulo = 'Nuevo Título';
document.getElementById('titulo').textContent = titulo;

var descripcion = 'Descripción nueva de la página';
document.getElementById('descripcion').textContent = descripcion;

// EJERCICIO 2: FUNCIÓN QUE VALIDE LOS CAMPOS DEL FORMULARIO.
/*
Debemos de realizar una función que primero mire si lo introducido en el campo del nombre esta vacio o no;
en caso de estar vacio aplica un borde rojo y un texto; en caso contrario (si ya anteriormente estaba vacío,
y luego se ha puesto correctamente, sigue conservando las propiedades del falso); por ello he puesto que se
reestablezcan las propiedades por defecto.

Luego se mira si edad es mayor que 99 o menor que 18 o si NO es un número, y se aplica lo mismo que
en el nombre; en caso contrario el número es correcto y se reestablecen las propiedades por defecto.
 */
function validaFormulario() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    if (nombre === '') {
        document.getElementById('nombre').style.borderColor = 'red';
        document.getElementById('error_nombre').textContent = 'Campo del nombre vacío, por favor completar';
        document.getElementById('error_nombre').style.cssText = 'margin: 0 auto; padding-bottom: 3px';
    }
    else{
        document.getElementById('nombre').style.borderColor = '';
        document.getElementById('error_nombre').textContent = '';
        document.getElementById('error_nombre').style.cssText = '';
    }
    if (edad > 99 || 18 > edad || isNaN(edad)) {
        document.getElementById('edad').style.borderColor = 'red';
        document.getElementById('error_edad').textContent = 'La edad debe ser un número y encontrarse en el intervalo de 18 a 99 años.';
        document.getElementById('error_edad').style.cssText = 'margin: 0 auto; padding-bottom: 3px';
    }
    else{
        document.getElementById('edad').style.borderColor = '';
        document.getElementById('error_edad').textContent = '';
        document.getElementById('error_edad').style.cssText = '';
    }

}



// EJERCICIO 3: CONTADOR DE VISITAS QUE INCREMENTE AL RECARGAR LA PÁGINA.
/*
Mediante addEventListener registramos la función que permite el conteo de las visitas para el evento 'DOMContentLoaded',
activo cuando se carga la página. Al ejecutar la función primero creamos la variable contador que almacena
su valor actual en el 'LocalStorage' mediante la clave 'accesos'. En caso de ser el contador nulo, lo
establece como 0; es decir, ninguna visita. En caso de que no ocurra esto, se le sumará 1 al contador.

Tras ello el nuevo valor de contador se almacena en la clave 'accesos' y actualizamos el valor que se mostrará en
la página web.

 */
function contarVisitas(){
    let contador= localStorage.getItem('accesos');
    if(contador === null){
        contador = 0;
    }
    else{
        contador = parseInt(contador) + 1;
    }
    localStorage.setItem('accesos', contador);
    document.getElementById('contador').textContent = contador;
}
document.addEventListener('DOMContentLoaded', contarVisitas);



// EJERCICIO 4: FUNCIÓN QUE CAMBIE EL COLOR DE LOS CAMPOS DEL FORMULARIO CADA VEZ QUE SE MUESTRA LA PÁGINA WEB.
/*
Mediante addEventListener registramos la función que permite cambiar el color a los campos del
formulario para el evento 'DOMContentLoaded', activo cuando se carga la página. Al ejecutar la función,
creamos primero una variable que coge colores aleatorios de la lista color ya definida mediante Math.
Tras ello, se aplica este a los campos del formulario.
 */
const colores = ['aqua', 'black', 'blue', 'fuchsia', 'green', 'purple', 'red', 'white', 'yellow'];
function coloresFormulario() {
    const colorAleatorio = colores[Math.floor(Math.random()*colores.length)];

    document.getElementById('nombre').style.backgroundColor = colorAleatorio;
    document.getElementById('edad').style.backgroundColor = colorAleatorio;
}

document.addEventListener('DOMContentLoaded', coloresFormulario);