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
    this._codificador = new Codificador(this._perfil.obtenerContrasenia())
    this.encriptada = false;
  }

  public get perfil(): Perfil {
    return this._perfil;
  }

  public set perfil(value: Perfil) {
    this._perfil = value;
  }

  public get codificador(): Codificador {
    return this._codificador;
  }

  public set codificador(value: Codificador) {
    this._codificador = value;
  }

  public esValida(): boolean { return false }

}