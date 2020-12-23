// Vídeo -> https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16531710#labs

import {range, from} from 'rxjs';
import {filter} from 'rxjs/operators';
 
// Ejemplo básico de filter
// range(1,10).pipe(
//   filter(val => val % 2 === 1))
//   .subscribe(console.log)

// Ejemplo para mostrar que También podemos trabajar con los index
// range(20,30).pipe(
//   filter((val, index) => {
//     console.log('Index del elto tratado: ',  index);
//     return val % 2 === 1;
//   })
// ).subscribe(console.log)

// Un poco más de chicha
interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes :Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Robin'
  },
  {
    tipo: 'villano',
    nombre: 'Joker'
  },
];

from (personajes).pipe(
  filter(item => item.tipo == 'heroe'))
  .subscribe(console.log)
