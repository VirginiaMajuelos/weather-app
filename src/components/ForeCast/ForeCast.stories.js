import React from "react";
import ForeCast from "./ForeCast";

export default {
  title: "ForeCast",
  component: ForeCast,
};

const foreCastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
  { hour: 6, state: "cloud", temperature: 18, weekDay: "Viernes" },
  { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
  { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
  { hour: 13, state: "sunny", temperature: 17, weekDay: "Sábado" },
];

export const ForeCastExample = () => (
  <ForeCast foreCastItemList={foreCastItemList} />
);
