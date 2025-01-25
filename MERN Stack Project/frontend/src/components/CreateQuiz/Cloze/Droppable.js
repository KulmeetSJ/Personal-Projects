import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { WordBox } from './styled';

function Droppable({ bgcolor, children, groupName, ndx, onDrop }) {
    const [droppableBgColor, setDroppableBgColor] = useState('white');

    const handleDrop = (e) => {
        onDrop(e, groupName);
        setDroppableBgColor('white');
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDroppableBgColor('yellow');
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDroppableBgColor('white');
    };

    return (
        <WordBox
            bgcolor={bgcolor ? bgcolor : droppableBgColor}
            data-testid={`droppable${ndx}`}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {children}
        </WordBox>
    );
}

Droppable.propTypes = {
    bgcolor: PropTypes.string,
    children: PropTypes.string.isRequired,
    groupName: PropTypes.number.isRequired,
    ndx: PropTypes.number.isRequired,
    onDrop: PropTypes.func.isRequired,
};

export default Droppable;
