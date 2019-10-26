import React from 'react'


const Carousel=()=>{

  return (

   <div className="m-2 mt-3">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Antigua_catedral_de_Managua.jpg" class="d-block w-100" alt="catedral"/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.britannica.com/69/193869-050-FF726D0C/Managua-Nicaragua.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="http://www.lavozdelsandinismo.com/wp-estaticos/2018/11/DtLDMEOUcAAEIYa.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Anterior</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Siguiente</span>
  </a>
</div>


   </div>
  

  )


}

export default Carousel;