import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
              <div className="container  col-xs-12 col-sm-12 col-md-8 col-lg-6">
                
                  <div className=" col-xs-12 col-sm-12 col-md-8 col-lg-6 navbar-collapse order-3 " id="navbarCollapse">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/bie" >Inicio</Link>
                        
                    </li>
                    <li className="nav-item">
                              <div className="btn-group">
                                  <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Categoria
                                  </button>
                                  <div className="dropdown-menu">
                                      <Link className="dropdown-item" to="/concat">Consulta</Link>
                                      <Link className="dropdown-item" to="/regcat">Registro</Link>
                                      <Link className="dropdown-item" to="/edicat">Editar</Link>
                                  </div>
                              </div>
                    </li>
                    <li className="nav-item">
                              <div className="btn-group">
                                  <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Producto
                                  </button>
                                  <div className="dropdown-menu">
                                      <Link className="dropdown-item" to="/conpro">Consulta</Link>
                                      <Link className="dropdown-item" to="/refpro">Registro</Link>
                                      <Link className="dropdown-item" to="/edipro">Editar</Link>
                                  </div>
                              </div>
                    </li>
                    <li className="nav-item">
                              <div className="btn-group">
                                  <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Entrada - salida
                                  </button>
                                  <div className="dropdown-menu">
                                      <Link className="dropdown-item" to="/conent">Consulta</Link>
                                      <Link className="dropdown-item" to="/regent">Registro</Link>
                                      <Link className="dropdown-item" to="/edient">Editar</Link>
                                  </div>
                              </div>
                     </li>
                     <li className="nav-item">
                              <div className="btn-group">
                                  <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Usuario
                                  </button>
                                  <div className="dropdown-menu">
                                      <Link className="dropdown-item" to="/conusu">Consulta</Link>
                                      <Link className="dropdown-item" to="/regusu">Registro</Link>
                                      <Link className="dropdown-item" to="/ediusu">Editar</Link>
                                  </div>
                              </div>
                        </li>
                </ul>
                     <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto ">

                          <li className="nav-item dropdown">
                              <Link className="nav-link" data-toggle="dropdown" to="#">
                                  <i className="far fa-bell"></i>

                              </Link>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                  <span className="dropdown-header">User: </span>

                                  <div className="dropdown-divider"></div>
                                  <Link to="/log" className="dropdown-item dropdown-footer">Cerrar sesion</Link>
                              </div>
                          </li>
                      </ul> 
            </div>

            
            </div>
        </nav>
    </>
  )
}

export default Header;