//Delegation
document.body.addEventListener('click', eliminarElemento);
document.body.addEventListener('click', eliminarElemento);
function eliminarElemento(e){
     e.preventDefault();
     console.log('click');
     console.log(e.target.classList);
}
//para verificar donde dio click
document.body.addEventListener('click', eliminarElemento);
function eliminarElemento(e){
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso')){
          console.log('Si');
     }else{
          console.log('No');
     }
};
//para verificar los elementos padres del objeto
function eliminarElemento(e){
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso')){
          console.log(e.target.parentElement.parentElement);
     }
};
//para eliminar los elementos padres del objeto
function eliminarElemento(e){
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso')){
          console.log(e.target.parentElement.parentElement.remove());
     }
};
//para verificar las clases del objeto
function eliminarElemento(e){
     e.preventDefault();
     if(e.target.classList.contains('agregar-carrito')){
          console.log('curso agregado');
     }
};
