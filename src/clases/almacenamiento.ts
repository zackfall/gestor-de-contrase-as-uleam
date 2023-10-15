import { Clave } from "./clave";
import { DatosClave } from "./datos_clave";
import * as fs from "fs";

export class Almacenamiento {
  private direccionDB: string;
  private claves: Clave[];

  constructor() {
    this.direccionDB = "almacenamiento.json";
    this.claves = [];
  }

  public guardarClave() {
    let infoClaves = JSON.stringify(this.claves, null, 2);
    fs.writeFileSync(this.direccionDB, infoClaves);
  }

  public actualizarClave(username: string, claveNueva: Clave) {
    let indice = this.claves.findIndex((clave) => {
      return clave.perfil.obtenerUsername() === username;
    });
    let clave = this.claves[indice];

    // consiguiendo el indice de la clave,

    //uso la funcion find para compoarar si lo que tengo en las llaves con respecto a lo que estoy buscando
    //en este caso username y si lo encuentra lo retorna
    if (clave === undefined) {
      throw new Error("!No se encontro la clave!");
    }
    clave.perfil = claveNueva.perfil;
    clave.encriptada = claveNueva.encriptada;
    clave.categoria = claveNueva.categoria;
    clave.cambiarDatosClave(claveNueva.obtenerDatosClave());

    this.claves.splice(indice, 1, clave);
    this.guardarClave();
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
  }

  public agregarClave(clave: Clave){
    this.claves.push(clave);
  }

  public obtenerDireccion(): string {
    return this.direccionDB;
  }

  public cambiarDireccion(nuevaDireccion: string) {
    this.direccionDB = nuevaDireccion;
  }
}
