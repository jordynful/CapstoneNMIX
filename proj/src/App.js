
import './App.css';
import Media from './pages/Media';
import Friends from './pages/Friends';
import Music from './pages/Music';
import Profile from './pages/Profile';
import Home from "./pages/Home";
import Shows from './pages/Shows';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/media" element={<Media />} />
            <Route path="/music" element={<Music />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
