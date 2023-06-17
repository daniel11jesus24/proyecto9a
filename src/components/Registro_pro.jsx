import React from 'react';

const Reistro_pro = () => {
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
                                        Registro Produtos
                                </h4>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-3'>
                                        
                                        <lable>Codigo Producto</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Codigo'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-9'>
                                    <div class="form-group">
                                    <lable>Categoria</lable>
                                        <select class="form-control" id=" ">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <lable>Marca</lable>
                                        <select class="form-control" id=" ">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                <div className='form-group'>
                                    <lable>Nombre del Produto</lable>
                                    <input type="text" name="" id="" className='form-control' placeholder="Introduzca.." />
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Piezas</lable>
                                        <input type='number' name='' id='' className='form-control' placeholder='Introduzca..'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Color</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Material</lable>
                                        <input type='text' name='' id='' className='form-control' placeholder='Introduzca..'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <lable>Unidades</lable>
                                        <input type='number' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <br/>
                                <p>Dimensiones</p>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <lable>Ancho</lable>
                                        <input type='number' name='' id='' className='form-control' placeholder='Introduzca..'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <lable>Alto</lable>
                                        <input type='number' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <lable>Profundidad</lable>
                                        <input type='number' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <lable>Precio</lable>
                                        <input type='number' name='' id='' className='form-control' placeholder='Introduzca..'/>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <br/>
                                        <lable>Fecha de Registro</lable>
                                         </div>
                                    <div className='col-xs-6 col-md-8 col-lg-4'>
                                        <br/>
                                        <input type='date' name='' id='' className='form-control' placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <br/>
                                        <lable>Imagenes</lable>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-6'>
                                        <br/>
                                        <button type="button">Subir imagen</button>
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

export default Reistro_pro;