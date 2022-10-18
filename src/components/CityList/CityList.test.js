import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList"; // SUT: Subject under testing (objeto del testeo)

const cities = [
  { city: "Madrid", country: "España" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Ciudad de México", country: "México" },
];

test("CityList renders", async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole("button");

  expect(items).toHaveLength(4);
});

test("CityList click on item", async () => {
  // Debemos simular una acción del usuario: click sobre un item
  //para eso, vamos a utilizar una función "mock"
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole("button");

  // Ahora, para simular la acción, vamos a utilizar fireEvente (parte de la libreria testing-library)
  fireEvent.click(items[0]);

  //¿Ahora qué tuvo que suceder? Se debió llamr a la función  fnClickOnItem UNA única vez

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
