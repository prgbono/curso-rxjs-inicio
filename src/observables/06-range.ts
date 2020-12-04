/*
range -> Observables que emiten una secuencia de números en base a un rango. 
Por defecto son síncronos, pero pueden convertirse en asíncronas con AsyncSchedule. 

El valor inicial por defecto de range es 0, por lo que se puede omitir.
El segunfo parámetre es el número de emisiones que queremos que tenga. Así, range (-5, 10) emiritá: -5,-4,-3,-2,-1,0,1,2,3,4 -> 10 emisiones

*/

import { asyncScheduler, range } from 'rxjs'

// Síncrono
// const src$ = range(1, 25);

// Asíncrono
const src$ = range(1, 25, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');


