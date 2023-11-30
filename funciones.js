const Url = "http://localhost:8085/api/proyecto"

const listarProyecto = async () => {
  let respuesta = "";
  let contenido = document.getElementById("contenido");
  fetch(Url, {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listarProyecto = data.proyectos;
      datos = listarProyecto.map(function (proyecto) {
        respuesta +=
          `<tr><td>${proyecto.id}</td>` +
          `<tr><td>${proyecto.nombre}</td>` +
          `<td>${proyecto.horasDedicadas}</td>` +
          `<td>${proyecto.valorProyecto}</td>` +
          `<td>${proyecto.numeroIntegrantes}</td>` +
          `<td><button class="btn btn-dark" id="btnMod" value="${proyecto.nombrepro}" onclick="abrirFormAct('${proyecto.nombrePro}')">Editar</button></td>` +
          `<td><button class="btn btn-danger" id="btnMod" value="${proyecto.nombrePro}" onclick="abrirFormAct('${proyecto.nombrePro}')">Eliminar</button></td>` +
          `</tr>`;
        contenido.innerHTML = respuesta;
      });
    });
};

const aggPro = () => {
  const Id = document.getElementById("Id").value;
  const Nom = document.getElementById("Nom").value;
  const HorDe = document.getElementById("HorDe").value;
  const ValPro = document.getElementById("ValPro").value;
  const NumInt = document.getElementById("NumInt").value;
  if (Id == "" && Nom == "" && HorDe== "" && ValPro == "" && NumInt == "" && Sel == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Llene el formulario primero!",
    });
  } else if (Id == "" || Nom == "" || HorDe == "" || ValPro == "" || NumInt == "") {
    alert("Llene el formualrio primero!")
  } else {
    const Proyectitos = {
      Id: Id,
      nombrePro: nombre,
      HorDe: horasDedicadas,
      ValPro: valorProyecto,
      numInt: numeriIntegrantes,
    };
    fetch(Url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(Proyectitos),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.msg == "proyecto creado.") {
          Swal.fire({
            icon: "success",
            showConfirmButton: false,
            text: json.msg,
            timer: 1500,
          });
          abrirFormReg();
          listarproyecto();
        } else {
          Swal.fire({
            icon: "warning",
            confirmButtonText: "Aceptar",
            text: json.msg,
          });
        }
      });
  }
};
document.getElementById("aggHos").addEventListener("click", aggHos);

// const abrirFormAct = (Nom) => {
//   let formAct = document.getElementById("formulario2");
//   let fondo = document.getElementById("fondo2");
//   document.getElementById("corL2").classList.add("labelActRol");
//   document.getElementById("numCelL2").classList.add("labelActRol");
//   document.getElementById("passL2").classList.add("labelActRol");
//   document.getElementById("Usu2").value = Nom;

//   let contenido = document.getElementById("selRol2");
//   let respuesta = `<option value="0" selected disabled>Seleccione un rol</option>`;
//   fetch(urlRoles, {
//     method: "GET",
//     mode: "cors",
//     headers: { "Content-type": "application/json; charset=UTF-8" },
//   })
//     .then((resp) => resp.json())
//     .then(function (data) {
//       let listaRoles = data.configuraciones;
//       datos = listaRoles.map(function (configuracion) {
//         respuesta += `<option value="${configuracion.rol}">${configuracion.rol}</option>`;
//       });
//       contenido.innerHTML = respuesta;
//       M.FormSelect.init(contenido);
//     });

//   if (formAct.style.display === "block") {
//     formAct.style.display = "none";
//     fondo.style.display = "none";
//   } else {
//     formAct.style.display = "block";
//     fondo.style.display = "block";
//   }

//   fetch(Url, {
//     method: "GET",
//     mode: "cors",
//     headers: { "Content-type": "application/json; charset=UTF-8" },
//   })
//     .then((resp) => resp.json())
//     .then(function (data) {
//       let listaPermisos = data.Proyectitos;

//       datos = listaPermisos.map(function (usuario) {
//         for (let i = 0; i < usuario.nombrePro.length; i++) {
//           if (Nom == usuario.nombrePro) {
//             id = usuario._id;
//             document.getElementById("Correo2").value = usuario.correo;
//             document.getElementById("numCel2").value = usuario.celular;
//             document.getElementById("Pass2").value = usuario.password;
//             break;
//           }
//         }
//       });
//     });
// };
// document.getElementById("canUsu2").addEventListener("click", abrirFormAct);

// const modificarUsu = () => {
//   const Email = document.getElementById("Correo2").value.charAt(0).toUpperCase() + document.getElementById("Correo2").value.slice(1).toLowerCase();
//   const Pass = document.getElementById("Pass2").value;
//   const Cel = document.getElementById("numCel2").value;
//   const Sel = document.getElementById("selRol2").value;
//   const valEmail = /^[\w\-._]+@[A-Za-z\d.-]{2,}\.[A-Za-z]{2,6}$/;
//   const valPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,25}$/; // Contiene al menos una letra mayúscula, Contiene al menos una letra minúscula, Contiene al menos un dígito, Tiene una longitud mínima de 8 caracteres y maxima de 25.

//   let existeEmail = false;
//   fetch(Url, {
//     method: "GET",
//     mode: "cors",
//     headers: { "Content-type": "application/json; charset=UTF-8" },
//   })
//     .then((resp) => resp.json())
//     .then(function (data) {
//       let listaProyectitos = data.Proyectitos;
//       datos = listaProyectitos.map(function (usuario) {
//         for (let i = 0; i < usuario.correo.length; i++) {
//           if (Email.toLowerCase() == usuario.correo.toLowerCase()) {
//             existeEmail = true;
//             return;
//           } else {
//             existeEmail = false;
//           }
//         }
//       });
//     });
//   console.log(existeEmail);
//   if (existeEmail) {
//     Swal.fire({
//       icon: "error",
//       confirmButtonText: "Aceptar",
//       text: "Ya existe ese correo.",
//     });
//   }

//   if (Email == "" && Pass == "" && Cel == "" && Sel == "0") {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "Llene el formulario primero!",
//     });
//   } else if (Email == "" || Email != Email.match(valEmail)) {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "Correo inválido, ejemplo de correo válido: ejemplo@gmail.com",
//     });
//   } else if (Email.length > 40 || Email.length < 12) {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "El máximo de caracteres para el correo es de 40 y el mínimo es de 12!",
//     });
//   } else if (Cel == "") {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "Número de celular inválido!",
//     });
//   } else if (Cel.length < 10) {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "Ingrese un número válido!",
//     });
//   } else if (Pass == "" || Pass != Pass.match(valPass)) {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "Datos de la contraseña inválidos",
//       text: "debe contener al menos una letra mayúscula, al menos una letra minúscula, al menos un dígito, mínimo 8 caracteres y máximo 25",
//     });
//   } else if (Pass.length > 25 || Pass.length < 8) {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "El máximo de caracteres para la contraseña es de 25 y el mínimo es de 8!",
//     });
//   } else if (Sel == "0") {
//     Swal.fire({
//       icon: "warning",
//       confirmButtonText: "Aceptar",
//       text: "Seleccione un rol!",
//     });
//   } else {
//     const usuario = {
//       nombrePro: document.getElementById("Usu2").value,
//       correo: Email,
//       password: Pass,
//       celular: Cel,
//       rol: Sel,
//     };

//     fetch(Url, {
//       method: "PUT",
//       mode: "cors",
//       body: JSON.stringify(usuario),
//       headers: { "Content-type": "application/json; charset=UTF-8" },
//     })
//       .then((resp) => resp.json())
//       .then((json) => {
//         json.msg;
//       });

//     Swal.fire({
//       icon: "success",
//       showConfirmButton: false,
//       text: "Usuario actualizado correctamente...",
//       timer: 1200,
//     });
//     abrirFormAct();
//     listarproyecto();
//   }
// };
