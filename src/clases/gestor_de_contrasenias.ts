import fs from "fs";
import { Admin } from "./admin"
import { Almacenamiento } from "./almacenamiento"

// Clase que se encarga de la capa de presentación, nos permite crear el administrador y la base de datos.
export class GestorDeContrasenias {
  private admin: Admin | null;
  public version: string;
  public db: Almacenamiento | null;

  constructor() {
    this.version = "1.0.0";
    this.admin = null;
    this.db = null;
  }

  crearAdmin(nombre: string, clave: string): void {
    if (this.admin !== null) {
      throw new Error("Ya existe un administrador");
    }
    this.admin = new Admin(nombre, clave);
    console.log('Administrador creado');
  }
  crearDB(): void {
    if (this.db !== null) {
      throw new Error("Ya existe una base de datos");
    }
    if (this.admin === null) {
      throw new Error("No se ha creado el administrador");
    }

    this.db = new Almacenamiento(this.admin);
  }

  abrirDB(contrasenia: string): void {
    if (this.db === null) {
      throw new Error("No se ha creado la base de datos");
    }
    if (this.admin === null) {
      throw new Error("No se ha creado el administrador");
    }
    if (!fs.existsSync(this.db.obtenerDireccion())) {
      throw new Error("No se encontro la base de datos");
    }
    this.db.activarDB(contrasenia, this.admin);
  }
}

