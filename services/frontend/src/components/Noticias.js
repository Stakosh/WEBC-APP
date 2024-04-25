// Import necessary React components
import React from 'react';
import gatito1 from '../img/gatito.png';
import gatito2 from '../img/gatito_definitivo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the NewsGrid function
function Noticias() {
    return (
        // Define the container with a class name for styling
        <div className="news-grid-container">
            {/* Define the first image container */}
            <div className="news-grid-item">
                {/* Display the first image */}
                <img src={gatito1}  alt="A GATITO" />
            </div>
            <div className="news-grid-item">
                {/* Display the first image */}
                <img src={gatito2}  alt="A GATITO" />
            </div>
        </div>
    );
}

// Export the NewsGrid component
export default Noticias;
