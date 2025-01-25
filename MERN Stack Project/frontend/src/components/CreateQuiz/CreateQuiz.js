import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './CreateQuiz.css';
import Dialog from '../Dialog/Dialog';
import axios from 'axios';
import Toast from '../Toast/Toast';
import DynamicForm from './DynamicForm';
import Cloze from './Cloze/Cloze';

function CreateQuiz(props) {
    // const [categories] = useState(['Math', 'Science', 'Technology', 'Sports', 'History', 'Misc']);
    // const [categoryVal, setCategoryVal] = useState('Math');
    // const [mustBeSignedIn, setMustBeSignedIn] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [name, setName] = useState('');
    const [addQuestion, setAddQuestion] = useState(false);
    const [questionName, setQuestionName] = useState('');
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [showToast, setShowToast] = useState(false);


    useEffect(() => {
        if (!localStorage.getItem('JWT_PAYLOAD')) {
            props.history.push('/');
        }
    }, [props.history]);

    // const selectPrivate = (e) => {
    //     if (e.target.checked === true) {
    //         setMustBeSignedIn(true);
    //     } else {
    //         setMustBeSignedIn(false);
    //     }
    // };

    const addAnswer = () => {
        setAnswers((prevAnswers) => [...prevAnswers, '']);
    };

    const updateAnswer = (e, i) => {
        const newArr = [...answers];
        newArr[i] = e.target.value;
        setAnswers(newArr);
    };

    const saveQuestion = () => {
        const question = {
            answers,
            correctAnswer,
            questionName,
        };
        setQuestions((prevQuestions) => [...prevQuestions, question]);
        setAddQuestion(false);
        setQuestionName('');
        setAnswers([]);
        setCorrectAnswer('');
    };

    const removeQuestion = (question) => {
        setQuestions((prevQuestions) =>
            prevQuestions.filter((ques) => ques.questionName !== question.questionName)
        );
    };

    const saveQuiz = () => {
        const quiz = {
            //mustBeSignedIn,
            name,
            questions
            //category: categoryVal,
        };
        axios
            .post('/api/quizzes/create', { quiz, createdBy: localStorage.getItem('_ID') })
            .then((res) => {
                if (res.data.success) {
                    setQuestions([]);
                    setAnswers([]);
                    // setCategoryVal('Math');
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 3000);
                }
            })
            .catch((er) => {
                console.error(er);
            });
    };

    return (
        <div className="create-quiz-wrapper">
            <Toast model={showToast} message="Quiz Created" />
            <div>
                <Sidebar />
            </div>

            <div className="main">
                <div className="header">Create Quiz</div>
                <div className="form card">
                    <input className="input border py-2 px-3 text-grey-darkest" onChange={(e) => setName(e.target.value)} value={name} placeholder="Quiz Name" />

                    <br></br>
                    <div className="categorize">
                        <DynamicForm />
                    </div>

                    <div className="cloze textboxes-group w-full bg-white rounded shadow-lg p-8 m-4">
                        <Cloze />
                    </div>

                    {questions.map((ques, idx) => (
                        <div className="question" key={idx}>
                            <div>{ques.questionName}</div>
                            <div>Correct Answer: {ques.correctAnswer}</div>
                            <div>Num of answers: {ques.answers.length}</div>
                            <span className="btn delete" onClick={() => removeQuestion(ques)}>
                                Delete
                            </span>
                        </div>
                    ))}

                    <div className="questions">
                        <div className="add-question" onClick={() => setAddQuestion(true)}>
                            Add Question
                        </div>
                    </div>

                    <span onClick={saveQuiz} className="btn save-quiz">
                        Save Quiz
                    </span>

                    <Dialog model={addQuestion}>
                        <div className="new-question-form">
                            <input
                                className="input"
                                placeholder="Question"
                                value={questionName}
                                onChange={(e) => setQuestionName(e.target.value)}
                            />
                            <div>Answers</div>
                            {answers.map((ans, idx) => (
                                <div className="answer-form" key={idx}>
                                    <input
                                        type="radio"
                                        value={ans}
                                        onChange={(e) => setCorrectAnswer(ans)}
                                        name="answer"
                                    />{' '}
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Answer"
                                        value={answers[idx]}
                                        onChange={(e) => updateAnswer(e, idx)}
                                    />
                                </div>
                            ))}
                            <div className="add-answer" onClick={addAnswer}>
                                Add Answer
                            </div>
                            <div className="btn-wrapper">
                                <div className="btn" onClick={() => setAddQuestion(false)}>
                                    Close
                                </div>
                                <div className="btn" onClick={saveQuestion}>
                                    Save
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default CreateQuiz;
