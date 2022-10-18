import React from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { WiDaySunny } from "react-icons/wi";
import { IconContext } from "react-icons";
import { Typography } from "@material-ui/core";

const WelcomePages = () => {
  return (
    <WelcomeScreen>
      <Grid container direction="column" justfify="center" classname="full">
        <div className="highlight">
          <Grid item container xs={12} justify="center" alignItems="center">
            <IconContext.Provider value={{ size: "6em" }}>
              <WiDaySunny />
            </IconContext.Provider>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4" color="inherit">
              Weather App
            </Typography>
            <Link
              color="inherit"
              aria-label="menu"
              component={RouterLink}
              to="/main"
            >
              {" "}
              Ingresar{" "}
            </Link>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePages;
