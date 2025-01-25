import React from 'react';
import PropTypes from 'prop-types';

import { Block, FormInput, FormRow, PrimaryButton } from './styled';

function QuestionBox({ onStart, questionChange }) {
    return (
        <Block>
            <FormRow>
                <FormInput data-testid='question-input' onChange={questionChange} />
                <PrimaryButton onClick={onStart}>Start</PrimaryButton>
            </FormRow>
        </Block>
    );
}

QuestionBox.propTypes = {
    onStart: PropTypes.func.isRequired,
    questionChange: PropTypes.func.isRequired,
};

export default QuestionBox;
