import React, { useState } from 'react';



function Signin({ signIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        signIn(email, password);
    };

    return (
        <div className="sign-in-wrapper">
            <div className="">
                <div className="header block w-full text-center text-grey-darkest mb-6">Sign In</div>
                <div className="sub-header text-lg text-center text-gray-700 mb-4">Welcome back </div>
                <div className="form-wrapper">
                    <div className="input-wrapper">
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="email">Email</label>
                        <input type="text" id="email" className="input border py-2 px-3 text-grey-darkest" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="password">Password</label>
                        <input type="password" className="input border py-2 px-3 text-grey-darkest" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="btn block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" onClick={handleSignIn}> Sign in</div>
                </div>
            </div>
        </div >
    );
}
export default Signin;