import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=10')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        setCoins(json);
      });
  }, []);
  return (
    <div>
      <h1>
        The Coins!
        {loading ? '' : ` (${coins.length})`}

      </h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name}
            {' '}
            (
            {coin.symbol}
            )
            :
            $
            {coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
