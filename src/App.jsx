import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RadactionLanding from './components/RadactionLanding';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RadactionLanding />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </Router>
    );
}

export default App;
