import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function  Arrrowaction(totalItems, itemsPerPage) {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index < totalItems - itemsPerPage) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return { index, handleNext, handlePrev };
}

export default Arrrowaction;
