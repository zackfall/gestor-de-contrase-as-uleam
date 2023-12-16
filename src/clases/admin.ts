export class Admin {
    private nombre: String;
    private ClaveUsuario: String;
    private activo: boolean;

    constructor(nombre: String, ClaveUsuario: String) {
        this.nombre = nombre;
        this.ClaveUsuario = ClaveUsuario;
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
        this.ClaveUsuario = claveUsuario;
    }

    public setActivo(activo: boolean): void {
        this.activo = activo;
    }

    public compararClaveUsuario(clave: String): boolean { return clave === undefined }
}