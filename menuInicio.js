let inicio = document.querySelector('.inicio');
let historia = document.querySelector('.historia');
let servicio = document.querySelector('.servicio');
let documento = document.querySelector('.documento');

let htmlInicio = `
         
        <div class="descuento-dia">
            <article>
            <h3>Mi tienda tiene un descuento para vos!!</h3>
            <p>Moda al mejor precio: ¡aprovecha nuestras ofertas!     
               no dejes pasar esta oportunidad de disfrutar de nuestra oferta de moda al mejor precio.
            </p>
            <div class="mostrador-ropas" >
            <img class="descuento-imagen" src="/img/remeras/remeras-15.png" alt="remeras">
            <div class="img-off" >
                <span class="off">30%</span>
                <p>off</p>
            </div>
           </div>
            </article>
       </div>

       <div class="title-off">
        <h2>
            <span class="off">30%</span>
            <p>OFF</p>
        </h2>
       </div>
    
       <div class="descuento-dia">
        <article>
        <h3>Mi tienda tiene un descuento para vos!!</h3>
        <p>Moda al mejor precio: ¡aprovecha nuestras ofertas!     
           no dejes pasar esta oportunidad de disfrutar de nuestra oferta de moda al mejor precio.
        </p>
        <div class="mostrador-ropas" >
        <img class="descuento-imagen" src="/img/remeras/remeras-13.png" alt="remeras">
        <div class="img-off" >
            <span class="off">30%</span>
            <p>off</p>
        </div>
       </div>
        </article>
        
   </div>

`

inicio.addEventListener('click',()=>{
    contenedorRopas.innerHTML = ''
    contenedorInicio.style.display = 'flex';
    remerasTrue = zapatillasTrue = gorrasTrue = pantalonesTrue = true
    imgBody.style.display = 'block';
    if(contenedorInicio.innerHTML == ''){
        contenedorInicio.innerHTML = htmlInicio;
    }
   
})








