import React from 'react';
const Content = () => {
  return (
    <>
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Consulta de Productos </h1>
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    
                    <div className='row'>
                        <div className='col-xs-12  col-lg-12'>
                            <div className='card card-primary'>
                                <div className='card-header'>
                                    <h4 className='card-title'>
                                        <i className="fas mr-2"></i>
                                        Tabla de Productos
                                    </h4>
                                </div>
                                  <div > 
                                      <table id="tablaconsultausu" className='table text-center'>
                                          <tr>
                                              <th scope="col">Idproducto</th>
                                              <th scope="col">Nombre</th>
                                              <th scope="col">Marca</th>
                                              <th scope="col">Categoria</th>
                                              <th scope="col">Foto</th>
                                              <th scope="col">Piezas</th>
                                              <th scope="col">Color</th>
                                              <th scope="col">Precio</th>
                                              <th scope="col">Fecha de registro</th>
                                              <th scope='col'>Acciones</th>
                                          </tr>
                                          <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th> </th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th className='col'>
                                                  <button className='btn btn-sm bg-blue col-lg-4 offset-md-1'>Editar</button>
                                                  <button className='btn btn-sm bg-danger col-lg-4 offset-md-1'>Borrar</button>
                                                </th>
                                              
                                          </tr>
                                          

                                      </table>
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

export default Content;