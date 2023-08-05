

const Login = () => {
  return (
    <>
          <div className="container text-center">
              <h1 className="display-4">BIENVENIDO</h1>
              <div className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img className="d-block w-51" src="src/components/img/1.jpg" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                          <img className="d-block w-51" src="src/components/img/2.jpg" alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                          <img className="d-block w-51" src="src/components/img/3.png" alt="Third slide" />
                      </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                  </a>
              </div>
    </div>
    </>
  )
}

export default Login;