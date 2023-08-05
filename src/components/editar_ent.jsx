import React from 'react';

const Content2 = () => {
  return (
    <>
      <div className="content-wrapper">
           
            <div className="content">
                <div className="container">
                    
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card card-primary'>
                                <div className='card-header'>
                                    <h4 className='card-title'>
                                        <i className="fas fa-user-circle mr-2"></i>
                                        Editar E/S
                                    </h4>
                                </div>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label>Fecha de entrada</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" maxLength={50} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Hora de entrada</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Fecha de salida</label>
                                        <input type="txt" name="" id="" className='form-control' placeholder="Escriba aquí" step="0.1" max="10" min="7" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Hora de salida</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                    <div className='form-group'>
                                        <label>IdProducto</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                
                                  
                                    
                                   
                                    
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-orange bg-orange btn-lg float-right'>Editar</button>
                                    <button className='btn btn-secondary'>Cancelar</button>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Content2;