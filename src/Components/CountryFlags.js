import { React, useEffect, useState } from "react";
import "../styles.css";

const CountryFlags = () => {
  const [data, setData] = useState(null);
  const [lightTheme, setLightTheme] = useState(true);

  // https://restcountries.com/v3.1/all

  // https://jsonplaceholder.typicode.com/users

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  if (!data) return <div>LOADING...</div>;
  const handleTheme = () => {
    setLightTheme((current) => !current);
  };
  return (
    <div
      style={
        lightTheme
          ? { backgroundColor: "#D8D8D8", color: "black" }
          : { backgroundColor: "#6C396C", color: "white" }
      }
    >
      <h2>Customhook For Fetching API</h2>
      <div className="button">
        <button onClick={handleTheme}>
          Click Here For {lightTheme ? "Dark" : "Light"} Theme
        </button>
      </div>
      <div className="table">
        <table>
          <tr>
            <th className="row">Country</th>
            <th className="row">Capital</th>
            <th className="row">Flag</th>
            {/* <th className="row">Currency</th> */}
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.name.common}</td>
              <td>{item.capital}</td>
              <td>
                <img alt="flag" src={item.flags.png} height="30"></img>
              </td>
              {/* <td>{item.currencies.GBP}</td> */}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CountryFlags;
