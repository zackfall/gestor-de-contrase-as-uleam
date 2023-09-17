export class DatosClave {
    longitudMinima: number;
    longitud: number;
    private username: string;
    private loginLink: string;
    private clave: string;
    private requerirMayuscula: boolean;
    private requerirMinuscula: boolean;
    private requerirNumero: boolean;
    private requerirCaracterEspecial: boolean;

    constructor(username: string, loginLink: string, clave: string) {
        this.longitudMinima = 4;
        this.longitud = 0;
        this.username = username;
        this.loginLink = loginLink;
        this.clave = clave;
        this.requerirMayuscula = false;
        this.requerirMinuscula = false;
        this.requerirNumero = false;
        this.requerirCaracterEspecial = false;
    }

    cambiarUsername(name: string) { }
    cambiarLoginLink(link: string) { }
    cambiarClave(clave: string) { }
    cambiarMayuscula(activo: boolean) { }
    cambiarMinuscula(activo: boolean) { }
    cambiarNumero(activo: boolean) { }
    cambiarCaracterEspecial(activo: boolean) { }

    obtenerUsername(): string { return "" }
    obtenerLoginLink(): string { return "" }
    obtenerClave(): string { return "" }
    obtenerMayuscula(): boolean { return false }
    obtenerMinuscula(): boolean { return false }
    obtenerNumero(): boolean { return false }
    obtenerCaracterEspecial(): boolean { return false }
}