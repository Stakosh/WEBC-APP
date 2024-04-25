// Import necessary React components
import React from 'react';

// Import the images
//import gatito from '../img/gatito.png';

// Define the NewsGrid function
function NewsGrid() {
    return (
        // Define the container with a class name for styling
        <div className="news-grid-container">
            {/* Define the first image container */}
            <div className="news-grid-item">
                {/* Display the first image */}
                <img src='../img/gatito.png' alt="A GATITO" />
            </div>
        </div>
    );
}

// Export the NewsGrid component
export default NewsGrid;
