import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseUI from '../Components/FirebaseUIConfig';
import '../Styles/Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error("Error signing in:", error);
            setError('Incorrect email or password. Please try again.');
            setPassword('');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="password-input-container">
                        <div className="show-password-switch">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={toggleShowPassword}
                                />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>
                <div className="or-separator">
                    <span>or</span>
                </div>
                <FirebaseUI />
                <div className="signup-link">
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;