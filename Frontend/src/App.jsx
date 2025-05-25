import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Stats from './components/stats/Stats';
import Brief from './components/brief/Brief';
import './App.css';
import AboutUs from './components/about-us/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/brief" element={<Brief />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Router>
        <Home />
        <Stats />
        <Brief />
        <AboutUs />
      </div>
    </AuthProvider>
  );
}

export default App;
