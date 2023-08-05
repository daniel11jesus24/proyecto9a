import React from 'react';
const Content = () => {
  return (
    <>
        
                <div className="container">
                    
                    <div className='row'>
                        <div className='col-xs-12  col-lg-12'>
                            <div className='card card-primary'>
                                <div className='card-header'>
                                    <h4 className='card-title'>
                                        <i className="fas mr-2"></i>
                                        Lista de los productos con mayores o menores existencias
                                    </h4>
                                </div>
                                  <div >
                              <table id="tablaconsultausu" className='table text-center'>
                                  <tr>
                                      <th scope="col">IdProducto</th>
                                      <th scope="col">Nombre</th>
                                      <th scope="col">Existencias</th>
                                  </tr>
                                  <tr>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                  </tr>
                                  </table>
                              </div>
                          <div className='text-center'>
                              <h3>Grafica:</h3>
                          </div>
                            
                                
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-sm bg-blue col-lg-2 offset-md-1'>Volver</button>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
    </>
  )
}

export default Content;