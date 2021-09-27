let listaMascotas = [];

const button = document.querySelector(".btn-primary");
const datosAgregados = document.querySelector("#resultado");

class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el número de teléfono: ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreM = nombreM;
    this._enfermedad = enfermedad;
  }
  get nombreM() {
    return this._nombreM;
  }
  set nombreM(nombreM_nuevo) {
    this._nombreM = nombreM_nuevo;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(enfermedad_nuevo) {
    this.enfermedad = enfermedad_nuevo;
  }
}

const agregarAListas = () => {};

const actualizarDatosAgregados = () => {
  datosAgregados.innerHTML = "";
  const newUl = document.createElement("ul");

  // and give it some content
  const newContent = document.createTextNode(
    `${listaMascotas[listaMascotas.length - 1].datosPropietario()}. ${
      listaMascotas[listaMascotas.length - 1].tipo
    }, mientras que el nombre de la mascota es ${
      listaMascotas[listaMascotas.length - 1].nombreM
    } y la enfermedad es ${listaMascotas[listaMascotas.length - 1].enfermedad}`
  );

  // add the text node to the newly created div
  newUl.appendChild(newContent);
  datosAgregados.appendChild(newUl);
};
const crearMascota = (event) => {
  event.preventDefault();
  let nombre = document.querySelector("#propietario");
  let direccion = document.querySelector("#direccion");
  let telefono = document.querySelector("#telefono");
  let tipo = document.querySelector("#tipo");
  let nombreM = document.querySelector("#nombreMascota");
  let enfermedad = document.querySelector("#enfermedad");
  let nuevaMascota = new Mascota(
    nombre.value,
    direccion.value,
    telefono.value,
    tipo.value,
    nombreM.value,
    enfermedad.value
  );

  console.log(nuevaMascota);
  listaMascotas.push(nuevaMascota);
  actualizarDatosAgregados();
};

button.addEventListener("click", crearMascota);
