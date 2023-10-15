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