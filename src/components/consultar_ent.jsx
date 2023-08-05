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
                                        Tabla de E/S
                                    </h4>
                                </div>
                                  <div > 
                                      <table id="tablaconsultausu" className='table text-center'>
                                          <tr>
                                              <th scope="col">Fecha de entrada</th>
                                              <th scope="col">Hora de entrada</th>
                                              <th scope="col">Fecha de salida</th>
                                              <th scope="col">Hora de salida</th>
                                              <th scope="col">IdProducto</th>
                                              <th className='col'>
                                                  <button className='btn btn-sm bg-blue'>Editar</button>
                                                  <button className='btn btn-sm bg-danger '>Borrar</button>
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