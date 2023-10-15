export abstract class DatosClave {
  longitudMinima: number;
  longitud: number;
  private loginLink: string;
  private requerirMayuscula: boolean;
  private requerirMinuscula: boolean;
  private requerirNumero: boolean;
  private requerirCaracterEspecial: boolean;

  constructor(loginLink: string) {
    this.longitudMinima = 4;
    this.longitud = 0;
    this.loginLink = loginLink;
    this.requerirMayuscula = false;
    this.requerirMinuscula = false;
    this.requerirNumero = false;
    this.requerirCaracterEspecial = false;
  }

  cambiarLoginLink(link: string) {
    this.loginLink = link;
  }
  cambiarMayuscula(activo: boolean) {
    this.requerirMayuscula = activo;
  }
  cambiarMinuscula(activo: boolean) {
    this.requerirMinuscula = activo;
  }
  cambiarNumero(activo: boolean) {
    this.requerirNumero = activo;
  }
  cambiarCaracterEspecial(activo: boolean) {
    this.requerirCaracterEspecial = activo;
  }

  obtenerLoginLink(): string { return this.loginLink }
  obtenerMayuscula(): boolean { return this.requerirMayuscula }
  obtenerMinuscula(): boolean { return this.requerirMinuscula }
  obtenerNumero(): boolean { return this.requerirNumero }
  obtenerCaracterEspecial(): boolean { return this.requerirCaracterEspecial }
  cambiarDatosClave(datos_clave:DatosClave) {
    this.cambiarLoginLink(datos_clave.obtenerLoginLink());
    this.cambiarMayuscula(datos_clave.obtenerMayuscula());
    this.cambiarMinuscula(datos_clave.obtenerMinuscula());
    this.cambiarNumero(datos_clave.obtenerNumero());
    this.cambiarCaracterEspecial(datos_clave.obtenerCaracterEspecial());
  }
}