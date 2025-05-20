// app.js

// (Función toggleModoOscuro y otras funciones auxiliares como togglePassword aquí)
function toggleModoOscuro() {
  const body = document.body;
  body.classList.toggle('modo-oscuro');
  const botonModo = document.getElementById('boton-modo');
  botonModo.textContent = body.classList.contains('modo-oscuro') ? '☀️' : '🌙';
}

// *** Funcionalidades de Inicio de Sesión con Roles ***

function iniciarSesion() {
  const tipoUsuario = document.getElementById('tipo-usuario').value;
  const nombre = document.getElementById('login-usuario').value;
  const claveIngresada = document.getElementById('login-clave').value;

  let userData;
  if (tipoUsuario === 'estudiante') {
      userData = localStorage.getItem('estudiante_' + nombre);
  } else if (tipoUsuario === 'profesor') {
      userData = localStorage.getItem('profesor_' + nombre);
  }

  if (userData) {
      const usuario = JSON.parse(userData);
      if (usuario.clave === claveIngresada) {
          Swal.fire('¡Inicio de sesión exitoso!', `¡Hola, ${nombre}!`, 'success');
          mostrarInterfaz(tipoUsuario);
          sessionStorage.setItem('tipoUsuarioActivo', tipoUsuario);
          sessionStorage.setItem('usuarioActivo', nombre);
          ocultarFormularioInicio();
      } else {
          Swal.fire('Error al iniciar sesión', 'Clave incorrecta.', 'error');
      }
  } else {
      Swal.fire('Error al iniciar sesión', 'Usuario no encontrado.', 'error');
  }

  document.getElementById('login-usuario').value = '';
  document.getElementById('login-clave').value = '';
}

function registrarEstudiante() {
  const nombre = document.getElementById('registro-usuario-estudiante').value;
  const clave = document.getElementById('registro-clave-estudiante').value;
  const edad = document.getElementById('edad-usuario-estudiante').value;
  const email = document.getElementById('email-usuario-estudiante').value;
  const documento = document.getElementById('documento-usuario-estudiante').value;


  if (nombre && clave) {
      localStorage.setItem('estudiante_' + nombre, JSON.stringify({ clave: clave, edad: edad, email: email,documento: documento }));
      Swal.fire('¡Registro exitoso!', `Bienvenido, ${nombre} al Mundo Matemágico!`, 'success');
      limpiarFormularioRegistroEstudiante();
  } else {
      Swal.fire('Error de registro', 'Por favor, ingresa nombre y clave.', 'error');
  }
}

function registrarProfesor() {
  const nombre = document.getElementById('registro-usuario-profesor').value;
  const clave = document.getElementById('registro-clave-profesor').value;
  const email = document.getElementById('email-profesor').value;
  const documento = document.getElementById('documento-usuario-profesor').value;


  if (nombre && clave) {
      localStorage.setItem('profesor_' + nombre, JSON.stringify({ clave: clave, email: email, documento: documento }));
      Swal.fire('¡Registro exitoso!', `Bienvenido, Profesor ${nombre}!`, 'success');
      limpiarFormularioRegistroProfesor();
  } else {
      Swal.fire('Error de registro', 'Por favor, ingresa nombre y clave.', 'error');
  }
}

// *** Funciones para mostrar la interfaz correcta ***

function mostrarInterfaz(tipoUsuario) {
  if (tipoUsuario === 'estudiante') {
      document.getElementById('menu-juego-estudiante').style.display = 'block';
      document.getElementById('menu-juego-profesor').style.display = 'none';
  } else if (tipoUsuario === 'profesor') {
      document.getElementById('menu-juego-estudiante').style.display = 'none';
      document.getElementById('menu-juego-profesor').style.display = 'block';
  }
}

function ocultarFormularioInicio() {
  document.getElementById('formulario-inicio').style.display = 'none';
}

function mostrarFormularioInicio() {
  document.getElementById('formulario-inicio').style.display = 'block';
  document.getElementById('menu-juego-estudiante').style.display = 'none';
  document.getElementById('menu-juego-profesor').style.display = 'none';
}

function cerrarSesion() {
  sessionStorage.removeItem('tipoUsuarioActivo');
  sessionStorage.removeItem('usuarioActivo');
  mostrarFormularioInicio();
  Swal.fire('¡Sesión cerrada!', 'Has cerrado sesión correctamente.', 'info');
}

// *** Funciones para limpiar formularios ***

function limpiarFormularioRegistroEstudiante() {
  document.getElementById('registro-usuario-estudiante').value = '';
  document.getElementById('registro-clave-estudiante').value = '';
  document.getElementById('edad-usuario-estudiante').value = '';
  document.getElementById('email-usuario-estudiante').value = '';
  document.getElementById('documento-usuario-estudiante').value = '';
}

function limpiarFormularioRegistroProfesor() {
  document.getElementById('registro-usuario-profesor').value = '';
  document.getElementById('registro-clave-profesor').value = '';
  document.getElementById('email-profesor').value = '';
  document.getElementById('documento-usuario-profesor').value = '';
}

// *** Funciones de menú de estudiante (ejemplos) ***
function jugar() {
  Swal.fire('¡A jugar, estudiante!', 'Prepárate para los desafíos matematicos.', 'info');
}

function verCalificaciones() {
  Swal.fire('Tus Calificaciones', 'Aquí verás tu progreso.', 'info');
}

function verProceso() {
  Swal.fire('¡Tus niveles!',' Veras que tienes que hacer mas adelante.', 'info');
}
function verPersonajes() {
  Swal.fire('¡Tus avatares!',' escoge tu personaje con habilidades.', 'info');
}
function  preguntasconnuestraIA() {
  Swal.fire('¡Nuestra IA !',' aqui puedes preguntarle dependiendo de tu promedio  .', 'info');
}
function  comoJugar() {
  Swal.fire('¡Tutorial !',' veras un video clip de como empezar .', 'info');
}
function configuracion() {
  Swal.fire('¡ Ajustes!',' sonido, idioma, ayuda y asistencia, guia para padres, politica y privacidad y creditos.', 'info');
}

// *** Funciones de menú de profesor 
function verEstudiantes() {
  Swal.fire('Lista de Estudiantes', 'Aquí podrás ver a tus estudiantes con los cursos.', 'info');
}

function crearLecciones() {
  Swal.fire('Crear Lecciónes', 'Aquí podrás crear nuevos contenidos de trabajo.', 'info');
}
function verProgresoGeneral() {
  Swal.fire('¡Progreso!','Como vas con tus cursos y las calificaciones.', 'info');
}
function configuracionProfesor() {
  Swal.fire('¡Ajustes!','sonido, idioma, ayuda y asistencia, guia para profes, politica y privacidad y creditos .', 'info');
}









// Al cargar la página, asegúrate de que solo el formulario de inicio esté visible
document.addEventListener('DOMContentLoaded', () => {
  mostrarFormularioInicio();


});