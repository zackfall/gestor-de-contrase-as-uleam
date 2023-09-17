export class Admin {
    private nombre: String;
    private claveUsuario: String;
    private activo: boolean;
    private compararClaveUsuario (clave: String): boolean {return false;}

    constructor (nombre: String, claveUsuario: String, activo:boolean) {
        this.nombre = nombre;
        this.claveUsuario = claveUsuario;
        this.activo = activo;
    }

    public getNombre (): String {
        return this.nombre;
    }
    
    public getActivo (): boolean {
        return this.activo;
    }

    public setNombre (nombre: String): void {
        this.nombre = nombre;
    }

    public setClaveUsuario (claveUsuario: String): void {
        this.claveUsuario = claveUsuario;
    }

    public setActivo (activo: boolean): void {
        this.activo = activo;
    }
}