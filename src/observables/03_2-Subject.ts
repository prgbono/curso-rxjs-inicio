import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completado'),
}

const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(
    () => subs.next(Math.random()), 1000
  );

  return () => {
    clearInterval(intervalID);
    console.log('setInterval destruido');
    
  }
});


/* 
const subs1 = intervalo$.subscribe( random => console.log('subs1 ', random));
const subs2 = intervalo$.subscribe( random => console.log('subs2 ', random));

SUBJECT
  Subject es un observable y también observer.
  Si tenemos dos subscribers suscritos a intervalo$ (comentado más arriba en este mismo bloque de comentarios), 
    cada uno de ellos emitirá un número distinto.
  Subject soluciona esto. Emiritá el mismo valor a todas las suscripciones.
  Los subjects cumplen además estas 3 características:
  - Casting múltiple
  - También es un observer
  - emiten next, error y complete
*/

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);
// const subs1 = subject$.subscribe( random => console.log('subs1 ', random));
// const subs2 = subject$.subscribe( random => console.log('subs2 ', random));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(()=>{
  // Es tb un observer con next, error y complete
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500)
