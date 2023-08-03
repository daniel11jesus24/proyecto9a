import React, { useState } from 'react';


const editar_pro = () => {
    const [data, setData] = useState({});
    const [formData, setFormData] = useState({});
    const [searchId, setSearchId] = useState('');
    const [message, setMessage] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Productos/${searchId}`);
            const data = await response.json();
            setData(data);
            setFormData(data);
        } catch (error) {
            setTimeout(() => {
                setMessage('Error');
            }, 1000);
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            await fetch(`http://localhost/dwi-9a/index.php/Api/Productos/${searchId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            setTimeout(() => {
                setMessage('Actualizacion exitosa');
            }, 1000);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="row  justify-content-center">
            <div>
                <input type="num" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <button onClick={handleSearch}>Id del Producto a editar</button>
            </div>
            {message && <div>{message}</div>}

            <div>
                {data.IdProducto && (
                    <form>
                        <center>
                            <div className="content-header">
                                <div className="content">
                                    <div className="container">
                                        <div className='col-xs-12 col-md-12 col-lg-7'>
                                            <div className='card card-primary'>
                                                <div className='card bg-dark text-white'>
                                                    <h3 className='card-text'>
                                                        <i className="fas fa-user-circle mr-2"></i>
                                                            Edicion de Productos
                                                    </h3>
                                                </div>
                                                <div className='card-body'>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>IdCategoria</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='number' 
                                                                    name='IdCategoria'
                                                                    value={formData.IdCategoria || ''}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'
                                                                    />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>Marca</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='number' 
                                                                    name='Marca'
                                                                    value={formData.Marca || ''}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>Nombre</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='text' name='Nombre'
                                                                    value={formData.Nombre || ''}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>Foto</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='file' name='Foto' accept="image/*"
                                                                    value={formData.Foto || ''}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>Piezas</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='number' name='Piezas'
                                                                    value={formData.Piezas}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>Color</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='text' name='Color'
                                                                    value={formData.Color}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>Precio</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='number' name=''
                                                                    value={formData.Precio}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                            <h6>Fecha Registro</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                                <input type='datetime-local'
                                                                    name='Fecha_registro'
                                                                    value={Fecha_registro}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xs-6 col-md-8 col-lg-4'><br/>
                                                                <h6>Estado</h6>
                                                        </div>
                                                        <div className='col-xs-6 col-md-8 col-lg-8'><br/>
                                                            <input type='text' name=''
                                                                    value={formData.Estado}
                                                                    onChange={handleInputChange}
                                                                    className='form-control'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card-footer'>
                                                    <button className='btn btn-dark' onClick={handleSubmit}>Guardar Cambios</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </form>
                )}
            </div>
        </div>
    );
};
export default editar_pro;