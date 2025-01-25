import React, { useEffect } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const history = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('JWT_PAYLOAD')) {
            history('/');
        }
    }, [history]);

    return (
        <div className="dashboard-wrapper">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main">
                <div className="top">
                    <div className="left">
                        <div className="header">Statistics</div>
                    </div>
                    <div className="right">
                        <div className="header">My Quizzes</div>
                    </div>
                </div>

                <div className="bottom">
                    {/* Add your content here */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
