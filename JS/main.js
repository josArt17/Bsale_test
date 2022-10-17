let btn = document.getElementById('btn');
let container = document.getElementById('contenido');
let buscador = document.getElementById('input-search');
let cajaProductos = document.getElementsByClassName('box-productos');

   
let peticion = new XMLHttpRequest();
peticion.open('GET', 'https://back-bsale-josart.herokuapp.com/index.php');

/* CREAMOS LA PETICION POR MEDIO DE GET, AL ARCHIVO DONDE TENEMOS LA CONEXION A LA BD */


peticion.onload = function () { /* FUNCION PARA DESARROLAR LA PETICION */
let producto = JSON.parse(peticion.responseText); 
 /* SE RECIBE UN ARCHIVO DE TEXTO Y LO CONVERTIMOS A JSON */

if (producto.error) {
        alert('HAY UN ERROR EN EL CODIGO'); /* SI SALIO ALGO MAL EN LA PETICION NOS ARROJA UN ALERT */
    } else {

        for (i = 0; i < producto.length; i++) { /* CREAMOS UN FOR PARA ITERAR TODOS LOS ELEMENTOS */
        let elemento = document.createElement('div');
        elemento.classList.add("box-productos", "shadow", "p-3", "mb-5", "bg-body", "rounded");
        elemento.innerHTML += `
        <span class="discount">-${producto[i].descuento}%</span>
        <div class="icons">
            <a href="#" class="bi bi-heart"></a>
            <a href="#" class="bi bi-share"></a>
            <a href="#" class="bi bi-eye"></a>
        </div>
        <img src="${producto[i].img}">
        <h3>${producto[i].nombre}</h3>
        <div class="stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
        </div>
        <div class="price">$${producto[i].precio}</div>
        <div class="quantity">
            <span>Cantidad: </span>
            <input type="number" min="1" max="15" value="1">
        </div>
        <a href="#" class="btn btn-danger mt-2">Añadir al carrito</a>
        `
                    
    container.appendChild(elemento);
    }

     
  }

    peticion.send();  /* ENVIAMOS LA PETICION */
}

