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
                                        <i className="fas mr-2"></i>
                                        Editar producto
                                    </h4>
                                </div>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label>Nombre</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" maxLength={50} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Marca</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Categoria</label>
                                        <input type="number" name="" id="" className='form-control' placeholder="0" step="0.1" max="10" min="7" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Foto</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Piezas</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Color</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Precio</label>
                                        <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                    </div>
                                    <div className='form-group'>
                                        <label>Fecha</label>
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