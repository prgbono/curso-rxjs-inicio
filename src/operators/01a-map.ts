// Operadores - Map -> https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16530078#labs
import {fromEvent, range} from 'rxjs'
import { map } from 'rxjs/operators'

/* pipe
Pipe es un método de los observables. No hace nada, sólo hace pasar la info por un 'tubería' para manejarla mejor.
DEntro de esa tubería o pipe, es donde podemos poner los operadores
*/

range(1,5)
  // .pipe( map<number, number>( val => val * 10)) // Para sacar enteros
  .pipe( map<number, string>( val => (val * 10).toString()))  // Para sacar strings. Notice los params del map
  .subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');
const keyupCode$ = keyup$.pipe(
  map( event => event.code)
)

keyupCode$.subscribe( code => console.log('map: ', code ));

// keyupCode devuelve la letra que ha siso pulsada dentro de toda la info que trae el KeyboardEvent keyup
