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
                                            Editar Categoria
                                        </h4>
                                    </div>
                                    <div className='card-body'>
                                        <div className='form-group'>
                                            <label>Nombre</label>
                                            <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" maxLength={50} />
                                        </div>
                                        <div className='form-group'>
                                            <label>Status</label>
                                            <input type="text" name="" id="" className='form-control' placeholder="Escriba aquí" />
                                        </div>
                                        <div className='form-group'>
                                            <label>Personal</label>
                                            <input type="number" name="" id="" className='form-control' placeholder="0" step="0.1" max="10" min="7" />
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