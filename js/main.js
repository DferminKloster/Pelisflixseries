
const fila1 = document.querySelector('.carr1');// ? ----- ----- contenedor carrusel. ----- ----
const peliculas1 = document.querySelectorAll('.p1');// ? ----- -----  peliculas. ----- ----

const flechaIzquierda1 = document.getElementById('fi1');// ? ----- ----- flecha derecha. ----- ----
const flechaDerecha1 = document.getElementById('fd1');// ? ----- ----- flecha izquierda. ----- ----

// ? ----- ----- Event Listener para la flecha derecha. ----- ----
flechaDerecha1.addEventListener('click', () => {
	fila1.scrollLeft += fila1.offsetWidth;

	const indicadorActivo1 = document.querySelector('.in1 .activo');
	if(indicadorActivo1.nextSibling){
		indicadorActivo1.nextSibling.classList.add('activo');
		indicadorActivo1.classList.remove('activo');
	}

});
// ? ----- ----- Event Listener para la flecha izquierda. ----- ----
flechaIzquierda1.addEventListener('click', () => {
	fila1.scrollLeft -= fila1.offsetWidth;

	const indicadorActivo1 = document.querySelector('.in1 .activo');
	if(indicadorActivo1.previousSibling){
		indicadorActivo1.previousSibling.classList.add('activo');
		indicadorActivo1.classList.remove('activo');
	}

});

// ? ----- ----- Paginacion ----- -----

const numeroPaginas1 = Math.ceil(peliculas1.length / 4);
for(let i = 0; i < numeroPaginas1; i++){
	const indicador1 = document.createElement('button');

	if(i === 0){
		indicador1.classList.add('activo');
	}

	document.querySelector('.in1').appendChild(indicador1);
	indicador1.addEventListener('click', (e) => {
		fila1.scrollLeft = i * fila1.offsetWidth;

		document.querySelector('.in1 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----

peliculas1.forEach((pelicula1) => {
	pelicula1.addEventListener('mouseenter', (e) => {
		const elemento1 = e.currentTarget;
		setTimeout(() => {
			peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
			elemento1.classList.add('hover');
		}, 300);
	});
});

fila1.addEventListener('mouseleave', () => {
	peliculas1.forEach(pelicula1 => pelicula1.classList.remove('hover'));
});


// ? ----- ----- Carrusel 2 ----- -----
const fila2 = document.querySelector('.carr2');
const peliculas2 = document.querySelectorAll('.p2');

const flechaIzquierda2 = document.getElementById('fi2');
const flechaDerecha2 = document.getElementById('fd2');

// ? ----- ----- Event Listener para la flecha derecha. ----- ----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.in2 .activo');
	if(indicadorActivo2.nextSibling){
		indicadorActivo2.nextSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}

});
// ? ----- ----- Event Listener para la flecha izquierda. ----- ----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.in2 .activo');
	if(indicadorActivo2.previousSibling){
		indicadorActivo2.previousSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas2 = Math.ceil(peliculas2.length / 4);
for(let i = 0; i < numeroPaginas2; i++){
	const indicador2 = document.createElement('button');

	if(i === 0){
		indicador2.classList.add('activo');
	}

	document.querySelector('.in2').appendChild(indicador2);
	indicador2.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth;

		document.querySelector('.in2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Hover ----- -----
peliculas2.forEach((pelicula2) => {
	pelicula2.addEventListener('mouseenter', (e) => {
		const elemento2 = e.currentTarget;
		setTimeout(() => {
			peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover'));
			elemento2.classList.add('hover');
		}, 300);
	});
});

fila2.addEventListener('mouseleave', () => {
	peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover'));
});

/* ---- ----- ----- Carrusel 3 ----- ----- ----- */
const fila3 = document.querySelector('.carr3');
const peliculas3 = document.querySelectorAll('.p3');

const flechaIzquierda3 = document.getElementById('fi3');
const flechaDerecha3 = document.getElementById('fd3');

// ? ----- ----- Event Listener para la flecha derecha. ----- ----
flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;

	const indicadorActivo3 = document.querySelector('.in3 .activo');
	if(indicadorActivo3.nextSibling){
		indicadorActivo3.nextSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}

});
// ? ----- ----- Event Listener para la flecha izquierda. ----- ----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

	const indicadorActivo3 = document.querySelector('.in3 .activo');
	if(indicadorActivo3.previousSibling){
		indicadorActivo3.previousSibling.classList.add('activo');
		indicadorActivo3.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas3 = Math.ceil(peliculas3.length / 4);
for(let i = 0; i < numeroPaginas3; i++){
	const indicador3 = document.createElement('button');

	if(i === 0){
		indicador3.classList.add('activo');
	}

	document.querySelector('.in3').appendChild(indicador3);
	indicador3.addEventListener('click', (e) => {
		fila3.scrollLeft = i * fila3.offsetWidth;

		document.querySelector('.in3 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
// ? ----- ----- Hover ----- -----
peliculas3.forEach((pelicula3) => {
	pelicula3.addEventListener('mouseenter', (e) => {
		const elemento3 = e.currentTarget;
		setTimeout(() => {
			peliculas3.forEach(pelicula3 => pelicula3.classList.remove('hover'));
			elemento3.classList.add('hover');
		}, 300);
	});
});

fila3.addEventListener('mouseleave', () => {
	peliculas3.forEach(pelicula3 => pelicula3.classList.remove('hover'));
});

// ? ----- ----- Filtrado ----- -----

const filterButtons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      item.classList.remove('filtered');
      if (filter !== 'all' && !item.classList.contains(filter)) {
        item.classList.add('filtered');
      }
    });
  });
});

// ? ----- ----- carga funcion ----- ----

window.addEventListener("load", function(){
	document.getElementById("loader").classList.toggle("loader2");
});

// ? ----- ----- funcion de favorito no se si dejarlo ----- ----

// Obtener una lista de todos los botones con la clase "toggleFavorite"
const toggleButtons = document.querySelectorAll(".toggleFavorite");

// Función para alternar el estado de favorito
function toggleFavorite(event) {
    const button = event.currentTarget;
    const heartIcon = button.querySelector("i");
    
    if (heartIcon.classList.contains("far")) {
        heartIcon.classList.remove("far");
        heartIcon.classList.add("fas");
        button.style.color = "#e74c3c";
    } else {
        heartIcon.classList.remove("fas");
        heartIcon.classList.add("far");
        button.style.color = "#ccc";
    }
}

// Agregar un evento de clic a cada botón
toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", toggleFavorite);
});
