import { useState, useEffect } from "react";
import Head from "next/head";
import InputComponent from "../components/weather/Input";
import WeatherStat from "../components/weather/WeatherStat";
import WeatherChart from "../components/weather/WeatherChart";
import WeatherCard from "../components/weather/WeatherCard";
import ErrorInput from "../components/weather/ErrorInput";

const Weather = () => {
  const [data, setData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [error, setError] = useState("");
  const [activeDay, setActiveDay] = useState(0);
  const setCity = (city) => {
    setError("");
    fetch(
      `/api/weather?city=${city}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.coord != undefined) {
          fetch(
            `/api/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setData(data);
            });
        } else {
          setError("Wrong input, try another please.");
        }
      });
  };
  console.log(data);

  useEffect(() => {
    if (!data) {
      return;
    }
    const today = new Date();
    const cityOffset = data.timezone_offset / 60;
    today.setTime(
      today.getTime() + (today.getTimezoneOffset() + cityOffset) * 60000
    );
    const currentDateTimeNew =
      today.getHours() +
      ":" +
      (today.getMinutes() + "").padStart(2, "0") +
      " " +
      today.toDateString();
    setCurrentDateTime(currentDateTimeNew);
    setCurrentDate(today);
  }, [data]);

  return (
    <div className="weatherBody">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
          crossorigin="anonymous"
        />
        <title>Weather</title>
      </Head>
      <main>
        <div className="weatherCenter">
            <div className="weatherContainer layout">
              <div className="mainWrapper">
                <div className="inputWrapper">
                  <InputComponent setCity={setCity} />
                  {!!error && <ErrorInput error={error} />}
                  {!!data && (
                    <WeatherStat data={data} currentDateTime={currentDateTime} />
                  )}
                </div>
                {!!data && (
                  <div className="cardBlockFlex">
                    <div className="chartWrapper">
                      <WeatherChart data={data} activeDay={activeDay} />
                    </div>
                    <div className="cards">
                      <WeatherCard data={data} currentDate={currentDate} activeDay={activeDay} setActiveDay={setActiveDay}/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}

export default Weather