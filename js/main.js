const form = document.getElementById('vehiculo-form');
let foto = '';
let nombre = '';
let marca = '';
let modelo = '';
let kilometraje = '';
let precio = '';
let contCarros = document.getElementById('cont-list-cars');

const btnCar = document.getElementById('button-carrito');
const contOculto = document.getElementById('cont-carrito');
let contTotalCarrito = document.getElementById('total-carrito');
let totalCarrito = 0;

let contCarrito = document.getElementById('cont-products');


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

// Función para pintar producto en el carrito 
function addProductCar(item) {
    foto_carrito = item.querySelector('.card-img-top').src;
    nombre_carrito = item.querySelector('.card-title').textContent;
    marca_carrito = item.querySelector('.card-subtitle').textContent;
    precio_carrito = item.querySelector('.text-success').textContent;
    const kilometraje_carro = item.querySelector('.kilometro-vehiculo').textContent;
    const modelo_carro = item.querySelector('.modelo-vehiculo').textContent;

    const nombre_marca = marca_carrito.split(':');
    const precioReal = precio_carrito.split('$');
    const kilometraje_real = kilometraje_carro.split(':');
    const modelo_real = modelo_carro.split(':');

    const newCartItem = addToCart(foto_carrito, nombre_carrito, nombre_marca[1].trim(), precioReal[1].trim(), kilometraje_real[1].trim(), modelo_real[1].trim());

    contCarrito.appendChild(newCartItem);
    actualizarTotal(precioReal[1].trim());
}

// Function eventos de articulo
function eventsToItem(item) {

    const comprar = item.querySelector('.b-comprar');
    comprar.addEventListener('click', () => {
        addProductCar(item);
        alert('Producto agregado al carrito de compras');
    })

    const deleteBtn = item.querySelector(".b-eliminar");
    deleteBtn.addEventListener('click', () => {
        item.remove();
    })
}

function setCarToList(foto_carrito, nombre_carro, marca_carro, precio_carro, kilometraje_carro, modelo_carro) {
    const listCarros = JSON.parse(localStorage.getItem('carros')) || [];
    listCarros.push({
        foto: foto_carrito,
        nombre: nombre_carro,
        marca: marca_carro,
        precio: precio_carro,
        kilometraje: kilometraje_carro,
        modelo: modelo_carro,
    });

    localStorage.setItem('carros', JSON.stringify(listCarros));
}

// funcion  pata eliminar el registro del carro del localStorage
function deleteCarToList(nombre_carro, marca_carro) {
    const listCarros = JSON.parse(localStorage.getItem('carros')) || [];
    // se valida si exixten registros en el arreglo 
    if (listCarros.length > 0) {
        const indexCarroEliminar = listCarros.findIndex(objeto => objeto.nombre === nombre_carro && objeto.marca === marca_carro);
        // Actualizamos el valor del carrito
        totalCarrito = totalCarrito - Number(listCarros[indexCarroEliminar].precio);
        contTotalCarrito.textContent = 'Total: $ ' + totalCarrito;

        // Eliminamos el vehiculo del Carrito
        listCarros.splice(indexCarroEliminar, 1);
        localStorage.setItem('carros', JSON.stringify(listCarros));
    }
}


function addToCart(foto_carro, nombre_carro, marca_carro, precio_carro, kilometraje_carro, modelo_carro) {
    setCarToList(foto_carro, nombre_carro, marca_carro, precio_carro, kilometraje_carro, modelo_carro);
    const item = document.createElement('div');
    item.classList.add('col-md-6', 'item-vehiculo-carrito');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');

    const img = document.createElement('img');
    img.setAttribute('src', foto_carro);
    img.classList.add('card-img-top');
    img.classList.add('w-100');
    img.setAttribute('alt', 'Foto vehículo');

    card.appendChild(img);

    const carBody = document.createElement('div');
    carBody.classList.add('card-body');

    const tituloNombre = document.createElement('h3');
    tituloNombre.classList.add('card-title');
    tituloNombre.textContent = nombre_carro;

    const tituloMarca = document.createElement('h4');
    tituloMarca.classList.add('card-subtitle', 'text-muted');
    tituloMarca.textContent = 'Marca: ' + marca_carro;

    const tituloPrecio = document.createElement('h2');
    tituloPrecio.classList.add('text-success', 'precio-vehiculo');
    tituloPrecio.textContent = '$' + precio_carro;

    const buttons = document.createElement('div')
    buttons.classList.add('d-flex', 'justify-content-between', 'mt-3');

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger', 'b-eliminar');
    btnEliminar.textContent = 'Eliminar';

    // Agregamos los nodos de la tarjeta de información del vehiculo
    carBody.appendChild(tituloNombre);
    carBody.appendChild(tituloMarca);
    carBody.appendChild(tituloPrecio);
    carBody.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        item.remove();
        deleteCarToList(nombre_carro, marca_carro)
    })


    // Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    card.appendChild(carBody);
    item.appendChild(card);

    // creamos el retun para dar respuesta del elemento crado ya que lo usaremos en otra function mas adelante
    return item;
}

function actualizarTotal(precio) {
    const valor = precio.trim().replace(/[^0-9.-]+/g, "");
    totalCarrito += Number(valor);
    contTotalCarrito.textContent = 'Total: $ ' + totalCarrito;
}

