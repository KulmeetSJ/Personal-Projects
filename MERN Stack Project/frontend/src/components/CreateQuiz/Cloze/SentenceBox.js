import React from 'react';
import PropTypes from 'prop-types';

import Droppable from './Droppable';

import { Block, WordBox, WordWrapper } from './styled';

function SentenceBox({ marked, onDrop, sentence }) {
    const handleDrop = (e, id) => {
        onDrop(e, id);
    };

    const renderWordOrDroppable = (w, i) => {
        if (w.type === 'word') {
            return (<WordBox data-testid={'word'} key={i}>{w.text}</WordBox>);
        }
        let bgcolor;
        if (marked) {
            bgcolor = w.text === w.displayed ? 'lightgreen' : '#F77';
        }
        return (
            <Droppable
                bgcolor={bgcolor}
                groupName={w.id}
                key={i}
                ndx={i}
                onDrop={handleDrop}
            >
                {w.placed ? w.displayed : ' '}
            </Droppable>
        );
    };

    return (
        <Block>
            Fill in the blanks with the words below
            <WordWrapper>
                {sentence.map((w, i) => renderWordOrDroppable(w, i))}
            </WordWrapper>
        </Block>
    );
}

SentenceBox.propTypes = {
    marked: PropTypes.bool.isRequired,
    onDrop: PropTypes.func.isRequired,
    sentence: PropTypes.array.isRequired,
};

export default SentenceBox;
