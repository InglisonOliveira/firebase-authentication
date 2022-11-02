import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom'; // navegar entre as interfaces


export const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            await signIn(email, password); // await - espetar minha promisse signIp ser resolvida  e caso dê erro, darei uma mensagem de alerta
            navigate('/');
        } catch (error) {
            alert('An erro occurred while trying to login');

        }

        setLoading(false);
    }

    return (
        <div className="button.block">
            <h2> Login</h2>
            <form onSubmit={handleSubmit}>
                <label> Email</label>
                <input type='email'
                    value={email}
                    onChange={(element) => setEmail(element.target.value)}

                />

                <label> Password </label>
                <input type='password'
                    value={password}
                    onChange={(element) => setPassword(element.target.value)}
                />                

                <button desabled={loading} className='button-block' type="submit"> SignIn </button>
            </form>

            <div className="center">
                <div>
                    <p>
                        Forgot password? <Link to='/forgot-password'> Reset Password </Link>
                    </p>
                    <p>
                        Don't have an acount? <Link to='/signup'> Signup </Link>
                    </p>
                </div>
            </div>

        </div>
    );
}