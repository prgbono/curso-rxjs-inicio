/*
of -> Observables que emiten una secuencia de números 
Por defecto son síncronos, pero pueden convertirse en asíncronas con AsyncSchedule. 
*/

import {of} from 'rxjs'

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<any>([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true))

console.log('Inicio del Observable$');

obs$.subscribe(
  next => console.log('next', next),
  null,
  () => console.log('Terminamos el obs$')  
)

console.log('Fin del Observable$. Éste console muestra que el of hace que un observable sea síncrono, se muestra una vez que el Obs$ ha terminado');
  