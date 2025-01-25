import React, { useState, useEffect } from 'react';
import './ViewQuiz.css';
import qs from 'qs';
import axios from 'axios';

function ViewQuiz(props) {
    const [id, setId] = useState('');
    const [quiz, setQuiz] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [inputVal, setInputVal] = useState('');

    const checkAuth = () => {
        if (quiz.mustBeSigned && localStorage.getItem('JWT_PAYLOAD') && localStorage.getItem('_ID')) {
            setIsAuthenticated(true);
        } else if (quiz.mustBeSigned) {
            setIsAuthenticated(false);
        }
    };

    const refreshQuiz = () => {
        axios.get('/api/quizzes/get-quiz/' + qs.parse(props.location.search, { ignoreQueryPrefix: true }).id)
            .then(res => {
                if (res.data) {
                    setQuiz(res.data.quiz);
                    setIsLoading(false);
                    checkAuth();
                }
            })
            .catch(er => {
                console.log(er);
            });
    };

    useEffect(() => {
        let id = qs.parse(props.location.search, { ignoreQueryPrefix: true }).id;
        setId(id);
        refreshQuiz();
    }, [props.location.search]);



    const startQuiz = () => {
        props.history.push({
            pathname: "/take-quiz/" + id,
            state: {
                quiz: quiz
            }
        });
    };

    const addComment = () => {
        if (!inputVal.length) return;
        axios.post('/api/quizzes/add-comment', {
            quizId: id,
            message: inputVal,
            sentFromId: localStorage.getItem('_ID')
        })
            .then(res => {
                if (res.data) {
                    refreshQuiz();
                    setInputVal('');
                }
            })
            .catch(er => {
                console.log(er);
            });
    };

    return !isLoading ? (
        <div className="view-quiz">
            {!isAuthenticated ? (
                <div className="not-auth">You must be logged in to take this quiz</div>
            ) : (
                <div className="content">
                    <div className="header">{quiz.name}</div>
                    <div className="body">
                        <div className="left">
                            <div className="description">{quiz.description}</div>
                            <div className="comments">
                                {quiz.comments.map((com, idx) => (
                                    <div className="comment" key={idx}>
                                        <img style={{ borderRadius: '100%' }} className="img" src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt="collection" />
                                        <div>{com.message}</div>
                                        <div>{com.sentFromName}</div>
                                    </div>
                                ))}
                                <div className="input-field">
                                    <input
                                        value={inputVal}
                                        onChange={e => setInputVal(e.target.value)}
                                        type="text"
                                        placeholder="Add a new comment"
                                    />
                                    <button onClick={addComment}>Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="questions-num">{quiz.questions.length} Questions</div>
                            <div className={quiz.createdBy === localStorage.getItem('_ID') ? 'questions-wrapper' : 'questions-wrapper no-scroll'}>
                                {quiz.questions.map((question, idx) => (
                                    <div className="question" key={idx}>
                                        <div>{quiz.createdBy === localStorage.getItem('_ID') ? question.questionName : 'question name'}</div>
                                        <div>{quiz.createdBy === localStorage.getItem('_ID') ? question.correctAnswer : 'answer'}</div>
                                    </div>
                                ))}
                                {quiz.createdBy !== localStorage.getItem('_ID') ? <div className="hidden"><div>Must be creator to look at questions</div></div> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="buttons-wrapper">
                            <button onClick={() => props.history.goBack()}>Go Back</button>
                            <button onClick={startQuiz}>Take Quiz</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) : <h2>Loading</h2>;
}

export default ViewQuiz;
