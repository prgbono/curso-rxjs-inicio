import { interval, timer } from 'rxjs'

const observer = {
  next: val => console.log('next: ', val),
  complete: () => console.log('complete'),  
}

const interval$ = interval(1000);
// const timer$ = timer(0);
// const timer$ = timer(2000, 1000);

const currentPlus5Secs = new Date(); //this is ahora
currentPlus5Secs.setSeconds(currentPlus5Secs.getSeconds() + 5);
const timer$ = timer(currentPlus5Secs);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');

// Interval emite entre intervalos de tiempo sin completar 
// El timer emite el valor en un intervalo de tiempo y se completa
// El timer también tiene la capacidad de comportarse igual que un interval pasándole un 2do parámetro. 
// En el vídeo explica cómo podemos con timer crear un interval que se inicie en su primera emisión en X segundos
// const timer$ = timer(2000, 1000); -> Va a tener el mismo comportamiento que interval(1000) pero con los 2000ms iniciales
// El timer se utiliza para programar concretamente cuándo quieres que se ejecute el next y se complete el observable.
// Se utiliza mucho por ejemplo en el envío de notificaciones push, seteando el primer parámetro del timer 