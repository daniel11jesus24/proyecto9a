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
                                        Editar la informacion de un usuario
                                    </h4>
                                </div>
                                  <div >
                                    <table id="tablaconsultausu" className='table text-center'>
                                          <tr>
                                              <th scope="col">IdUsuario</th>
                                              <th scope="col">Nombre</th>
                                              <th scope="col">Apellido paterno</th>
                                              <th scope="col">Apellido materno</th>
                                              <th scope="col">Puesto/rol</th>
                                              <th scope="col">Foto</th>
                                              <th scope="col">Usuario</th>
                                              <th scope="col">Password</th>
                                              <th scope="col">Fecha de registro</th>
                                              <th scope="col">Email</th>
                                              <th scope="col">Acciones</th>
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
                                            <th></th>
                                            <th className='col'>
                                          <button className='btn btn-sm bg-blue col-lg-4 offset-md-1'>Guardar</button>
                                          <button className='btn btn-sm bg-danger col-lg-4 offset-md-1'>Cancelar</button>
                                                </th>
                                              
                                          </tr>
                                      </table>
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