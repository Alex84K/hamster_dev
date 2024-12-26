

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Button } from "react-bootstrap"
import GeminiCopmonent from "./components/GeminiCopmonent"
import { Route, Routes } from "react-router-dom"
import Forecasts from "./components/Forecasts"
import Test from "./components/Test"
import SolarForecast from "./components/SolarForecast"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getDoc1, getDoc2, getDoc3, getForecastAsync, selectDoc1, selectDoc2, selectDoc3, selectForecast } from "./features/solarForecast/forecastSlice"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import Home2 from './components/Home2';
import ParticleNetworkAnimation from './components/home_main/ParticleNetworkAnimation';
import Footer from './components/Footer';
import { selectAuth } from './features/account/userSlie';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(selectAuth)
  const forecast = useAppSelector(selectForecast)
  const doc1 = useAppSelector(selectDoc1)
  const doc2 = useAppSelector(selectDoc2)
  const doc3 = useAppSelector(selectDoc3)
  
  useEffect(() => {
    if (forecast === '') {
      const fetchData = async () => {
        await dispatch(getDoc1('https://services.swpc.noaa.gov/text/3-day-geomag-forecast.txt'));
        await dispatch(getDoc2('https://services.swpc.noaa.gov/text/discussion.txt'));
        await dispatch(getDoc3('https://services.swpc.noaa.gov/text/3-day-forecast.txt'));
        await dispatch(getForecastAsync(`${doc1} ${doc2} ${doc3} сделай короткий прогноз исходя из этих данных и дай ответ на русском языке`));
      };
      fetchData();
    }
    
  }, [dispatch, forecast, doc1, doc2, doc3]);
 
  

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<ParticleNetworkAnimation />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/forecasts" element={<Forecasts />} />
        <Route path="/gemini" element={auth ? <GeminiCopmonent /> : <Home2 />} />
        <Route path="/solar-data" element={<Test />} />
        <Route path="/test" element={<SolarForecast />} />
        <Route path="/k_index" element={<SolarForecast />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
