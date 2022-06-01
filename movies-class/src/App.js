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
  return (
    <div>
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
    </div>
  );
}
export default App;
