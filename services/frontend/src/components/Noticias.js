// Import necessary React components
import React from 'react';
import gatito1 from '../img/gatito.png';
import gatito2 from '../img/gatito_definitivo.jpg';
import gatito3 from '../img/gato3.jpg';
import gatito4 from '../img/gato4.jpg';
import gatito5 from '../img/gato5.webp';
import gatito6 from '../img/gato6.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



// Define the Noticias function
function Noticias() {
    return (
        // Define the container with a class name for styling
        <div className="news-grid-container">
            {/* Define the title */}
            <h2>¡GATOS! MUUUCHOS GATOS!</h2>
            
            {/* Define the grid of images */}
            <div className="news-grid">
                {/* Define the first image container */}
                <div className="news-grid-item">
                    {/* Display the first image */}
                    <img src={gatito1} alt="Gatito 1" className="news-grid-image" />
                </div>

                {/* Define the second image container */}
                <div className="news-grid-item">
                    {/* Display the second image */}
                    <img src={gatito2} alt="Gatito 2" className="news-grid-image" />
                </div>

                {/* Add more image containers as needed */}
                <div className="news-grid-item">
                    {/* Display the third image */}
                    <img src={gatito3} alt="Gatito 3" className="news-grid-image" />
                </div>

                <div className="news-grid-item">
                    {/* Display the fourth image */}
                    <img src={gatito4} alt="Gatito 4" className="news-grid-image" />
                </div>

                {/* Add more cat images as desired */}
                <div className="news-grid-item">
                    {/* Display the fifth image */}
                    <img src={gatito5} alt="Gatito 5" className="news-grid-image" />
                </div>

                <div className="news-grid-item">
                    {/* Display the sixth image */}
                    <img src={gatito6} alt="Gatito 6" className="news-grid-image" />
                </div>

                {/* Add more images if you have them */}
            </div>
        </div>
    );
}

export default Noticias;
