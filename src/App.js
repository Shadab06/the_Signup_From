import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
//import components
import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/successPage" exact component={SuccessPage} />
      </div>
    </Router>
  );
}

export default App;