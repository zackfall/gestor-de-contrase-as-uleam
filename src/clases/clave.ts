import { NumericLiteral } from "typescript";
import { DatosClave } from "./datos_clave";

export class Clave{

    private id:number;

    private datos: DatosClave;
    
    public encriptada: boolean;

    public set esValida():boolean {

    }

    public get obtenerDatos(): DatosClave {

    }
}