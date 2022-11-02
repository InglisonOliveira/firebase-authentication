import React, { createContext, useState, useEffect, useContext, } from 'react';

// importando a função para criação  de usuário, essa função fará a conexão do formulário com o firebase
import {
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut,
    updateEmail, //Serve para atualização de e-mail no firebase
    sendPasswordResetEmail,
 } from 'firebase/auth';
import { auth } from '../Firebase';

const AuthContext = createContext();

// conectando componente com o contexto
export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}) {    
    const [currentUser, setCurrentUser] = useState();
    
    // Criando Usauário com e-mail e senha
    function signUp (email, password) {
        //função createUserWithEmailAndPassword é utilizada para fazer a conexão do nosso formulário com o firebase
        return createUserWithEmailAndPassword (auth, email, password);
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword (auth, email, password);
    }

    function resetPassword(email) {
        return sendPasswordResetEmail (auth, email);
    }
    
    function logOut() {
        return signOut (auth);
    }

    function updateEmailAddress(newEmail) {
        return updateEmail(currentUser, newEmail); // retorna o update email vindo do fire base passando o Auth e novo email
    }
    
    /*Quando eu criar um usuário no servidor firebase, quero que me retorne informando que o usuário foi criado com sucesso */
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
       });
       return unSubscribe; // ' quer dizer que o useEffect será ativado somente uma veza cada render
    }, []);
    return (
        
        <AuthContext.Provider
            value={{
                signUp,
                signIn,
                logOut,
                currentUser: currentUser, 
                updateEmailAddress,
                resetPassword,              
            }}
        >
            {children}
        </AuthContext.Provider>
    );
        
}