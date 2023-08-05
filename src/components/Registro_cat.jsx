import React from 'react';

const Reistro_cat = () => {
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
                                        Registro Categorias
                                </h4>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Codigo Categoria</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Codigo'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Tipo</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca...' step={0.5} max={10} min={7}/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Fecha</label>
                                    <input type="date" name="" id="" className='form-control' placeholder="micorreo@net.com" />
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

export default Reistro_cat;