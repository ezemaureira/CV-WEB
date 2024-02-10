
// Función para calcular la edad
function calcularEdad(añoNacimiento) {
  const añoActual = new Date().getFullYear();
  return añoActual - añoNacimiento;
}

// Obtener la referencia al elemento <span> donde mostraremos la edad
const spanEdad = document.getElementById("edad");

// Año de nacimiento (1998)
const añoNacimiento = 1998;

// Calcular la edad
const edad = calcularEdad(añoNacimiento);

// Mostrar la edad en el elemento <span>
spanEdad.textContent = edad;
//funcion para devolver la fecha actual en el pie de pagina
function fechaActual(){
  var meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];  
  const fecha = new Date();
  const mesAÑO = " "+ meses[fecha.getMonth()] +" "+ fecha.getFullYear() + " ";
  return mesAÑO;
}
const spanAño = document.getElementById("fecha");
spanAño.textContent = fechaActual();

// acordeon 

const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');

// esta funcion quita los la clase activo de todo los bloques  
// añade la clase activo a los bloques igual a h2
h2.forEach((cadaH2,i )=>{
  h2[i].addEventListener('click', ()=>{
    bloque.forEach((cadaBloque, i)=>{
      bloque[i].classList.remove('activo')
    } )
    bloque[i].classList.add('activo')
  }) 
})
// boton de contacto 

//descargar cv
document.addEventListener('DOMContentLoaded', function() {
    const descargarBtn = document.getElementById('descargarBtn');

    descargarBtn.addEventListener('click', function() {
        const confirmacion = window.confirm('¿Quieres descargar el PDF?');
        
        if (confirmacion) {
            
            const pdfURL = 'EzequielJesusMaureira_CV.pdf';
            
            // Abrir el enlace del PDF en una nueva ventana
            window.open(pdfURL, '_blank');
        }
    });
});
// desplazamiento de la barra de navegacion 
window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  const scrollPosicion = window.scrollY;

  if (scrollPosicion>=100) {
    navbar.classList.add('fixed');
  }else{
    navbar.classList.remove('fixed');
  }
});