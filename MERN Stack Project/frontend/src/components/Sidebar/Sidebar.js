import React, { useEffect } from 'react';
import store from '../../store/index';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    useEffect(() => {
        const unsubscribe = store.subscribe(() => { });
        return () => {
            unsubscribe();
        };
    }, []);

    const bgImage = () => {
        if (store.getState().user.avatar && store.getState().user.avatar.url) {
            return `url(${store.getState().user.avatar.url})`;
        } else {
            return `url(https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg)`;
        }
    };

    if (store.getState().user) {
        return (
            <div className="sidebar-wrapper">
                <div className="header">Build Quiz</div>

                <div className="user">
                    <div className="avatar" style={{ backgroundImage: bgImage() }}></div>
                    <div className="name">{store.getState().user.firstName + ' ' + store.getState().user.lastName}</div>
                </div>

                <div className="links">
                    <NavLink to="/dashboard">
                        <div className="link">Dashboard</div>
                    </NavLink>
                    <NavLink to="/my-quizzes">
                        <div className="link">My Quizzes</div>
                    </NavLink>
                    <NavLink to="/create-quiz">
                        <div className="link">Create Quiz</div>
                    </NavLink>
                    <NavLink to="/view-quiz">
                        <div className="link">Take quiz</div>
                    </NavLink>

                </div>
            </div>
        );
    } else {
        return (
            <div>Loading</div>
        );
    }
}

export default Sidebar;
