import React, { useState } from 'react';

import QuestionBox from './QuestionBox';
import SentenceBox from './SentenceBox';
import AnswerBox from './AnswerBox';
import Results from './Results';
import { getSentence, getAnswers } from './TextConverter';

import { AppContainer, PrimaryButton } from './styled';

const text = 'The <brown> fox <jumped> over the <dog>';

const Cloze = () => {
    const [showResults, setShowResults] = useState(false);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState(getAnswers(text));
    const [sentence, setSentence] = useState(getSentence(text));

    const onDrop = (ev, dropId) => {
        const text = ev.dataTransfer.getData('text/plain');
        const updatedSentence = sentence.map(w => {
            if (w.id === dropId) {
                return { ...w, placed: true, displayed: text };
            }
            return w;
        });
        setSentence(updatedSentence);
    };

    const onStart = () => {
        setQuestion('');
        setAnswers(getAnswers(question));
        setSentence(getSentence(question));
    };

    const questionChange = (e) => {
        setQuestion(e.target.value);
    };

    const toggleResults = () => {
        setShowResults(!showResults);
    };

    return (
        <AppContainer>
            <h2 className='header'>Word Game</h2>
            <QuestionBox
                onStart={onStart}
                questionChange={questionChange}
            />
            <div>
                <PrimaryButton onClick={toggleResults}>Test</PrimaryButton>
            </div>
            <SentenceBox
                marked={showResults}
                onDrop={onDrop}
                sentence={sentence}
            />
            <AnswerBox answers={answers} />
            {showResults && <Results data={sentence} />}
        </AppContainer>
    );
};

export default Cloze;
