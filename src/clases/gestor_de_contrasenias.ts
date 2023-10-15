import { Admin } from "./admin"
import { Almacenamiento } from "./almacenamiento"

export class GestorDeContrasenias {
    private admin: Admin;
    public version: string;
    public db: Almacenamiento;

    constructor() {
        this.version = "1.0.0";
        this.admin = new Admin("Pepito", "AssassinsCreen123");
        this.db = new Almacenamiento();
    }

    crearAdmin(nombre: string, clave: string): void { }
    crearDB(): void { }
    abrirDB(): void { }
}