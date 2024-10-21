import { Mago } from './Mago';
import { Guerrero } from './Guerrero';
import { Arquero } from './Arquero';
import { MagoSupremo } from './MagoSupremo';

const mago = new Mago('Gandalf', 100, 50);
const guerrero = new Guerrero('Kratos', 120, 80);
const arquero = new Arquero('Legolas', 90, 85);

mago.atacar();
guerrero.atacar();
arquero.atacar();

mago.subirNivel();

mago.aprenderNuevoAtaque('Explosión Arcana');
mago.atacar();

const magoSupremo = new MagoSupremo('Merlín', 150, 70, 'Evil Spirit');
magoSupremo.usarHabilidadEspecial();