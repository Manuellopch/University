//Local Storage agregar o modificar
localStorage.setItem('Nombre', 'Manuel');
//Session Storage
sessionStorage.setItem('Nombre', 'Manuel');

//para eliminar de Local Storage
localStorage.removeItem('Manuel');

//para llamar el localStorage en consola
let llamar = localStorage.getItem('Nombre');
console.log(llamar);

//para limpiar completamente el local_storage
localStorage.clear();
