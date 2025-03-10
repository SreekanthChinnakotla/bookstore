// TableRow.js
import React from 'react';

function TableRow({ coin }) {
    const textColor = coin.price_change_percentage_24h < 0 ? 'red' : 'green';

  return (
    <tr>
      <td><img src={coin.image} alt={coin.name} style={{width: '24px', height: '24px'}} /></td>
      <td>{coin.name}</td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price}</td>
      <td>${coin.total_volume}</td>
      <td style={{ color: textColor }}>{coin.price_change_percentage_24h}%</td>
      <td>${coin.market_cap}</td>
    </tr>
  );
}

export default TableRow;