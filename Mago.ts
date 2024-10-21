import { Personaje } from './Personaje';

export class Mago extends Personaje {
    magia: number;

    constructor(nombre: string, puntosDeVida: number, magia: number) {
        super(nombre, puntosDeVida);
        this.magia = magia;
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un hechizo con ${this.magia} de poder mágico y usa su ${this.ataques[0]}`);
    }
}