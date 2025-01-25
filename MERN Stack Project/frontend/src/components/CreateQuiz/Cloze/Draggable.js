import React from 'react';
import PropTypes from 'prop-types';

import { WordBox } from './styled';

function Draggable({ bgcolor, name, onDragStart }) {
    const handleDragStart = (e) => {
        onDragStart(e, name);
    };

    return (
        <WordBox
            bgcolor={bgcolor}
            data-testid='answer'
            draggable='true'
            onDragStart={handleDragStart}
        >
            {name}
        </WordBox>
    );
}

Draggable.propTypes = {
    bgcolor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDragStart: PropTypes.func.isRequired,
};

export default Draggable;
