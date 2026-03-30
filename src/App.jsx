import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Materi from './pages/Materi/Materi';
import Galeri from'./pages/Galeri/Galeri';
import Profil from'./pages/Profil/Profil';
import Aplikasi from'./pages/Aplikasi/Aplikasi';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/aplikasi" element={<Aplikasi />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;