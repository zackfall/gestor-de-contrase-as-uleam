import { DatosClave } from "./datos_clave";

export class Almacenamiento {
    private direccionDB: string;
    private claves: Clave[];

    constructor() {
        this.direccionDB = "../../almacenamiento.csv"
        this.claves = [];
    }

    public guardarClave(clave: Clave) {
        console.log("Hola")
    }

    public actualizarClave(id: number, datos: DatosClave) { }

    public obtenerClaves(): Clave[] {
        return this.claves;
    }

    public obtenerClavesPorId(id: number): Clave { }

    public eliminarClave(id: number) { }

    public obtenerDireccion(): string {
        return this.direccionDB;
    }

    public cambiarDireccion(nuevaDireccion: string) { }
}