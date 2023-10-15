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

  public guardarClave(clave: Clave) {
    this.claves.push(clave);
    let infoClaves = JSON.stringify(this.claves, null, 2);
    fs.writeFileSync(this.direccionDB, infoClaves);
  }

  public actualizarClave(username: string, claveNueva: Clave) {
    let clave = this.claves.find((clave) => {
      clave.perfil.obtenerUsername() === username;
    });
    //uso la funcion find para compoarar si lo que tengo en las llaves con respecto a lo que estoy buscando
    //en este caso username y si lo encuentra lo retorna
    if (clave===undefined){
        throw new Error("!No se encontro la clave!");
    }
    clave.perfil = claveNueva.perfil;
    clave.encriptada = claveNueva.encriptada;
    clave.categoria = claveNueva.categoria;

    
  }

  public obtenerClaves(): Clave[] {
    return this.claves;
  }

  public obtenerClavesPorId(id: number): Clave {
    return this.claves[id - 1];
  }

  public eliminarClave(id: number) {
    this.claves.splice(id - 1, 1);
  }

  public obtenerDireccion(): string {
    return this.direccionDB;
  }

  public cambiarDireccion(nuevaDireccion: string) {
    this.direccionDB = nuevaDireccion;
  }
}
