import { useState } from "react";

const Registro_cat = () => {
    const [IdCategoria, setIdCategoria] = useState();
    const [Tipo, setTipo] = useState();
    const [Fecha_Alta, setFechaAlta] = useState();
    const [message, setMessage] = useState('');


    const handleAdd =()=>{
        console.log(IdCategoria, Tipo, Fecha_Alta)

        var formdata = new FormData();
        formdata.append("IdCategoria", IdCategoria);
        formdata.append("Tipo", Tipo);
        formdata.append("Fecha_Alta", Fecha_Alta);

        var requestOptions = {
            mode :'no-cors',
            method: 'POST',
            header:{
                'Content-Type': 'application/json; charset:UTF-8'
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/dwi-9a/index.php/Api/Categoria/", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                setTimeout(() => {
                    setMessage('Registro exitoso');
                }, 1000);})
            .catch(error => {
                console.log('error', error);
                setTimeout(() => {
                    setMessage('Error');
                }, 1000); });
    }
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

                                <div className='row '>
                                          <div className='col-xs-6 col-md-8 col-lg-4'><br />
                                              <h6>ID Categoria</h6>
                                          </div>
                                          <div className='col-xs-6 col-md-8 col-lg-8'><br />
                                              <input type='number' name='' id=''
                                                  value={IdCategoria}
                                                  onChange={event => setIdCategoria(event.target.value)}
                                                  min="0" className='form-control' placeholder='Introduzca...' />
                                          </div>
                                </div>
                            </div>
                            <div className='card-body'>

                                <div className='row '>
                                          <div className='col-xs-6 col-md-8 col-lg-4'><br />
                                              <h6>Tipo</h6>
                                          </div>
                                          <div className='col-xs-6 col-md-8 col-lg-8'><br />
                                              <input type='text' name='' id=''
                                                  value={Tipo}
                                                  onChange={event => setTipo(event.target.value)}
                                                  min="0" className='form-control' placeholder='Introduzca...' />
                                          </div>
                                </div>
                            </div>
                                <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                <h6>Fecha de Alta</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                    <input type='datetime-local'
                                                    name='' id=''
                                                    value={Fecha_Alta}
                                                    onChange={event => setFecha_Alta(event.target.value)}
                                                    className='form-control'/>
                                            </div>
                                </div>
                            </div>
                            <div className='row  justify-content-center'>
                                <button className='btn btn-dark ' onClick={()=>handleAdd()}>Registrar</button>
                                     
                            </div>
                                  {message && <div className="row  justify-content-center">{message}</div>}
                            </div>
                        </div>
                    </div>
                </div>    
            </center>
    </>
  )
}

export default Registro_cat;