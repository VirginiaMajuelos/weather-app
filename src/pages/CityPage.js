import React from "react";
import Grid from "@material-ui/core/Grid";
import AppFrame from "../components/AppFrame";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import ForeCast from "../components/ForeCast";
import ForeCastChart from "../components/ForeCastChart";

const dataExample = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

const foreCastItemListExample = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
  { hour: 6, state: "cloud", temperature: 18, weekDay: "Viernes" },
  { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
  { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
  { hour: 13, state: "sunny", temperature: 17, weekDay: "Sábado" },
];

const CityPage = () => {
  const city = "Buenos Aires";
  const country = "Argentina";
  const state = "cloudy";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const data = dataExample;
  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item xs={12}>
          <ForeCastChart data={data} />
        </Grid>
        <Grid item xs={12}>
          <ForeCast foreCastItemList={foreCastItemListExample} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
