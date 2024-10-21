import { Personaje } from './Personaje';

export class Arquero extends Personaje {
    precision: number;

    constructor(nombre: string, puntosDeVida: number, precision: number) {
        super(nombre, puntosDeVida);
        this.precision = precision;
    }

    atacar(): void {
        console.log(`${this.nombre} dispara una flecha con ${this.precision}% de precisión`);
    }
}