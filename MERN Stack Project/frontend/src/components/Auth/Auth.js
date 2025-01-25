import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import axios from 'axios';
import store from '../../store/index';
import Toast from '../Toast/Toast';
import './Auth.css';

function Auth() {
    const [tab, setTab] = useState('signin');
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const signIn = (email, password) => {
        console.log(email, password);
        axios.post('/api/users/login/', { email, password })
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    store.dispatch({
                        type: 'login',
                        _id: res.data.user._id,
                        user: res.data.user,
                        token: res.data.token
                    });
                    console.log("storedata");
                    console.log(store.getState());
                    navigate('/dashboard');
                } else {
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 3000);
                }
            })
            .catch(error => {
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
            });
    }

    const signUp = ({ firstName, lastName, email, password }) => {
        axios.post('/api/users/register/', { firstName, lastName, email, password })
            .then(res => {
                if (res.data.success) {
                    setTab('signin');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const changeTab = () => {
        setTab(tab === 'signup' ? 'signin' : 'signup');
    };



    let page = tab === 'signin' ? <Signin signIn={signIn} /> : <Signup signUp={signUp} />;

    return (
        <div className="auth-wrapper">
            <Toast model={showToast} message="Incorrect login" backgroundColor="#FF4539" />

            <div className="left">
                <img src="https://freesvg.org/img/chemist.png" alt="Build itt" />
            </div>
            <div className="right">
                <div className="header block w-full text-center text-grey-darkest mb-6"> Build Forms </div>
                <div className="sub-header text-lg text-center text-gray-700 mb-4">Build Forms on this website</div>
                {page}
                <div className="block w-full text-center no-underline text-lg text-grey-dark hover:bg-teal-dark uppercase  mx-auto p-4 cursor-pointer " onClick={changeTab}>{tab === 'signin' ? 'New to Quiz itt? Sign up here' : 'Already have an account with us? Sign in'}</div>
            </div>
        </div>
    );
}

export default Auth;
