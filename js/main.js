const form = document.getElementById('vehiculo-form');
let foto = '';
let nombre = '';
let marca = '';
let modelo = '';
let kilometraje = '';
let precio = '';
let contCarros = document.getElementById('cont-list-cars')

function addCard() {
    // Construimos la tarjeta
    const item = document.createElement('div');
    item.classList.add("col-md-6");
    item.classList.add("item-vehiculo");

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('h-100');

    // Creamos el nodo hijo de tipo Img y agregamos la ruta de la foto
    const img = document.createElement('img');
    img.setAttribute('src', foto);
    img.classList.add('card-img-top');
    img.classList.add('w-100');
    img.setAttribute('alt', 'Foto vehículo');

    card.appendChild(img);

    const carBody = document.createElement('div');
    carBody.classList.add('card-body');

    const tituloNombre = document.createElement('h3');
    tituloNombre.classList.add('card-title');
    tituloNombre.textContent = nombre;

    const tituloMarca = document.createElement('h4');
    tituloMarca.classList.add('card-subtitle');
    tituloMarca.classList.add('text-muted');
    tituloMarca.textContent = 'Marca: ' + marca;

    const tituloModelo = document.createElement('h4');
    tituloModelo.classList.add('card-text');
    tituloModelo.classList.add('modelo-vehiculo');
    tituloModelo.textContent = 'Modelo: ' + modelo;

    const tituloKilometro = document.createElement('h4');
    tituloKilometro.classList.add('card-text');
    tituloKilometro.classList.add('kilometro-vehiculo');
    tituloKilometro.textContent = 'Kilometraje: ' + kilometraje + ' km';

    const tituloPrecio = document.createElement('h2');
    tituloPrecio.classList.add('text-success');
    tituloPrecio.classList.add('precio-vehiculo');
    tituloPrecio.textContent = '$' + precio;



    const buttons = document.createElement('div')
    buttons.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const btnComprar = document.createElement('button');
    btnComprar.classList.add('btn', 'btn-success', 'b-comprar');
    btnComprar.textContent = 'Comprar';

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger', 'b-eliminar');
    btnEliminar.textContent = 'Eliminar';

    // Agregamos los nodos de la tarjeta de información del vehiculo
    carBody.appendChild(tituloNombre);
    carBody.appendChild(tituloMarca);
    carBody.appendChild(tituloModelo);
    carBody.appendChild(tituloKilometro);
    carBody.appendChild(tituloPrecio);
    carBody.appendChild(btnComprar);
    carBody.appendChild(btnEliminar);

    // Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    card.appendChild(carBody);
    item.appendChild(card);

    // creamos el retun para dar respuesta del elemento crado ya que lo usaremos en otra function mas adelante
    return item;

}

// Se captura el valor de los elementos del formulario con el submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Se extrajeron los valores de cada input del formulario segun la posicion de cada elemento en el formulario
    foto = e.target[0].value;
    nombre = e.target[1].value;
    marca = e.target[2].value;
    modelo = e.target[3].value;
    kilometraje = e.target[4].value;
    precio = e.target[5].value;

    form.reset();

    // validar que los campos no esten vacios
    if (nombre.trim() === '' || marca.trim() === '' || modelo.trim() === '' || kilometraje.trim() === '' || precio.trim() === '') {
        alert('Hay campos obligatorios sin dilegenciar, por favor ingrese los campos obligatorios');
        return;
    }

    if (foto.trim() === '') {
        foto = 'img/default-placeholder.png';
    }

    // Crear la tarjeta del nuvo vehivulo 
    const newItem = addCard();
    contCarros.appendChild(newItem);
    eventsToItem(newItem);

});




function eventsToItem(item) {

    const comprar = item.querySelector('.b-comprar');
    comprar.addEventListener('click', () => {
        alert('Compra con exito');
    })


    const deleteBtn = item.querySelector(".b-eliminar");
    deleteBtn.addEventListener('click', () => {
        item.remove();
    })
}

