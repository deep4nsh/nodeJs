import { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Main from './components/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
