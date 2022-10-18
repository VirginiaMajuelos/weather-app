import React from "react";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import CityList from "../components/CityList/index.js";
import AppFrame from "../components/AppFrame/AppFrame.js";

const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Madrid", country: "España" },
  { city: "Ciudad de México", country: "México" },
];

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = () => {
    //history.push permite alterar la url por programación
    history.push("/city");
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        {/* CityList es un Children de AppFrame */}
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
