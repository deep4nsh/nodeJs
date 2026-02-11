import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
