// Operadores - Map -> https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16530078#labs
//            - Pluck -> https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16530946#labs
//            - mapTo - https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16531682#labs

import {fromEvent, range} from 'rxjs'
import { map, mapTo, pluck } from 'rxjs/operators'

/* pipe
Pipe es un método de los observables. No hace nada, sólo hace pasar la info por un 'tubería' para manejarla mejor.
DEntro de esa tubería o pipe, es donde podemos poner los operadores
*/

// range(1,5)
//   // .pipe( map<number, number>( val => val * 10)) // Para sacar enteros
//   .pipe( map<number, string>( val => (val * 10).toString()))  // Para sacar strings. Notice los params del map
//   .subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');
const keyupCode$ = keyup$.pipe(
  map( event => event.code)
);

keyupCode$.subscribe( code => console.log('map: ', code ));
// keyupCode devuelve la letra que ha siso pulsada dentro de toda la info que trae el KeyboardEvent keyup

// Operador Pluck - Saca una propiedad específica de un objeto. También para propiedades anidadas en objetos anidados.
const keyupPluck$ = keyup$.pipe(
  pluck('key') // se que hay un atributo 'key' en el objeto que devuelve keyup. De hecho este objeto es KeyboardEvent
)

keyupPluck$.subscribe( teclaPulsada => console.log('pluck: ', teclaPulsada ));

// Ejemplo de pluck para propiedades en objetos anidados (KeyboardEvent / target / baseURI)
const keyupPluckAnidado$ = keyup$.pipe(
  pluck('target','baseURI') // se que hay un atributo 'key' en el objeto que devuelve keyup. De hecho este objeto es KeyboardEvent. OJO QUE ESTä SEPARADO POR ',' y no por '.'
)
keyupPluckAnidado$.subscribe( url => console.log('pluckURI (ppdades anidadas): ', url ));

// Ejemplo de mapTo. Doco -> https://rxjs-dev.firebaseapp.com/api/operators/mapTo
const keyupMapTo$ = keyup$.pipe(
  mapTo('tecla presionada') 
)
keyupMapTo$.subscribe( foo => console.log('mapTo: ', foo ));