import {of, from} from 'rxjs'

const observer = {
  next: val => console.log('next: ', val),
  complete: () => console.log('Complete')
};

// Evaluar la salida por consola de estas 3 instrucciones
// const source$ = from([1,2,3,4,5]);
// const source$ = of([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]); // Igual que la salida del from
// source$.subscribe(observer);

// const source$ = from('Paco');
// source$.subscribe(observer);

// El from nos permite convertir casi cualquier cosa en observable. Le enviamos una promise (fetch)
const source$ = from( fetch('https://api.github.com/prgbono'));
source$.subscribe(observer);
// Estamos recuperando en el next la respuesta de una http request! Pero hay que tratar el body para ver la info.

source$.subscribe (async (resp) => {
  console.log(resp);
  
  const dataResp = await resp.json();
  console.log(dataResp);
})

// El from tb puede trabajar con las funciones generadoras (se suelen distinguir por el '*') o iterables en js
const miGenerador = function*(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
const miIterable = miGenerador();
// for (let id of miIterable){
//   console.log(id);
// }
from (miIterable).subscribe(observer);

// Fin de la sección. Github para comparar https://github.com/Klerith/rxjs-ejercicios-completados/releases/tag/v2.0.0

