import { Clave } from "./clases/clave";
import { GestorDeContrasenias } from "./clases/gestor_de_contrasenias";
import { Perfil } from "./clases/perfil";
import prompSync from "prompt-sync";

let prompt = prompSync();
let gestor_de_contrasenias = new GestorDeContrasenias();

console.log(`La versión del Gestor de Contraseñas es: ${gestor_de_contrasenias.version}`);

const nombreAdmin = prompt("Nombre de administrador: ");
const contraseniaAdmin = prompt("Contraseña de administrador: ");

gestor_de_contrasenias.crearAdmin(nombreAdmin, contraseniaAdmin);
gestor_de_contrasenias.crearDB();

if (gestor_de_contrasenias.db === null) {
  throw new Error("No se ha encontrado la base de datos");
}

gestor_de_contrasenias.abrirDB(nombreAdmin);
gestor_de_contrasenias.db.guardarClaves()

const nombrePerfil = prompt("Nombre de usuario: ");
const contraseniaPerfil = prompt("Contraseña de usuario: ");

const clave1 = new Clave("gestorContrasenia.com", new Perfil(nombrePerfil, contraseniaPerfil));
gestor_de_contrasenias.db.agregarClave(clave1)