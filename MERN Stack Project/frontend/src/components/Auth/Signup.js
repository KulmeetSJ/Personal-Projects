import React, { useState } from 'react';


function Signup({ signUp }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSignUp = () => {
        signUp({ email, password, firstName, lastName });
    }
    return (
        <div className="sign-in-wrapper">
            <div className="form">
                <div className="input-wrapper">
                    <div className="mb-2 uppercase font-bold text-lg text-grey-darkest">Email Address</div>
                    <input className="input border py-2 px-3 text-grey-darkest" type="text" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <div className="mb-2 uppercase font-bold text-lg text-grey-darkest">Password</div>
                    <input className="input border py-2 px-3 text-grey-darkest" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <div className="mb-2 uppercase font-bold text-lg text-grey-darkest">First Name</div>
                    <input className="input border py-2 px-3 text-grey-darkest" type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <div className="mb-2 uppercase font-bold text-lg text-grey-darkest">Last Name</div>
                    <input className="input border py-2 px-3 text-grey-darkest" type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="btn block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" onClick={handleSignUp}>Sign Up</div>
            </div>
        </div>
    );
}

export default Signup;

