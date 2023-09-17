import {Admin} from "./admin"
import {Almacenamiento} from "./alamcenamiento"

export class GestorDeContrasenias {
private admin: Admin;
public db: Almacenamiento;

    private version:string;

    constructor() {
        this.version = "1.0.0";}  

    CrearAdmin(nombre:string,clave:string):void{
    }
    crearDB():void{
    }
    abrirDB():void{
    }
}