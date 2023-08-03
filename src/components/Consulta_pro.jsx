import { useEffect, useState } from "react";

function Consulta_pro() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/dwi-9a/index.php/Api/Productos');
                if (!response.ok) {
                    throw new Error('La solicitud no pudo ser completada.');
                }
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    //FUNCION  A AGREGAR A CONSULTA PRODUCTO
     //ELIMINAR
     const handleDelete = async (IdProducto) => {
        try {
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Productos/${IdProducto}`, {
                method: 'DELETE', redirect: 'follow'
            });
            console.log(IdProducto);
            if (!response.ok) {
                throw new Error('La solicitud de eliminación no pudo ser completada.');
            }

            setData((prevData) => prevData.filter((producto) => producto.IdProducto !== IdProducto));
        } catch (error) {
            console.error(error.message);
        }
    };
    // TERMINA ELIMINADO
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                </div>
                <div className="content">
                    <div className="container">

                        <div className='row'>
                            <div className='col-xs-12  col-lg-12'>
                                <div className='card card-primary'>
                                    <div className='card-header'>
                                        <h4 className='card-title'>
                                            Consulta de Entradas/Salidas
                                        </h4>
                                    </div>
                                    <div >
                                        <table className='table text-center'>
                                            <thead>
                                                <tr>
                                                    <th>IdProducto</th>
                                                    <th>IdCategoria</th>
                                                    <th>Marca</th>
                                                    <th>Nombre</th>
                                                    <th>Foto</th>
                                                    <th>Piezas</th>
                                                    <th>Color</th>
                                                    <th>Precio</th>
                                                    <th>Fecha_registro</th>
                                                    <th>Status</th>
                                                    <th className="col-lg-5">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((producto) => (
                                                    <tr key={producto.IdProducto}>
                                                        <td>{producto.IdProducto}</td>
                                                        <td>{producto.IdCategoria}</td>
                                                        <td>{producto.Marca}</td>
                                                        <td>{producto.Nombre}</td>
                                                        <td>{producto.Foto}</td>
                                                        <td>{producto.Piezas}</td>
                                                        <td>{producto.Color}</td>
                                                        <td>{producto.Precio}</td>
                                                        <td>{producto.Fecha_registro}</td>
                                                        <td>{producto.Status}</td>
                                                        <td >
                                                            <button className='btn btn-sm bg-blue col-lg-4 offset-md-1'>Editar</button>
                                                            <button className='btn btn-sm bg-danger col-lg-4 offset-md-1 ' onClick={() => handleDelete(producto.IdProducto)}>Borrar</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

       </>
    );
};

export default Consulta_pro;