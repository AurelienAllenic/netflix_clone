import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout)
      }
    })

    return unsubscribe;
  }, [])
  
  return (
    <div className="app">
      
      <BrowserRouter>
      {!user ? (
        <LoginScreen />
      ) : (
      <>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
        </Routes>
        <Routes>
          <Route path="/test" element={<HomeScreen />}></Route>
        </Routes>
      </>
      )}</BrowserRouter>
        
        
    
    
    </div>
  );
}

export default App;
