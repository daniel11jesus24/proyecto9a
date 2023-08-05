import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 


function Consulta_ent() {
    const [data, setData] = useState([]);
    const [datap, setDatap] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //operaciones para consultar todo
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
    //operacion para eliminar un campo
    const handleDelete = async (idEntrada) => {
        try {
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Entrada_salida/${idEntrada}`, {
                method: 'DELETE', redirect: 'follow'
            });
            console.log(idEntrada);
            if (!response.ok) {
                throw new Error('La solicitud de eliminación no pudo ser completada.');
            }

            // Eliminar el registro eliminado del estado
            setData((prevData) => prevData.filter((entradas) => entradas.IdEntrada !== idEntrada));
        } catch (error) {
            console.error(error.message);
        }
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <>
            <div className="content-wrapper ">
                <div className="content-header">
                </div>
                <div className="content ">
                    <div className="container ">
                        <div className='row '>
                            <div className=' col-xs-12 col-sm-12 col-md-11 col-lg-11'>
                                <div className='card card-primary'>
                                    <div className='card-header'>
                                        <h4 className='card-title'>
                                            Consulta de Entradas/Salidas

                                        </h4>
                                    </div>
                                    <div >

                                        <table className="table text-center" >
                                            <thead>
                                                <tr>
                                                    <th >ID Entrada</th>
                                                    <th >Fecha de Entrada</th>
                                                    <th >Fecha de Salida</th>
                                                    <th >ID Producto</th> 
                                                    <th className="col-5">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((entradas) => (
                                                    <tr key={entradas.IdEntrada}>
                                                        <td>{entradas.IdEntrada}</td>
                                                        <td >{entradas.Fecha_entrada}</td>
                                                        <td >{entradas.Fecha_salida}</td>
                                                        <td >{entradas.IdProducto}</td>
                                                         <td >
                                                            <Link to='/edient'>
                                                                <button className='btn btn-sm bg-blue col-lg-4 offset-md-1'>Editar</button>
                                                            </Link>
                                                            <button className='btn btn-sm bg-danger col-lg-5 offset-md-1' onClick={() => handleDelete(entradas.IdEntrada)}>Borrar</button>
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