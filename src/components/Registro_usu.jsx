import React from 'react';

const Registro_usu = () => {
  return (
    <>
    <center>
        <div className="content-header">
            <div className="content">
                <div className="container">
                    <div className='col-xs-12 col-md-12 col-lg-7'>
                        <div className='card card-primary'>
                            <div className='card bg-dark text-white'>
                                <h4 className='card-text'>
                                    <i className="fas fa-user-circle mr-2"></i>
                                        Registro de Usuarios
                                </h4>
                            </div>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <lable>Codigo del Produto</lable>
                                    <input type="number" name="" id="" className='form-control' placeholder="Introduzca.." />
                                </div>
                                <p>Nombre completo</p>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <lable>Nombre</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca..'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <lable>Apellido Mat</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <lable>Apellido Paterno</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <br/>
                                <div className='form-group'>
                                    <lable>Puesto</lable>
                                    <input type="text" name="" id="" className='form-control' placeholder="Introduzca.." />
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-2'>
                                        <br/>
                                        <lable>Fotografia</lable>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <br/>
                                        <button type="button">Subir imagen</button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Usuario</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca..'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Contraseña</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                        <lable>Fecha de registro</lable>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='date' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-dark'>Registrar</button>
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

export default Registro_usu;