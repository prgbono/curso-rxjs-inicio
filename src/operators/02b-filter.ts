// Vídeo -> https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16531710#labs
// CADENA O ENCADENAMIENTO DE OPERADORES. PArtimos del código anterior, file 02a-filter.ts
// Vídeo - https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16537210#labs
// EL ORDEN EN QUE ENCADENAMOS LOS OPERADORES ES IMPORTANTE!!

import {from, fromEvent} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// Concatenamos map y filter. Filtramos lo que nos decuelve map para sólo tratar la tecla Enter.
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map( event => event.code),
  filter ( key => key === 'Enter')
);

keyup$.subscribe(console.log)


