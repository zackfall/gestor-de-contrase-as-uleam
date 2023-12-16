import { Admin } from "./admin"
import { Almacenamiento } from "./almacenamiento"

export class GestorDeContrasenias {
    private admin: Admin |null;
    public version: string;
    public db: Almacenamiento | null;

    constructor() {
        this.version = "1.0.0";
        this.admin = null;
        this.db = null;
              
    }

<<<<<<< Updated upstream
    crearAdmin(nombre: string, clave: string): void {
        this.admin = new Admin(nombre, clave);
        console.log('Administrador creado:');
     }
    crearDB(): void { 
        this.db = new Almacenamiento();
        console.log();
        }
    
    abrirDB(): void {
        if (this.db) {
            console.log('dato');
          } else {
            console.log('dato');
        }
     }
}
=======
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
>>>>>>> Stashed changes
