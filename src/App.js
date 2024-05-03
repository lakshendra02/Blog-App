import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import './App.css';
 
function App() {
    return (
        <div className="container">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </Router>
        </div>
    );
}
 
export default App;