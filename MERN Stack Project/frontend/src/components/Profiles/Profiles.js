import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Toast from '../Toast/Toast';
import './Profiles.css';

function Profile() {
    const [user, setUser] = useState(null);


    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        let id = localStorage.getItem('_ID');
        if (!id) {
            window.location.href = '/';
            localStorage.clear();
        }
        axios.get('/api/users/' + id)
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="profile-wrapper">

            <div>
                <Sidebar />
            </div>
            <div className="body">
                {user && (
                    <div className="cards">
                        <div className="left">
                            {/* Display user profile information */}
                            <div className="user-info">
                                <div className="user-name">{user.firstName + ' ' + user.lastName}</div>
                                <div className="user-email">{user.email}</div>
                                {/* Add other profile details you want to display */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
