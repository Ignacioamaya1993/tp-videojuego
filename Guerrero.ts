import { Personaje } from './Personaje';

export class Guerrero extends Personaje {
    fuerza: number;

    constructor(nombre: string, puntosDeVida: number, fuerza: number) {
        super(nombre, puntosDeVida);
        this.fuerza = fuerza;
    }

    atacar(): void {
        console.log(`${this.nombre} golpea con una fuerza de ${this.fuerza}`);
    }
}