import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toolbar } from '@mui/material';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import CharacterDetail from "./Components/CharacterDetail/CharacterDetail";
import About from "./Components/About/About";
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Toolbar />

            <Routes>

                <Route path="/" element={<Main />} />
                <Route path="/character/:id" element={<CharacterDetail />} />

                <Route path="/about" element={<About />} /> 
            </Routes>
        </Router>
    );
}

export default App;
