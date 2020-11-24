import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completado'),
}

const intervalo$ = new Observable<number>(subscriber => {
  // Contador 1,2,3,4,5.......
  let count = 0;

  const interval = setInterval(()=>{
    // cada seg
    count++;
    subscriber.next(count);
  },1000);

  setTimeout(()=>{
    subscriber.complete();
  }, 2500);

  // Éste return se ejecuta en la desuscripción. Muy importante para evitar fugas de memoria
  return () => {
    clearInterval(interval);
    console.log('intervalo destruído');
  }

});


const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);
// subs es una subscription

subs1.add(subs2)
  .add(subs3);

setTimeout(()=>{
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();  
  console.log('Completado timeout');
  
},6000);
