import { SignUp } from './Pages/SignUp';
import { AuthProvider } from './context/authContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProfile } from './Pages/UserProfile';
import { Login } from './Pages/Login';
import { UpdateProfile } from './Pages/UpdateProfile';
import { ForgotPassword } from './Pages/ForgotPassword';
import { ProtectedRoute } from './components/PrivateRoutes';
import { Header } from './components/Header';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>

          <Route
            path='/'
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }>          
          </Route>


          <Route 
            path='update-profile'
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }>
          </Route>
          
          
          
          <Route path='forgot-password' element={<ForgotPassword />} > </Route>
          <Route path='*' element={
            <div>
              <h1> Not Found </h1> 
            </div>} >
          </Route>
            
          
         
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


