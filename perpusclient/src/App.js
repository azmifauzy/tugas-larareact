import logo from './logo.svg';
import './App.css';
// React Router DOM

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';

function App() {

  // const getData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // }

  return (


      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="about" element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;
