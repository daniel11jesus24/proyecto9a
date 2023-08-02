import { useEffect, useState } from "react";

function Consulta_ent() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/dwi-9a/index.php/Api/Entrada_salida');
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
                                            <i className="fas mr-2"></i>
                                            Consulta de Entradas/Salidas
                                        </h4>
                                    </div>
                                    <div >
                                        <table className='table text-center'>
                                            <thead>
                                                <tr>
                                                    <th >ID Entrada</th>
                                                    <th >Fecha de Entrada</th>
                                                    <th >Fecha de Salida</th>
                                                    <th >ID Producto</th>
                                                    <th >Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item) => (
                                                    <tr key={item.IdEntrada}>
                                                        <td>{item.IdEntrada}</td>
                                                        <td >{item.Fecha_entrada}</td>
                                                        <td >{item.Fecha_salida}</td>
                                                        <td >{item.IdProducto}</td>
                                                        <td >
                                                            <button className='btn btn-sm bg-blue col-lg-4 offset-md-1'>Editar</button>
                                                            <button className='btn btn-sm bg-danger col-lg-4 offset-md-1 '>Borrar</button>
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

export default Consulta_ent;