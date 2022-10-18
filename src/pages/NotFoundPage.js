import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { WiRain } from "react-icons/wi";
import { IconContext } from "react-icons";
import { Typography } from "@material-ui/core";

const NotFoundPage = (props) => {
  return (
    <Grid container direction="column" justfify="center" classname="full">
      <div className="highlight">
        <Grid item container xs={12} justify="center" alignItems="center">
          <IconContext.Provider value={{ size: "6em" }}>
            <WiRain />
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
            404 | La página no existe
          </Typography>
          <Link
            color="inherit"
            aria-label="menu"
            component={RouterLink}
            to="/main"
          >
            Volver al inicio
          </Link>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
