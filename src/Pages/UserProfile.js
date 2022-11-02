import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const UserProfile = () => {
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.log(error);
            alert('An error occurred while trying to logout');
        }

    }

    return (
        <div className="container">


            <div className="header">
                <h1> User Profile </h1>
                <button onClick={handleLogout}> Logout </button>
            </div>


            <table>
                <thead>
                    <tr>
                        <th> Email </th>
                        <th> Action </th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td> {currentUser.email} </td>
                        <td>
                            <Link to='update-profile'> Atualizar perfil do usuário </Link> 
                        </td> 
                             
                    </tr>

                </tbody>

            </table>
        </div>
    );
};