import { useState } from "react";

const Editar_cat = () => {
    const [IdCategoria, setIdCategoria] = useState();
    const [Tipo, setTipo] = useState();
    const [Fecha_Alta, setFechaAlta] = useState();
    const [message, setMessage] = useState('');


    const handleAdd = async()=>{
        try {
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Categoria/${searchId}`);
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
            await fetch(`http://localhost/dwi-9a/index.php/Api/Categoria/${searchId}`, {
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
        <button onClick={handleSearch}>Id de la Categoria a editar</button>
    </div>
    {message && <div>{message}</div>}

    <div>
        {data.IdCategoria && (
            <form>
                <label>
                    IdCategoria:
                    <input
                        type="num"
                        name="IdCategoria"
                        value={formData.IdCategoria || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                        Tipo:
                    <input
                        type="text"
                        name="Tipo"
                        value={formData.Tipo || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                            Fecha Alta:
                            <input
                                type="datetime-local"
                                name="Fecha_Alta"
                                value={formData.Fecha_Alta || ''}
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
export default Editar_cat;
    