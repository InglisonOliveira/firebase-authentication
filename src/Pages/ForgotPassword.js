import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from "../context/authContext";

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const { resetPassword } = useAuth();
    const [email, setEmail] = useState('');
    const[loading, setLoading] = useState(false);

    async function handleSubmit(element) {
        element.preventDefault(); // ao submeter meu formulário o mesmo não recarrega a pagina

        setLoading(true)

        try {
            await resetPassword(email)
            alert('An email has been sent to reset your password');
            navigate('/login')
        } catch {
            alert('There was an error trying to reset your password');

        }

        setLoading(false);
    }

    return (

        <div className="container">
            <h1> Forgot Password</h1>

            <form onSubmit={handleSubmit}>
                <label> Email </label>
                <input 
                    type='email'
                    value={email} 
                    onChange={(element) => setEmail(element.target.value)}
                />

                <button className="button-block"> Recover Password </button> 
            </form>

            <div className="center">
                <div>
                <p>
                    Already have an acount? <Link to='/login'> Login </Link>
                </p>
                <p>
                    Don't have an acount? <Link to='/signup'> Signup </Link>
                </p>
                </div>
            </div>

        </div>
    );
}