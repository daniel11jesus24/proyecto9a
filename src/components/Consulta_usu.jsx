import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function Consulta_usu() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/dwi-9a/index.php/Api/Usuarios');
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
                                            Consulta de Usuarios
                                        </h4>
                                    </div>
                                    <div >
                                        <table className='table text-center'>
                                            <thead>
                                                <tr>
                                                    <th >IdUsuarios</th>
                                                    <th>Nombre</th>
                                                    <th>Apellido paterno</th>
                                                    <th>Apellido materno</th>
                                                    <th>Puesto</th>
                                                    <th>Foto</th>
                                                    <th>Password</th>
                                                    <th>Fecha</th>
                                                    <th >Email</th>
                                                    <th className="col-lg-12">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item) => (
                                                    <tr key={item.IdUsuarios}>
                                                        <td>{item.IdUsuarios}</td>
                                                        <td >{item.Nombre}</td>
                                                        <td >{item.Apellido_pat}</td>
                                                        <td >{item.Apellido_mat}</td>
                                                        <td >{item.Puesto}</td>
                                                        <td >{item.Foto}</td>
                                                        <td >{item.Password}</td>
                                                        <td >{item.Fecha_registro}</td>
                                                        <td >{item.Email}</td>
                                                        <td >
                                                            <Link to='/ediusu'>
                                                                <button className='btn btn-sm bg-blue col-lg-4 offset-md-1'>Editar</button>
                                                            </Link>
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

export default Consulta_usu;
