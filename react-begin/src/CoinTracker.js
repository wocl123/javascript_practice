import { useState, useEffect } from "react";

function CoinTracker() {
  //코인 api를 불러올 때 로딩문구를 띄우기 위함
  const [loading, setLoading] = useState(true);
  //코인 정보를 받아올 배열
  const [coins, setCoins] = useState([]);
  //사용자의 입력 돈
  const [cost, setCost] = useState(1);
  //입력된 달러 -> 코인으로 변환
  const [need, setNeed] = useState(1);

  const onChange = (event) => {
    setCost(event.target.value);
    setNeed(1);
  };
  const handleInput = (event) => {
    setNeed(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins!{loading ? "" : `Here are..${coins.length} coins`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin!</option>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h2>Please enter the amount</h2>
      <div>
        <input
          type="number"
          value={need}
          onChange={handleInput}
          placeholder="dollor"
        />
        $
      </div>
      <h2>You can get {need / cost}</h2>
    </div>
  );
}
export default CoinTracker;
