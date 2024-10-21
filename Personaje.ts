export class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;
    ataques: string[];

    constructor(nombre: string, puntosDeVida: number) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
        this.ataques = ['ataque básico'];
    }

    atacar(): void {
        console.log(`${this.nombre} usa su ${this.ataques[0]}!`);
    }

    defender(): void {
        console.log(`${this.nombre} se está defendiendo!`);
    }

    subirNivel(): void {
        this.nivel++;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}!`);
    }

    aprenderNuevoAtaque(nuevoAtaque: string): void {
        this.ataques.push(nuevoAtaque);
        console.log(`${this.nombre} ha aprendido un nuevo ataque: ${nuevoAtaque}`);
    }
}
