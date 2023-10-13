export class Perfil {
  private username: string;
  private contrasenia: string;

  constructor(username: string, contrasenia: string) {
    this.username = username;
    this.contrasenia = contrasenia;
  }

  obtenerUsername(): string {
    return this.username;
  }

  cambiarUsername(username: string) {
    this.username = username;
  }
}