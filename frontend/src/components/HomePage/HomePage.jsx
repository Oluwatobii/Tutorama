import React, { Fragment } from "react";

import { makeStyles, Grid, Typography, Link, Box } from "@material-ui/core";
import HowWorks from "./HowWorks";
import SearchField from "./SearchField";
import FindSubjects from "./FindSubjects";
import ScrollToTop from "./ScrollToTop.jsx";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        tutorama
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  shiftRight: {
    // marginLeft: "15%",
    paddingLeft: "15%",
    backgroundColor: "#FFFFFF",
    // margin: "auto",
  },
}));

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.shiftRight}>
        <SearchField {...props} updateSearchResult={props.updateSearchResult} />
        <HowWorks />
        <FindSubjects />
      </Grid>

      <Grid item xs={12} container id="bottomImg">
        <ScrollToTop />
      </Grid>
    </Grid>
  );
}
