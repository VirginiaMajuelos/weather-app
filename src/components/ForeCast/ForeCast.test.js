import React from "react";
import ForeCast from "./ForeCast";
import { render } from "@testing-library/react";

const foreCastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
  { hour: 6, state: "cloud", temperature: 18, weekDay: "Viernes" },
  { hour: 12, state: "fog", temperature: 18, weekDay: "Viernes" },
  { hour: 18, state: "cloudy", temperature: 19, weekDay: "Viernes" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Sábado" },
  { hour: 13, state: "sunny", temperature: 17, weekDay: "Sábado" },
];

test("ForeCast render", async () => {
  // Encontrar items cuando no hay otra manera: mediante un id
  ///finAllByTest no s va a permitir encontrar cada item con esa marca
  const { findAllByTestId } = render(
    <ForeCast foreCastItemList={foreCastItemList} />
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const foreCastItems = await findAllByTestId("forecast-item-container");

  expect(foreCastItems).toHaveLength(6);
});
