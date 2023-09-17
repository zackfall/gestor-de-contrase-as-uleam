export class Admin {
    private nombre: String;
    private claveUsuario: String;
    private activo: boolean;

    constructor(nombre: String, claveUsuario: String) {
        this.nombre = nombre;
        this.claveUsuario = claveUsuario;
        this.activo = true;
    }

    public getNombre(): String {
        return this.nombre;
    }

    public getActivo(): boolean {
        return this.activo;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public setClaveUsuario(claveUsuario: String): void {
        this.claveUsuario = claveUsuario;
    }

    public setActivo(activo: boolean): void {
        this.activo = activo;
    }

    private compararClaveUsuario(clave: String): boolean { return false; }
}