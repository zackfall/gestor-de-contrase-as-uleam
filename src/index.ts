import { Clave } from "./clases/clave";
import { GestorDeContrasenias } from "./clases/gestor_de_contrasenias";
import { Perfil } from "./clases/perfil";
import prompSync from "prompt-sync";

let prompt = prompSync();
let gestor_de_contrasenias = new GestorDeContrasenias();

console.log(`Gestor de Contraseñas versión ${gestor_de_contrasenias.version}`);

console.log("\nInicie sesión");

const nombreAdmin = prompt("Nombre de administrador: ");
const contraseniaAdmin = prompt("Contraseña de administrador: ");

gestor_de_contrasenias.crearAdmin(nombreAdmin, contraseniaAdmin);
gestor_de_contrasenias.crearDB();

if (gestor_de_contrasenias.db === null) {
  throw new Error("No se ha encontrado la base de datos");
}

gestor_de_contrasenias.abrirDB(contraseniaAdmin);
if (gestor_de_contrasenias.db.estaActiva === false) {
  throw new Error("La base de datos no se encuentra activa");
}
gestor_de_contrasenias.db.guardarClaves()

console.log("\nCree un perfil para guardar");

const nombrePerfil = prompt("Nombre de perfil: ");
const loginLink = prompt("Login link: ")
const automatico: boolean = prompt("¿Quiere generar la contraseña automaticamente? (s/n): ") === "s"
let clave: Clave;
let contraseniaPerfil: string = "";
if (automatico) {
  const longitud = parseInt(prompt("Longitud de la clave: "))
  const incluirMayusculas = prompt("¿Quiere incluir mayúsculas? (s/n): ") === "s"
  const incluirNumeros = prompt("¿Quiere incluir números? (s/n): ") === "s"
  const incluirCaracteresEspeciales = prompt("¿Quiere incluir caracteres especiales? (s/n): ") === "s"
  clave = Clave.generarClave(longitud, incluirMayusculas, incluirNumeros, incluirCaracteresEspeciales, nombrePerfil, loginLink);
} else {
  contraseniaPerfil = prompt("Contraseña de perfil: ");
  clave = new Clave(loginLink, new Perfil(nombrePerfil, contraseniaPerfil));
  clave.codificar();
}

gestor_de_contrasenias.db.agregarClave(clave)