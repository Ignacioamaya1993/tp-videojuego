import { Mago } from './Mago';

export class MagoSupremo extends Mago {
    habilidadEspecial: string;

    constructor(nombre: string, puntosDeVida: number, magia: number, habilidadEspecial: string) {
        super(nombre, puntosDeVida, magia);
        this.habilidadEspecial = habilidadEspecial;
    }

    usarHabilidadEspecial(): void {
        console.log(`${this.nombre} usa su habilidad especial: ${this.habilidadEspecial}`);
    }
}