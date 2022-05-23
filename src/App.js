
import './App.css';
import data from './data';
import {Routes, Route, Link} from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import MainPage from './pages/MainPage/MainPage';
import MainNavbar from './pages/Navbar/Navbar';
import About from "./pages/About/About";
import Login from './pages/Login/Login';
import { useState } from 'react';



function App() {

  let [shoes] = useState(data)


  return (
    <div className="App">
      <MainNavbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />

        <Route path="/about-team" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>

        <Route path="/info" element={<div>경매참여안내</div>}/>
        <Route path="/help" element={<div>문의하기</div>}/>


        <Route path="/Login" element={<Login />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
