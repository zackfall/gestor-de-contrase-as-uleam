import { DatosClave } from "./datos_clave";

export class Almacenamiento {
    private direccionDB: string;

    constructor() {
        this.direccionDB = "../../almacenamiento.csv"
    }

    public guardarClave(clave: Clave) {
        console.log("Hola")
    }

    public actualizarClave(id: number, datos: DatosClave) {

    }

    public get obtenerClaves(): Clave[] {
        return []
    }

    public obtenerClavesPorId(id: number): Clave {
    }

    public eliminarClave(id: number) {

    }

    public get obtenerDireccion(): string {
        return this.direccionDB;
    }

    public set cambiarDireccion(nuevaDireccion: string) {

    }
}