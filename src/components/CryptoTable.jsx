// CryptoTable.js
import React from "react";

const CryptoTable = () => {
  const data = [
    {icon: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg', pair: "BTC/", grey:"USDT", price: "62558.0900", high: "63380.0000", low: "62144.0000", volume: "1732.74", change: "green" },
    {icon: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Ethereum_logo.svg', pair: "ETH/", grey:"USDT", price: "2437.0000", high: "2471.2900", low: "2433.0000", volume: "5447.89", change: "red" },
    {icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=035', pair: "XRP/", grey:"USDT",price: "0.5372",  high: "0.54180", low: "0.53635", volume: "7937299.25", change: "red" },
    {icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=035', pair: "LTC/", grey:"USDT", price: "65.2700", high: "65.9300", low: "65.1300", volume: "15597.14", change: "red" },
  ];

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Price</th>
          <th>High</th>
          <th>Low</th>
          <th>24H Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map((crypto, index) => (
          <tr key={index}>
            <td><img src={crypto.icon} />{crypto.pair}<span style={{color: 'grey'}}>{crypto.grey}</span></td>
            <td className={crypto.change === "green" ? "green-text" : "red-text"}>{crypto.price}</td>
            <td>{crypto.high}</td>
            <td>{crypto.low}</td>
            <td>{crypto.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
