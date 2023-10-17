import { Admin } from "./admin";
import { Clave } from "./clave";
import * as fs from "fs";

// Esta clase se encarga de la capa de datos, aquí se modifica un archivo y se obtiene información de ese mismo.
export class Almacenamiento {
  private direccionDB: string;
  private claves: Clave[];
  public estaActiva: boolean = false;

  constructor() {
    this.direccionDB = "almacenamiento.json";
    if (!fs.existsSync(this.direccionDB)) {
      fs.writeFileSync(this.direccionDB, "[]");
    }
    let claveArchivo = fs.readFileSync(this.direccionDB, "utf-8");
    this.claves = JSON.parse(claveArchivo);
  }

  public guardarClaves() {
    let infoClaves = JSON.stringify(this.claves, null, 2);
    fs.writeFileSync(this.direccionDB, infoClaves);
  }

  public activarDB(contrasenia: string, admin: Admin) {
    if (admin.compararClaveUsuario(contrasenia)) {
      this.estaActiva = true;
    }
  }

  public actualizarClave(username: string, claveNueva: Clave) {
    let indice = this.claves.findIndex((clave) => {
      return clave.perfil.obtenerUsername() === username;
    });
    let clave = this.claves[indice];

    // consiguiendo el índice de la clave,

    //uso la función find para comparar si lo que tengo en las llaves con respecto a lo que estoy buscando
    //en este caso username y si lo encuentra lo retorna
    if (clave === undefined) {
      throw new Error("!No se encontro la clave!");
    }
    clave.perfil = claveNueva.perfil;
    clave.encriptada = claveNueva.encriptada;
    clave.cambiarDatosClave(claveNueva.obtenerDatosClave());

    this.claves.splice(indice, 1, clave);
    this.guardarClaves();
  }

  public obtenerClaves(): Clave[] {
    return this.claves;
  }

  public obtenerClavesPorUserName(username: string): Clave {
    let clave = this.claves.find((clave) => {
      return clave.perfil.obtenerUsername() === username;
    });
    if (clave === undefined) {
      throw new Error("!No se encontro la clave!");
    }
    return clave
  }

  public eliminarClave(username: string) {
    this.claves = this.claves.filter(clave => clave.perfil.obtenerUsername() !== username);
    this.guardarClaves();
  }

  public agregarClave(clave: Clave) {
    this.claves.push(clave);
    this.guardarClaves();
  }

  public obtenerDireccion(): string {
    return this.direccionDB;
  }

  public cambiarDireccion(nuevaDireccion: string) {
    this.direccionDB = nuevaDireccion;
  }
}
