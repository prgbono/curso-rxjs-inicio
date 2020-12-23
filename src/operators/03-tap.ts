// Vídeo https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16537772#labs
// TAP - El tap dispara efectos secundarios cuando se reciba un valor. 

import {range} from 'rxjs'
import {tap, map} from 'rxjs/operators'

const numero$ = range(1,5);

numero$.pipe(
  tap( x => {
    console.log('antes ',x);
    return 100; // Esto  no hace nada aquí...  
  }),
  map (val => val * 10),
  tap({
    next: valor => console.log('después', valor),
    complete: () => console.log('Se terminó todo (Complete)')
  })
)
.subscribe(val => console.log('subs', val));
