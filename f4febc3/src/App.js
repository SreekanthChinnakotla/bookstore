// App.js
import React, { useEffect, useState } from 'react';
import TableRow from './components/TableRow';
import './index.css';

async function fetchData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((result) => setData(result));
  }, []);

  return (
    <div className="container">
      <h1>Cryptocurrency Market</h1>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Change 24H</th>
            <th>Market Cap</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <TableRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;