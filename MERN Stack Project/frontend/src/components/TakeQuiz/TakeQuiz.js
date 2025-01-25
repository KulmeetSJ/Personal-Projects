import React, { useState, useEffect } from 'react';
import './TakeQuiz.css';
import $ from 'jquery';
import ProgressBar from '../ProgressBar/ProgressBar';
import axios from 'axios';

function TakeQuiz(props) {
    const [quiz, setQuiz] = useState({});
    const [authorized, setAuthorized] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        $('#modal-wrapper-quiz').hide();
        if (props.location.state !== undefined) {
            setAuthorized(true);
            setQuiz(props.location.state.quiz);
            setAnswers(Array(props.location.state.quiz.questions.length).fill(0));
        }
    }, [props.location.state]);

    const prevQuestion = () => {
        let newIdx = activeQuestionIdx - 1;
        if (newIdx < 0) return;
        setActiveQuestionIdx(newIdx);
    };

    const nextQuestion = () => {
        let newIdx = activeQuestionIdx + 1;
        if (newIdx === quiz.questions.length) return;
        setActiveQuestionIdx(newIdx);
    };

    const getPercentage = ans => {
        let total = 0;
        ans.forEach(answer => {
            if (answer !== 0) {
                total += 1 / answers.length;
            }
        });
        setPercentage(total);
    };

    const selectAnswer = (ans, idx) => {
        let questions = { ...quiz };
        questions.questions[activeQuestionIdx].answers.forEach(answer => {
            answer.selected = false;
        });
        questions.questions[activeQuestionIdx].answers[idx].selected = true;
        let updatedAnswers = [...answers];
        if (ans.name === quiz.questions[activeQuestionIdx].correctAnswer) {
            updatedAnswers[activeQuestionIdx] = true;
        } else {
            updatedAnswers[activeQuestionIdx] = false;
        }
        setQuiz(questions);
        setAnswers(updatedAnswers);
        getPercentage(updatedAnswers);
    };

    const showModal = () => {
        $('#modal-wrapper-quiz').fadeIn(300);
    };

    const hideModal = () => {
        $('#modal-wrapper-quiz').fadeOut(300);
    };

    const finishQuiz = async () => {
        try {
            const res = await axios.post("/api/quizzes/save-results", {
                currentUser: localStorage.getItem('_ID'),
                answers: answers,
                quizId: quiz._id
            });
            if (res.data) {
                props.history.push('/view-results?id=' + res.data.scoreId);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div id="modal-wrapper-quiz" className="modal-wrapper-quiz">
                <div className="content">
                    <div className="header">Are you sure you wish to submit your answers</div>
                    <div className="buttons-wrapper">
                        <button onClick={hideModal}>Cancel</button>
                        <button onClick={finishQuiz}>Yes</button>
                    </div>
                </div>
            </div>
            <div className="take-quiz-wrapper">
                {authorized ? (
                    <div className="content">
                        <div className="header">
                            <div className="left">
                                {quiz.quizName}
                            </div>
                            <ProgressBar
                                className="center"
                                progress={Number((percentage * 100).toFixed(0))}
                                size={160}
                                strokeWidth={15}
                                circleOneStroke='#dadfea'
                                circleTwoStroke={'#00aaf1'}
                            />
                        </div>

                        <div className="body">
                            <div className="left">
                                <div className="question-name">{quiz.questions[activeQuestionIdx].questionName}</div>
                                <div className="question-bubble-wrapper">
                                    {quiz.questions.map((_, idx) => (
                                        <span onClick={() => setActiveQuestionIdx(idx)} key={idx} className={activeQuestionIdx === idx ? 'question-bubble selected-bubble' : answers[idx] === 0 ? "question-bubble" : 'question-bubble bubble-correct'}>
                                            {idx + 1}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="right">
                                <div className="answers-wrapper">
                                    {quiz.questions[activeQuestionIdx].answers.map((ans, idx) => (
                                        <div key={idx} onClick={() => selectAnswer(ans, idx)} className={ans.selected === true ? 'selected' : 'answer'}>
                                            {ans.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="buttons-wrapper">
                                <button onClick={prevQuestion}>Previous</button>
                                {activeQuestionIdx + 1 < quiz.questions.length ? <button onClick={nextQuestion}>Next</button> : <button onClick={showModal}>Submit Quiz</button>}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Not authorized</div>
                )}
            </div>
        </>
    );
}

export default TakeQuiz;
