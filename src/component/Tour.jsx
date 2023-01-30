import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article>
            <img/>
            <footer>
                <div>
                    <h4></h4>
                    <h4></h4>
                </div>
                <p>
                    <button></button>
                </p>
                <button></button>
            </footer>
        </article>
    );
};

export default Tour;
