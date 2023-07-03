// Obtén el formulario y agrega un listener para el evento submit
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
  
  // Obtén los valores de los campos del formulario
  const fullname = form.querySelector('input[name="fullname"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const phone = form.querySelector('input[name="phone"]').value;
  const message = form.querySelector('textarea[name="message"]').value;
  
  // Realiza alguna acción con los datos del formulario
  console.log('Nombre:', fullname);
  console.log('Email:', email);
  console.log('Teléfono:', phone);
  console.log('Mensaje:', message);
  
});

form.reset(); // Poner en blanco los campos del formularios