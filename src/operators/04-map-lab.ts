// Este workshop muestra una barra de progreso mostrando el contenido por mostrar restante.
// Este ejercicio es bueno para mostrar elementos en front dependiendo del scroll hecho por el usuario por ejemplo.

import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium sem nec libero tincidunt, et fermentum turpis auctor. Morbi ut mattis justo. Curabitur a lectus eget lectus bibendum porta et sed sapien. Maecenas luctus dictum lorem eget pretium. Curabitur condimentum magna mi, a fermentum libero euismod non. Vivamus pellentesque tortor dapibus erat venenatis ornare. Phasellus tincidunt fermentum lacus, non auctor risus sagittis non. Suspendisse sed venenatis ligula.
<br /><br />
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut aliquam nisi dapibus fermentum porttitor. Suspendisse lacus est, ullamcorper id erat et, pellentesque luctus lorem. Phasellus nec diam nec metus vulputate finibus. Pellentesque et leo purus. Mauris sollicitudin tortor venenatis, placerat nulla at, tempus nunc. Ut vitae porttitor urna, molestie iaculis elit. Suspendisse potenti. Sed congue vitae magna eu porta. Pellentesque et nibh vehicula, bibendum leo at, sodales nunc.
<br /><br />
Proin eu risus sed velit pretium consectetur ac ut orci. Nulla facilisi. Nullam egestas elementum ornare. Nullam quis accumsan turpis. Nullam diam nisl, vehicula sit amet congue luctus, tempus eget dui. Donec pharetra pellentesque augue quis auctor. Nulla non iaculis mauris. Suspendisse nec lorem maximus, venenatis mi quis, ullamcorper magna. Integer augue dui, imperdiet at nunc id, rhoncus bibendum urna. Nam id tellus id augue euismod sollicitudin. Quisque lacinia mi eu porta feugiat. Cras vitae consectetur nunc. Pellentesque tristique risus non turpis ultricies consequat. Sed efficitur neque sit amet faucibus varius. Sed eu velit ut tortor tempor dictum sed vitae libero.
<br /><br />
Pellentesque cursus finibus ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam mollis mi sit amet imperdiet malesuada. Donec lacus nisi, placerat quis nibh nec, vestibulum congue augue. In ut arcu posuere, dapibus libero ut, hendrerit purus. Vestibulum eu sollicitudin est. Integer sed venenatis magna. Proin fringilla scelerisque sapien eget viverra. Vivamus lacus mauris, tempor et enim ut, suscipit tristique nisl. Donec tincidunt laoreet lacus quis rhoncus. Curabitur consectetur et arcu eget porta. Vivamus sit amet eros et diam faucibus ornare. Mauris tellus ipsum, gravida a aliquam eget, bibendum sed neque. Pellentesque non dui metus. Etiam venenatis accumsan porta. Nunc venenatis nisi quis leo faucibus gravida.
<br /><br />
Praesent eleifend dignissim viverra. Donec et justo quis lorem blandit ultrices quis ut massa. Quisque non elit molestie, sollicitudin turpis sit amet, posuere tellus. In ligula lacus, laoreet eu massa ac, rhoncus sollicitudin mauris. Maecenas et lorem ultricies, elementum erat sit amet, semper nibh. Pellentesque finibus suscipit nisl sit amet finibus. Nam dapibus turpis odio, sit amet sollicitudin velit pulvinar in. Donec eu quam nec enim ornare tempus eget quis quam. Pellentesque vitae elit iaculis, pretium enim vel, convallis mi. Aliquam efficitur elit eget justo commodo bibendum. Suspendisse potenti. Integer sagittis, odio ut condimentum tempor, leo tortor luctus neque, eget pharetra justo nisl non nisi. Ut posuere tristique condimentum. Vivamus libero mauris, mattis sit amet porttitor vitae, finibus et justo. Etiam ultricies dignissim pellentesque. Duis eleifend suscipit leo, non lacinia orci pellentesque id.

`

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
  
  const{
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map( event => calcularPorcentajeScroll(event))  Igual que la posterior, misma instrucción
  map (calcularPorcentajeScroll),
  tap (console.log);
)

progress$.subscribe( porcentaje => {
  progressBar.style.width = `${porcentaje}`
})
