const tablaBody = document.querySelector('#tabla-carrito tbody');


document.addEventListener('DOMContentLoaded', () => {
    const carrosGuardados = JSON.parse(localStorage.getItem('carros')) || [];
    let totalCompra = 0;


    carrosGuardados.forEach((carro) => {
        const fila = document.createElement('tr');

        const tdNombre = document.createElement('td');
        tdNombre.textContent = carro.nombre;


        const tdMarca = document.createElement('td');
        tdMarca.textContent = carro.marca;


        const tdModelo = document.createElement('td');
        tdModelo.textContent = carro.modelo;


        const tdkilometraje = document.createElement('td');
        tdkilometraje.textContent = carro.kilometraje;


        const tdPrecio = document.createElement('td');
        tdPrecio.textContent = carro.precio;
        totalCompra += Number(carro.precio);

        fila.appendChild(tdNombre);
        fila.appendChild(tdMarca);
        fila.appendChild(tdModelo);
        fila.appendChild(tdkilometraje);
        fila.appendChild(tdPrecio);
        tablaBody.appendChild(fila);



    });

    const filaTotal = document.createElement('tr');
    const tdTotalTitulo = document.createElement('td');
    tdTotalTitulo.textContent = 'Total';
    tdTotalTitulo.setAttribute('colspan', '4');

    const tdValorTotal = document.createElement('td');
    tdValorTotal.textContent = '$ ' + totalCompra;

    filaTotal.appendChild(tdTotalTitulo);
    filaTotal.appendChild(tdValorTotal);
    tablaBody.appendChild(filaTotal);
});