/*
* Esta clase es abstracta porque son los datos de las claves, los ponemos aparte para tener una mejor organización en nuestro código.
* Se usa polimorfismo porque nos evita poner muchos metodos en la misma clase.
*/
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

  cambiarDatosClave(datos_clave: IDatosClave) {
    this.longitud = datos_clave.longitud;
    this.cambiarLoginLink(datos_clave.loginLink);
    this.cambiarMayuscula(datos_clave.requerirMayuscula);
    this.cambiarMinuscula(datos_clave.requerirMinuscula);
    this.cambiarNumero(datos_clave.requerirNumero);
    this.cambiarCaracterEspecial(datos_clave.requerirCaracterEspecial);
  }

  obtenerDatosClave(): IDatosClave {
    return {
      longitudMinima: this.longitudMinima,
      longitud: this.longitud,
      loginLink: this.loginLink,
      requerirMayuscula: this.requerirMayuscula,
      requerirMinuscula: this.requerirMinuscula,
      requerirNumero: this.requerirNumero,
      requerirCaracterEspecial: this.requerirCaracterEspecial,
    }
  }
}

interface IDatosClave {
  longitudMinima: number;
  longitud: number;
  loginLink: string;
  requerirMayuscula: boolean;
  requerirMinuscula: boolean;
  requerirNumero: boolean;
  requerirCaracterEspecial: boolean;
}