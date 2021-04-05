//eliminar elementos
/*onst enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');
enlaces[0].remove();
console.log(enlaces);
//eliminar desde el padre
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');
navegacion.removeChild(enlaces[0]);
console.log(navegacion);*/

const primerLi = document.querySelector('.enlace');
let elemento;
//obtener clase css
elemento = primerLi.className;
//agregar clases
elemento = primerLi.classList.add('nueva-clase');
//eliminar clase
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;
//leer atributo
elemento = primerLi.getAttribute('href');
//enviar un atributo
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data-id', 20);
elemento = primerLi;
//para verificar un elemento
elemento = primerLi.hasAttribute('data-id');
//eliminar elemento
primerLi.removeAttribute('data-id');
elemento = primerLi;
console.log(elemento);