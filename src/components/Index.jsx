import React from 'react';

const Login = () => {
  return (
    <>
    <center><br/>
    <h1 class="display-4">BIENVENIDO</h1>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-51" src="src/components/img/1.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-51" src="src/components/img/2.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-51" src="src/components/img/3.png" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </center>
    </>
  )
}

export default Login;