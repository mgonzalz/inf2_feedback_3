// EJERCICIO 1: CAMBIAR EL TÍTULO Y DESCRIPCION
/*Para cambiar el texto primero debemos de crear una variable de tipo string que
contenga el nuevo texto; tras ello, mediante la funcion document.getElementById() accedemos
al elemento que queremos modificar y añadimos textContent para modificarlo; finalmente igualamos esto
a la variable creada que contiene el nuevo texto*/

var titulo = 'Nuevo Título';
document.getElementById('titulo').textContent = titulo;

var descripcion = 'Descripción nueva de la página';
document.getElementById('descripcion').textContent = descripcion;

