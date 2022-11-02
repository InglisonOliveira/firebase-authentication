import React from "react";
import { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export const SignUp = () => {
    const { signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(false);

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            alert('Password must be the same');
            setLoading(false);
            return;
        }

        try {
            await signUp(email, password); // await - espetar minha promisse signUp ser resolvida  e caso dê erro, darei uma mensagem de alerta
            alert('User registered successfully')
            Navigate('/login');
        } catch (error) {
            alert('An erro occurred while trying to create a user');

        }

        setLoading(false);
        
    }

    return (
        <div className="button.block">
            <h2> SignUp </h2>
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

                <label> Password Confirmation </label>
                <input type='password'
                    value={confirmPassword}
                    onChange={(element) => setConfirmPassword(element.target.value)}
                />

                <button disabled={loading} className='button-block' type="submit"> SignUp </button>
            </form>

            <div className="center">
                <div>
                    <p>
                        Already have an acount? <Link to='/login'> Login </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};