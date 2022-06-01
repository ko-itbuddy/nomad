import { useState, useEffect } from 'react';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import CleanUp from './routes/CleanUp';
import Coins from './routes/Coins';
import Detail from './routes/Detail';
import Hello from './routes/Hello';
import Home from './routes/Home';
import ToDos from './routes/ToDos';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <ul>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/todos">ToDos</Link></li>
          <li><Link to="/cleanup">CleanUp</Link></li>
          <li><Link to="/coins">Coins</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/todos" element={<ToDos />} />
        <Route path="/cleanup" element={<CleanUp />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
