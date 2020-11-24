import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]: ', value),
  error: error => console.warn('error [obs]: ', error),
  complete: () => console.info('Completado [obs]'),
}

// const obs$ = Observable.create();
const obs$ = new Observable<String>( subs => {
  subs.next('Hola');
  subs.next('Mundo');
  subs.next('Hola2');
  subs.next('Mundo2');

  subs.complete();
});

// obs$.subscribe( 
  // valor => console.log('Next: ',valor),
  // error => console.log('Error: ',error),
  // () => console.log('Completado')
// )
obs$.subscribe( observer );
