import React from 'react';
import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route,
} from 'react-router-dom'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes path='/'>
        <Route index element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='user'>
        <Route index element={<List/>}/>
          <Route path=':userid' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
