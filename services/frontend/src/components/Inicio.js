
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgFondo from '../img/foto-fondo2.jpg';


function Inicio() {
    return (
        <div>
            {/* Contenedor para la imagen de fondo */}
            <div
                style={{
                    backgroundImage: `url(${ImgFondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    height: '50vh', /* Ajusta la altura de acuerdo a tus necesidades */
                    textAlign: 'center',
                }}
            >
                {/* Ajusta el estilo del texto si es necesario */}
                <h2 style={{ color: 'white' }}>PAN CON QUESO</h2>
            </div>
    
            {/* Contenedor separado para el contenido */}
            <section
                style={{
                    padding: '50px',
                    textAlign: 'center',
                    color: 'black', /* Cambia el color si es necesario */
                }}
            >
                {/* Aquí puedes agregar cualquier contenido adicional que desees */}
                <h2>PAN</h2>
                <h2>con</h2>
                <h2>QUESO</h2>
            </section>
        </div>
    );
    
}
export default Inicio;