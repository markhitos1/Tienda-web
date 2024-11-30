  // Referencias a los elementos
  const storeButton = document.getElementById('storeButton');
  const sidebar = document.getElementById('sidebar');
  const closeButton = document.getElementById('closeButton');
  const gorras = document.querySelector('.gorras');
  const Pantalones = document.querySelector('.pantalones');
  const Remeras = document.querySelector('.Remeras');
  const Zapatillas = document.querySelector('.Zapatillas');
  const contenedorRopas = document.querySelector('.conteiner-ropas');
  const contenedorInicio = document.querySelector('.contenedor-inicio');
  const imgBody = document.querySelector('.img-body');
  const clasOff = document.querySelectorAll('span.off');

  const porHoyDescuento = Math.floor(Math.random() * 80);
  
  
  for(let i = 0; i < clasOff.length; i++){
    clasOff[i].textContent = porHoyDescuento + '%'
  }

  let totalGorras = 16;
  let totalPantalones = 20;
  let totalRemeras = 16;
  let totalZapatillas = 16;
  let gorrasTrue = true
  let pantalonesTrue = true
  let remerasTrue = true
  let zapatillasTrue = true
  let iniciotrue = true;

  const svgEstrella = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>`
  const svgEstrellaNo =  `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg> `
 
  

  const valoracionEstrella1 = svgEstrella + svgEstrellaNo + svgEstrellaNo + svgEstrellaNo + svgEstrellaNo; 
  const valoracionEstrella2 = svgEstrella + svgEstrella + svgEstrellaNo + svgEstrellaNo + svgEstrellaNo;
  const valoracionEstrella3 = svgEstrella + svgEstrella + svgEstrella + svgEstrellaNo + svgEstrellaNo;
  const valoracionEstrella4 = svgEstrella + svgEstrella + svgEstrella + svgEstrella + svgEstrellaNo;
  const valoracionEstrella5 = svgEstrella + svgEstrella + svgEstrella + svgEstrella + svgEstrella;

  
  

  // Función para abrir la barra lateral
  storeButton.addEventListener('click', () => {
    sidebar.classList.add('open');
  });

  // Función para cerrar la barra lateral
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });


  function contenedorGorras (nombre,img,precioAhora,precioAnterior) {
    const valor5 = Math.floor(Math.random() * 5)+1;
    let valEstrella;

    if(valor5 == 1){
        valEstrella = valoracionEstrella1
    }else if(valor5 == 2){
        valEstrella = valoracionEstrella2
    }else if(valor5 == 3){
        valEstrella = valoracionEstrella3
    }else if(valor5 == 4){
        valEstrella =valoracionEstrella4
    }else{
        valEstrella = valoracionEstrella5
    }

    let htmlRopas = `
     <div class="seccion-ropas " >
            <div class="nombre-valoracion">
                <h3 class="nombre" >${nombre}</h3>
                <span class="estrella">
                  ${valEstrella}
                </span>  
                </div>
                <div class="img-ropa">
                <img src="img/gorras/gorra-${img}.png" alt="gorra">
                </div>
                <p > Precio: <span class="precio">$${precioAhora}</span> 
                <span class="precio-viejo" > $${precioAnterior}  </span>
                <span class="precio-off">-${porHoyDescuento}%</span>
             </p>
           <div>
            <button class="carrito" >Carrito</button>
            <button class="comprar" >Comprar</button>
           </div>
         </div>
    `
    contenedorRopas.innerHTML += htmlRopas ;
    
  }

  function contenedorPantalones (nombre,img,precioAhora,precioAnterior) {
    const valor5 = Math.floor(Math.random() * 5)+1;
    let valEstrella;

    if(valor5 == 1){
        valEstrella = valoracionEstrella1
    }else if(valor5 == 2){
        valEstrella = valoracionEstrella2
    }else if(valor5 == 3){
        valEstrella = valoracionEstrella3
    }else if(valor5 == 4){
        valEstrella =valoracionEstrella4
    }else{
        valEstrella = valoracionEstrella5
    }

    let htmlPantalon = `
     <div class="seccion-ropas " >
            <div class="nombre-valoracion">
                <h3 class="nombre" >${nombre}</h3>
                <span class="estrella">
                  ${valEstrella}
                </span>  
            </div>
            <div class="img-ropa">
                <img src="/img/pantalones/pantalon-${img}.png" alt="pantalon">
            </div>
            <p > Precio: <span class="precio">$${precioAhora}</span> 
            <span class="precio-viejo" > $${precioAnterior}  </span> 
             <span class="precio-off">-${porHoyDescuento}%</span>
            </p>
           <div>
            <button class="carrito" >Carrito</button>
            <button class="comprar" >Comprar</button>
           </div>
         </div>
    `
    contenedorRopas.innerHTML += htmlPantalon ;
    
  }


  function contenedorRemeras (nombre,img,precioAhora,precioAnterior) {
    const valor5 = Math.floor(Math.random() * 5)+1;
    let valEstrella;

    if(valor5 == 1){
        valEstrella = valoracionEstrella1
    }else if(valor5 == 2){
        valEstrella = valoracionEstrella2
    }else if(valor5 == 3){
        valEstrella = valoracionEstrella3
    }else if(valor5 == 4){
        valEstrella =valoracionEstrella4
    }else{
        valEstrella = valoracionEstrella5
    }

    let htmlRemera = `
     <div class="seccion-ropas " >
            <div class="nombre-valoracion">
                <h3 class="nombre" >${nombre}</h3>
                <span class="estrella">
                  ${valEstrella}
                </span>  
            </div>
            <div class="img-ropa">
                <img src="/img/remeras/remeras-${img}.png" alt="pantalon">
            </div>
            <p > Precio: <span class="precio">$${precioAhora}</span> 
            <span class="precio-viejo" > $${precioAnterior}  </span> 
             <span class="precio-off">-${porHoyDescuento}%</span>
            </p>
           <div>
            <button class="carrito" >Carrito</button>
            <button class="comprar" >Comprar</button>
           </div>
         </div>
    `
    contenedorRopas.innerHTML += htmlRemera ;
    
  }

  function contenedorZapatillas (nombre,img,precioAhora,precioAnterior) {
    const valor5 = Math.floor(Math.random() * 5)+1;
    let valEstrella;

    if(valor5 == 1){
        valEstrella = valoracionEstrella1
    }else if(valor5 == 2){
        valEstrella = valoracionEstrella2
    }else if(valor5 == 3){
        valEstrella = valoracionEstrella3
    }else if(valor5 == 4){
        valEstrella =valoracionEstrella4
    }else{
        valEstrella = valoracionEstrella5
    }

    let htmlZapatillas = `
     <div class="seccion-ropas " >
            <div class="nombre-valoracion">
                <h3 class="nombre" >${nombre}</h3>
                <span class="estrella">
                  ${valEstrella}
                </span>  
              
            </div>
            <div class="img-ropa">
                <img src="/img/zapatillas/zapatilla-${img}.png" alt="zapatilla">
            </div>
            <p > Precio: <span class="precio">$${precioAhora}</span> 
            <span class="precio-viejo" > $${precioAnterior}  </span> 
             <span class="precio-off">-${porHoyDescuento}%</span>
            </p>
           <div>
            <button class="carrito" >Carrito</button>
            <button class="comprar" >Comprar</button>
           </div>
         </div>
    `
    contenedorRopas.innerHTML += htmlZapatillas ;
    
  }


  gorras.addEventListener('click', () => { 
    contenedorInicio.innerHTML = '';
    contenedorInicio.style.display = 'none';
    imgBody.style.display = 'none';

    if(!zapatillasTrue && !pantalonesTrue && !remerasTrue ||
      zapatillasTrue && !pantalonesTrue && !remerasTrue ||
      !zapatillasTrue&&  pantalonesTrue && !remerasTrue ||
      !zapatillasTrue && !pantalonesTrue && remerasTrue ||
      zapatillasTrue && pantalonesTrue && !remerasTrue ||
      !zapatillasTrue && pantalonesTrue && remerasTrue ||
      zapatillasTrue && !pantalonesTrue && remerasTrue 
  ){
       contenedorRopas.innerHTML = '';
       zapatillasTrue = true
       pantalonesTrue = true
       remerasTrue = true
  }
    sidebar.classList.remove('open');
   if(gorrasTrue){
    for(let i = 1; i < totalGorras; i++){
        let precioGorraAnterior = Math.floor(Math.random() * 10000);
        let precioGorraAhora = (precioGorraAnterior* porHoyDescuento)/100;
        contenedorGorras('Gorra ',i,precioGorraAhora,precioGorraAnterior)
      }
   }
   gorrasTrue = false
  })


  Pantalones.addEventListener('click', () => {
    contenedorInicio.innerHTML = '';
    contenedorInicio.style.display = 'none';
    imgBody.style.display = 'none';

    if(!zapatillasTrue && !gorrasTrue && !remerasTrue ||
      zapatillasTrue && !gorrasTrue && !remerasTrue ||
      !zapatillasTrue&&  gorrasTrue && !remerasTrue ||
      !zapatillasTrue && !gorrasTrue && remerasTrue ||
       zapatillasTrue&&  gorrasTrue && !remerasTrue ||
      !zapatillasTrue && gorrasTrue && remerasTrue ||
      zapatillasTrue && !gorrasTrue && remerasTrue

  ){
       contenedorRopas.innerHTML = '';
       zapatillasTrue = true
       gorrasTrue = true
       remerasTrue = true
  }
     sidebar.classList.remove('open');
   if(pantalonesTrue){
    for(let i = 1; i < totalPantalones; i++){
        let precioPantalonAnterior = Math.floor(Math.random() * 10000);
        let precioPantalonAhora = (precioPantalonAnterior* porHoyDescuento)/100;
        contenedorPantalones('pantalon ',i,precioPantalonAhora,precioPantalonAnterior)
      }
    }
  pantalonesTrue = false
  })


  Remeras.addEventListener('click', () => {
    contenedorInicio.innerHTML = '';
    contenedorInicio.style.display = 'none';
    imgBody.style.display = 'none';
    
    if(!pantalonesTrue && !gorrasTrue && !zapatillasTrue ||
      pantalonesTrue && !gorrasTrue && !zapatillasTrue ||
      !pantalonesTrue&&  gorrasTrue && !zapatillasTrue ||
      !pantalonesTrue && !gorrasTrue && zapatillasTrue ||
      !pantalonesTrue && gorrasTrue && zapatillasTrue ||
       pantalonesTrue && !gorrasTrue && zapatillasTrue ||
       pantalonesTrue && gorrasTrue && !zapatillasTrue
  ){
       contenedorRopas.innerHTML = '';
       pantalonesTrue = true
       gorrasTrue = true
       zapatillasTrue = true
  }
    sidebar.classList.remove('open');
   if(remerasTrue){
    for(let i = 1; i < totalRemeras; i++){
        let precioRemeraAnterior = Math.floor(Math.random() * 7500);
        let precioRemeraAhora = (precioRemeraAnterior* porHoyDescuento)/100;
        contenedorRemeras('Gorra ',i,precioRemeraAhora,precioRemeraAnterior )
      }
   }
   remerasTrue = false
  })

  Zapatillas.addEventListener('click', () => {
    contenedorInicio.innerHTML = '';
    contenedorInicio.style.display = 'none';
    imgBody.style.display = 'none';
    
    if(!pantalonesTrue && !gorrasTrue && !remerasTrue ||
        pantalonesTrue && !gorrasTrue && !remerasTrue ||
        !pantalonesTrue&&  gorrasTrue && !remerasTrue ||
        !pantalonesTrue && gorrasTrue && remerasTrue ||
        pantalonesTrue && !gorrasTrue && remerasTrue ||
        pantalonesTrue && gorrasTrue && !remerasTrue ||
        !pantalonesTrue && !gorrasTrue && remerasTrue
    ){
         contenedorRopas.innerHTML = '';
         pantalonesTrue = true
         gorrasTrue = true
         remerasTrue = true
    }
    sidebar.classList.remove('open');
   if(zapatillasTrue){
    for(let i = 1; i < totalZapatillas; i++){
        let precioZapatillasAnterior = Math.floor(Math.random() * 50500);
        let precioZapatillasAhora = (precioZapatillasAnterior* porHoyDescuento)/100;
        contenedorZapatillas('zapatilla ',i,precioZapatillasAhora,precioZapatillasAnterior )
      }
   }
   zapatillasTrue = false
  })

 









