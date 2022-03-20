import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom'

function App() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

      axios.get(`http://localhost:8000/blog`)
      .then((response) => {
        console.log(response)
        setBlogs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);


  // const allBlogs = blogs.map((element, idx) => {
  //   return (<>
    
  //   <p>{element.name}</p>
  // <p>{element.content}</p>
  //   </>

  //   )
  // });


  return (
  <>
  <Router>
    <Routes>
      <Route
      exact
      path={'/'}
      >

      </Route>
    </Routes>
  </Router>
    <h1>Welcome to Blog land</h1>
    <Link to={'/'}>View all blogs</Link>
    <Link to={'/'}>Create a new blog</Link>

  </>
  );
}

export default App;
