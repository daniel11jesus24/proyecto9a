import React from 'react';

const Registro_ent = () => {
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
                                        Registro de entradas y salidas
                                </h4>
                            </div>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <lable>Codigo</lable>
                                    <input type="number" name="" id="" className='form-control' placeholder="Introduzca.." />
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                        <lable>Fecha de Entrada</lable>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='date' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                        <lable>Fecha de Salida</lable>
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

export default Registro_ent;