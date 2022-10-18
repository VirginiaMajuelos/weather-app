import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { IconContext } from "react-icons";
import IconState, { validValue } from "../IconState";

const ForeCastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{ size: "5em" }}>
          <IconState state={state} />
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature} º</Typography>
      </Grid>
    </Grid>
  );
};

ForeCastItem.propTypes = {
  hour: PropTypes.number.isRequired,
  weekDay: PropTypes.string.isRequired,
  state: PropTypes.oneOf(validValue).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForeCastItem;
