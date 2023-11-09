
import React, { useState } from 'react';

const userCredentials = {
    'user1': 'password1',
    'user2': 'password2'
};

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);

    const handleLogin = (e) => {
        e.preventDefault();
        const maxAttempts = 3;

        if (userCredentials[username] === password) {
            setIsLoggedIn(true);
        } else {
            setLoginAttempts(prev => prev + 1);
            if (loginAttempts >= maxAttempts - 1) {
                // Handle max attempts reached
                alert('Maximum login attempts reached. The window will now close.');
                window.close(); // In a real-world app, you might navigate the user away or disable the login form
            }
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome, {username}!</h1>
            ) : (
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    <p>Attempts left: {maxAttempts - loginAttempts}</p>
                </form>
            )}
        </div>
    );
};

export default Home;
