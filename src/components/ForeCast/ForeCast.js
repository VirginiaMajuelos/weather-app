import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ForeCastItem from "../ForeCastItem";
import { validValue } from "../IconState";

const renderForeCastItem = (forecast) => {
  const { weekDay, hour, state, temperature } = forecast;
  return (
    <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
      <ForeCastItem
        hour={hour}
        weekDay={weekDay}
        state={state}
        temperature={temperature}
      ></ForeCastItem>
    </Grid>
  );
};

const ForeCast = ({ foreCastItemList }) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      {foreCastItemList.map((forecast) => renderForeCastItem(forecast))}
    </Grid>
  );
};

ForeCast.propTypes = {
  foreCastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.number.isRequired,
      weekDay: PropTypes.string.isRequired,
      state: PropTypes.oneOf(validValue).isRequired,
      temperature: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default ForeCast;
