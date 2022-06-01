import { useState, useEffect } from 'react';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import Detail from './routes/Detail';
import Hello from './routes/Hello';
import Home from './routes/Home';

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
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
