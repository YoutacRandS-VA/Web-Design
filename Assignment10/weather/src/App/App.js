// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { WeatherDay } from '../Weatherday/weatherday';
import styles from './styles.module.css';
import { LocationSearch } from '../LocationSearch/LocationSearch';
// ca8c887238a531620394d507dbc60133


export const App = () => {
  // const locationKey = '65242_PC';
  
  const apikey = 'wUKWVAD3SWhHzPhXKIDKbq29iLOinsGQ';

  const [weatherInfo, setWeatherInfo] = useState();

  const [locationKey,setLocationKey] = useState(''); 

  const padNum = (num) => {
    const stringNum = num + '';
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return '0' + stringNum;
    } else {
      return stringNum;
    }

  };


  useEffect(() => {
    if (locationKey){
      fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apikey}`
      )
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => {
  
          console.log(res)
          setWeatherInfo(res.DailyForecasts.map(df => {
            return {
              min: df.Temperature.Minimum.Value,
              max: df.Temperature.Maximum.Value,
              weatherType: df.Day.IconPhrase,
              weatherKey: padNum(df.Day.Icon),
            }
          }
          ))
        });
    }
  }, [locationKey]);



  useEffect(() => {
    console.log(weatherInfo);
  }, [weatherInfo]);

  return (
    <div>
      <div>

        <LocationSearch  onCityFound={cityInfo=> {
          setLocationKey(cityInfo.key);
        }}/>

      </div>


      <div className={styles.main}>
        {!!weatherInfo && weatherInfo.map((i, index) => (
          <div className={styles.day} key={index}>
            <WeatherDay
              min={i.min}
              max={i.max}
              weatherType={i.weatherType}
              weatherKey={i.weatherKey} />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default App;
