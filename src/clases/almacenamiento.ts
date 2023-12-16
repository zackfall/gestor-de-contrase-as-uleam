import { Admin } from "./admin";
import { Clave } from "./clave";
import * as fs from "fs";

type Claves = { admin: Admin; claves: Clave[] };

// Esta clase se encarga de la capa de datos, aquí se modifica un archivo y se obtiene información de ese mismo.
export class Almacenamiento {
  private direccionDB: string;
  private claves: Claves;
  public estaActiva: boolean = false;

  constructor(admin: Admin) {
    this.direccionDB = "almacenamiento.json";
    if (!fs.existsSync(this.direccionDB)) {
      fs.writeFileSync(this.direccionDB, "{}");
    }
    let claveArchivo = fs.readFileSync(this.direccionDB, "utf-8");
    this.claves = JSON.parse(claveArchivo);
    this.claves.admin = admin
  }

  public guardarClaves() {
    let infoClaves = JSON.stringify(this.claves, null, 2);
    fs.writeFileSync(this.direccionDB, `${infoClaves}`);
  }

  public activarDB(contrasenia: string, admin: Admin) {
    if (admin.compararClaveUsuario(contrasenia)) {
      this.estaActiva = true;
    }
  }

  public actualizarClave(username: string, claveNueva: Clave) {
    let indice = this.claves.claves.findIndex((clave) => {
      return clave.perfil.obtenerUsername() === username;
    });
    let clave = this.claves.claves[indice];

    // consiguiendo el índice de la clave,

    //uso la función find para comparar si lo que tengo en las llaves con respecto a lo que estoy buscando
    //en este caso username y si lo encuentra lo retorna
    if (clave === undefined) {
      throw new Error("!No se encontro la clave!");
    }
    clave.perfil = claveNueva.perfil;
    clave.encriptada = claveNueva.encriptada;
    clave.cambiarDatosClave(claveNueva.obtenerDatosClave());

    this.claves.claves.splice(indice, 1, clave);
    this.guardarClaves();
  }

  public obtenerClaves(): Clave[] {
    return this.claves.claves;
  }

  public obtenerClavesPorUserName(username: string): Clave {
    let clave = this.claves.claves.find((clave) => {
      return clave.perfil.obtenerUsername() === username;
    });
    if (clave === undefined) {
      throw new Error("!No se encontro la clave!");
    }
    return clave
  }

  public eliminarClave(username: string) {
    this.claves.claves = this.claves.claves.filter(clave => clave.perfil.obtenerUsername() !== username);
    this.guardarClaves();
  }

  public agregarClave(clave: Clave) {
    if (this.claves.claves === undefined) {
      this.claves.claves = [];
      this.claves.claves.push(clave);
      this.guardarClaves();
      console.log("Clave agregada");
    } else {
      this.claves.claves.push(clave)
      this.guardarClaves();
      console.log("Clave agregada");
    }
  }

  public obtenerDireccion(): string {
    return this.direccionDB;
  }

  public cambiarDireccion(nuevaDireccion: string) {
    this.direccionDB = nuevaDireccion;
  }
}
