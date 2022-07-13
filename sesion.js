class Usuario {
  constructor(nombre, email, pass) {
    this.nombre = nombre;
    this.email = email;
    this.pass = pass;
  }
}

const usuarios = [];
let botonEnviar = document.getElementById("button");

botonEnviar.onclick = () => {
  let inputNombre = document.getElementById("nombre").value;
  let inputEmail = document.getElementById("email").value;
  let inputPass = document.getElementById("pass").value;

  usuarios.push(new Usuario(inputNombre, inputEmail, inputPass));

  console.log(usuarios);
};
