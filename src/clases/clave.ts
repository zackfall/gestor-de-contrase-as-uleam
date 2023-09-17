import { Codificador } from "./codificador";
import { DatosClave } from "./datos_clave";

export class Clave {

    private id: number;
    private datos: DatosClave;
    private codificador: Codificador;
    public encriptada: boolean;

    constructor(datos: DatosClave) {
        this.id = 0;
        this.datos = datos;
        this.codificador = new Codificador(this.datos.obtenerClave());
        this.encriptada = false;
    }

    public esValida(): boolean {
        return false;
    }

    public obtenerDatos(): DatosClave {
        return this.datos;
    }
}