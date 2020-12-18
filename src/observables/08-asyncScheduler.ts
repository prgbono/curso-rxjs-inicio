// Vídeo -> https://deloittedevelopment.udemy.com/course/rxjs-de-cero-hasta-los-detalles/learn/lecture/16494450#labs
// AsyncScheduler no es un observable, es una suscripción
import {asyncScheduler} from 'rxjs';

const saludar = () => {console.log('Hola Mundo');}
asyncScheduler.schedule(saludar, 2000); 
// Ojo que envío el nombre de la función 'saludar' como primer parámetro sin (), de otra forma lo ejecutaría

// Entonces, cómo hago para enviar el parámetro nombre para ejecutar saludar2 definida a continuación?
const saludar2 = (nombre) => {console.log(`Hola ${nombre}`);}
// Tendría que usar para ello el parámetro state, ver la firma de schedule. De esta forma:
asyncScheduler.schedule(saludar2, 2000, 'Paco'); 

// Qué pasa si tengo más de un parámetro???
// El parámetro state tendría que ser un objeto, porque la firma de la función no admite más parámetros.

// Configurar un setInterval usando asyncScheduler
// La explicación del vídeo es una locura...
const subscription = asyncScheduler.schedule(function (state){
  console.log('state', state);
  this.schedule(state +1, 1000);
}, 3000, 0);

// Éste setTimeout es justamente lo mismo que el bloque de código a continuación
// setTimeout( () => {
//   subscription.unsubscribe(); //DEsuscribir para parar la suscripción
// }, 6000)

asyncScheduler.schedule( ()=> subscription.unsubscribe(), 6000);