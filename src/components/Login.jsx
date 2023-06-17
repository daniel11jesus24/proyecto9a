import React from 'react';

const Login = () => {
  return (
    <>
    <center>
        <div className="content-header">
            <div className="content">
                <div className="container">
                    <div className='col-xs-12 col-md-12 col-lg-5'>
                        <div className='card card-primary'>
                            <div className='card bg-dark text-white'>
                                <h4 className='card-text'>
                                    <i className="fas fa-user-circle mr-2"></i>
                                        Agregar alumno
                                </h4>
                            </div>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <label>User</label>
                                    <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" maxLength={50} />
                                </div>
                                        
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type="password" name="" id="" className='form-control' placeholder="micorreo@net.com" />
                                </div>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-dark'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </center>
    </>
  )
}

export default Login;