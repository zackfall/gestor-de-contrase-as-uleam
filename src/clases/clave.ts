import { Codificador } from "./codificador";
import { DatosClave } from "./datos_clave";
import { Perfil } from "./perfil";

export class Clave extends DatosClave {
  private _perfil: Perfil;
  private _codificador: Codificador;
  encriptada: boolean;

  constructor(loginLink: string, perfil: Perfil) {
    super(loginLink);
    this._perfil = perfil;
    this.longitud = perfil.obtenerContrasenia().length
    this._codificador = new Codificador()
    this.encriptada = false;
  }

  public static generarClave(longitud: number, incluirMayusculas: boolean, incluirNumeros: boolean, incluirCaracteresEspeciales: boolean, username: string, loginLink: string): Clave {
    // Definir los caracteres permitidos en la contraseña
    let caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyz';
    if (incluirMayusculas) {
      caracteresPermitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (incluirNumeros) {
      caracteresPermitidos += '0123456789';
    }
    if (incluirCaracteresEspeciales) {
      caracteresPermitidos += '!@#$%^&*()';
    }

    // Generar la contraseña aleatoria
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteresPermitidos.length);
      contrasena += caracteresPermitidos[indice];
    }

    let clave = new Clave(loginLink, new Perfil(username, contrasena));
    clave.cambiarMayuscula(incluirMayusculas);
    clave.cambiarNumero(incluirNumeros);
    clave.cambiarCaracterEspecial(incluirCaracteresEspeciales);
    clave.codificar();
    return clave;
  }

  public get perfil(): Perfil {
    return this._perfil;
  }

  public set perfil(value: Perfil) {
    this._perfil = value;
  }

  public codificar() {
    this.perfil.cambiarContrasenia(this._codificador.codificar(this.perfil.obtenerContrasenia()));
    this.encriptada = true;
  }

  public claveDecodificada() {
    return this._codificador.decodificar(this.perfil.obtenerContrasenia());
  }

  public esValida(): boolean { return false }

}