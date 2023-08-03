import { useState } from "react";

const Registro_pro= () => {
    const [IdCategoria, setIdCategoria] = useState();
    const [Marca, setMarca] = useState();
    const [Nombre, setNombre] = useState();
    const [Piezas, setPiezas] = useState();
    const [Precio, setPrecio] = useState();
    const [Fecha_registro, setFecha_registro] = useState();
    const [Estado, setEstado] = useState();
    const [Foto, setFoto] = useState();
    const [Color, setColor] = useState();
    const handleAdd =()=>{
        console.log(IdCategoria, Marca, Nombre, Foto, Piezas, Color, Precio, Fecha_registro, Estado)

        var formdata = new FormData();
        formdata.append("IdCategoria", IdCategoria);
        formdata.append("Marca", Marca);
        formdata.append("Nombre", Nombre);
        formdata.append("Foto", Foto);
        formdata.append("Piezas", Piezas);
        formdata.append("Color", Color);
        formdata.append("Precio", Precio);
        formdata.append("Fecha_registro", Fecha_registro);
        formdata.append("Status", Estado);

        var requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            header :{
                'Content-Type' : "application/json; charset-UTF-8"
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/dwi-9a-PDVM-master/index.php/Api/Productos/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        

    }
  return (
    <>
    <center>
        <div className="content-header">
            <div className="content">
                <div className="container">
                    <div className='col-xs-12 col-md-12 col-lg-7'>
                        <div className='card card-primary'>
                            <div className='card bg-dark text-white'>
                                <h3 className='card-text'>
                                    <i className="fas fa-user-circle mr-2"></i>
                                        Registro de entradas y salidas
                                </h3>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>IdCategoria</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='number' name=''
                                                  value={IdCategoria}
                                                  onChange={event=>setIdCategoria(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>Marca</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='number' name=''
                                                  value={Marca}
                                                  onChange={event=>setMarca(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>Nombre</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='text' name=''
                                                  value={Nombre}
                                                  onChange={event=>setNombre(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>Foto</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='file' name='' accept="image/*"
                                                  value={Foto}
                                                  onChange={event=>setFoto(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>Piezas</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='number' name=''
                                                  value={Piezas}
                                                  onChange={event=>setPiezas(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>Color</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='text' name=''
                                                  value={Color}
                                                  onChange={event=>setColor(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>Precio</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='number' name=''
                                                  value={Precio}
                                                  onChange={event=>setPrecio(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                        <h6>Fecha Registro</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                              <input type='datetime-local'
                                                name='' id=''
                                                  value={Fecha_registro}
                                                  onChange={event => setFecha_registro(event.target.value)}
                                                  className='form-control'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                              <h6>Estado</h6>
                                    </div>
                                    <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                        <input type='text' name=''
                                                  value={Estado}
                                                  onChange={event=>setEstado(event.target.value)}
                                                  className='form-control'
                                                  placeholder='Introduzca...'/>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-dark' onClick={()=>handleAdd()}>Registrar</button>
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

export default Registro_pro;