import React from 'react';

const Header = () => {
  return (
    <>
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div className="container">
            

            <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Categorias</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Producto</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Entradas-Salidas</a>
                     </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link">Usuarios</a>
                        </li>
                </ul>
            </div>

            <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="fas fa-comments"></i>
                    <span className="badge badge-danger navbar-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                    <div className="media">
                        <div className="media-body">
                        <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                    <div className="media">
                        <div className="media-body">
                        <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                    <div className="media">
                        <div className="media-body">
                        <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                </div>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell"></i>
                    <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-users mr-2"></i> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">
                    <i className="fas fa-file mr-2"></i> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                    <i className="fas fa-th-large"></i>
                </a>
                </li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Header;