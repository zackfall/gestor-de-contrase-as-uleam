// Esta clase se encarga de la parte lógica del programa, ya que nos permite codificar las contraseñas
import crypto from "crypto"

export class Codificador {
  private iv: Buffer;
  private salt: Buffer;

  constructor() {
    this.iv = crypto.randomBytes(16);
    this.salt = crypto.randomBytes(16);
  }

  /**
   * Encripta la contraseña usando el algoritmo AES-256-CBC.
   */
  codificar(contrasena: string): string {
    const claveDerivada = crypto.scryptSync(contrasena, this.salt, 32);
    const coder = crypto.createCipheriv('aes-256-cbc', claveDerivada, this.iv)
    let cifrado = coder.update(contrasena, 'utf8', 'hex')
    cifrado += coder.final('hex')
    return cifrado
  }

  /**
   * Decodifica la clave usando el algoritmo AES-256-CBC.
   */
  decodificar(cifrado: string) {
    const claveDerivada = crypto.scryptSync(cifrado, this.salt, 32);
    const decoder = crypto.createDecipheriv('aes-256-cbc', claveDerivada, this.iv);
    let contrasena = decoder.update(cifrado, 'hex', 'utf8');
    contrasena += decoder.final('utf8');
    return contrasena;
  }
}