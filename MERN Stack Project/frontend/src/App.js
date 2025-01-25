import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import CreateQuiz from './components/CreateQuiz/CreateQuiz';
import MyQuizzes from './components/MyQuizzes/MyQuizzes';
import ViewQuiz from './components/ViewQuiz/ViewQuiz';
import TakeQuiz from './components/TakeQuiz/TakeQuiz';
import ViewResults from './components/ViewResults/ViewResults';

import store from './store';
import axios from 'axios';



function App() {

  useEffect(() => {
    if (localStorage.getItem('_ID')) {
      axios
        .get(`/api/users/${localStorage.getItem('_ID')}`)
        .then((res) => {
          store.dispatch({
            user: res.data.user,
            type: 'set_user'
          });
        })
        .catch((er) => {
          console.log(er);
        });
    }
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/my-quizzes" element={<MyQuizzes />} />
          <Route path="/view-quiz" element={<ViewQuiz />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
          <Route path="/view-results" element={<ViewResults />} />
          <Route path="*" element={<Navigate to="/" />}>

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;