import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Aquí realizar la llamada a la API para obtener los datos de la base de datos
        // y luego procesarlos para crear el gráfico.
        // Puedes usar fetch o una librería como Axios para obtener los datos.
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/dwi-9a/index.php/Api/Productos'); // Cambia '/api/datos' por tu endpoint real.
                const data = await response.json();

                // Procesar los datos para crear el gráfico
                const idProductos = data.map((item) => item.IdProducto);
                const cantidadesPiezas = data.map((item) => item.Piezas);

                setChartData({
                    labels: idProductos,
                    datasets: [
                        {
                            label: 'Cantidad de Piezas',
                            data: cantidadesPiezas,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                    ],
                });
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {chartData ? (
                <Bar
                    data={chartData}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            ) : (
                <p>Cargando gráfico...</p>
            )}
        </div>
    );
};

export default ChartComponent;
