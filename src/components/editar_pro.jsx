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

    /// CODIGO PARA CARGAR IMAGEN
    const handleFileInputChange = (event) => {
        setProductData({
          ...productData,
          Foto: event.target.files[0],
        });
      };
      // TERMINA CODIGO
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
                        <label>
                            IdCategoria:
                            <input
                                type="num" min="0"
                                name="IdCategoria"
                                value={formData.IdCategoria || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Marca:
                            <input
                                type="text"
                                name="Marca"
                                value={formData.Marca || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Nombre:
                            <input
                                type="text"
                                name="Nombre"
                                value={formData.Nombre || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Foto:
                            <input
                                type='file'
                                accept="image/*"
                                name="Foto"
                                value={formData.Foto || ''}
                                onChange={handleFileInputChange}
                            />
                        </label>

                        <label>
                            Piezas:
                            <input
                                type="text"
                                name="Piezas"
                                value={formData.Piezas || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Color:
                            <input
                                type="text"
                                name="Color"
                                value={formData.Color || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Precio:
                            <input
                                type="num"
                                name="Precio"
                                value={formData.Precio || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Fecha_registro:
                            <input
                                type="datetime-local"
                                name="Fecha_registro"
                                value={formData.Fecha_registro || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Status:
                            <input
                                type="num"
                                name="Status"
                                value={formData.Status || ''}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button onClick={handleSubmit}>Guardar Cambios</button>
                    </form>
                )}
            </div>
        </div>
    );
};
export default editar_pro;