import React from "react";
import "./IndexPage.scss";

import {
  Typography,
  makeStyles,
  Grid,
  Card,
  Box,
  Divider,
  CardContent,
  CardMedia,
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    marginTop: "2%",
    marginLeft: "3%",
    display: "flex",
    width: "250px",
    height: "450px",
    "&:hover": {
      background: "#303F9F",
      opacity: "0.8",
      borderTop: "solid 1px #cccccc",
      color: "white",
      boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
      transform: "scale(1.05,1.05)",
    },
  },

  cardMedia: {
    width: "200px",
    height: "150px",
    borderRadius: "2%",
  },
  box: { display: "flex", flexDirection: "row", marginLeft: "5%" },
  heading: { paddingTop: "3%", marginBottom: "0", paddingRight: "25%" },
  img: {
    width: "400px",
    height: "550px",
  },
  shiftRight: {
    marginLeft: "10%",
    backgroundImage:
      "linear-gradient(rgb(252, 197, 195) 0%, rgba(72,209,204,1) 70%)",

    height: "100vh",
    backgroundSize: "cover",
  },
  nameHeading: {
    fontFamily: "Lora",
    fontSize: "1.5rem",
  },
  title: {
    fontFamily: "Montserrat",
  },
  descr: {
    fontFamily: "Lora",
  },
});

export default function IndexPage() {
  const classes = useStyles();

  return (
    <Grid item lg={12} className={classes.shiftRight}>
      <Grid component="main">
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.heading}
        >
          <h1 id="headingIndexPage">Hire the right tutor today!</h1>
        </Grid>

        <Box className={classes.box}>
          {/* Card 1  */}
          <Card className={classes.card}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.cardMedia}
                image="https://images.unsplash.com/photo-1551989745-347c28b620e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="has 10 reviews"
              />
              <div>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography
                      className={classes.nameHeading}
                      component="h2"
                      variant="h6"
                    >
                      Martha Bosnian
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                      History tutor
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography
                      className={classes.descr}
                      variant="subtitle1"
                      paragraph
                    >
                      My greatest passion in life is teaching. I was born and
                      raised in Sydney, and experienced great success ...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating:{" "}
                    <span aria-label="Star" role="img">
                      {" "}
                      ⭐⭐⭐⭐⭐{" "}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    2 reviews
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Card>
          {/* Card 2 */}
          <Card className={classes.card}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.cardMedia}
                image="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="has 10 reviews"
              />
              <div>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography
                      className={classes.nameHeading}
                      component="h2"
                      variant="h6"
                    >
                      Vin Freesto
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                      Literature tutor
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography
                      className={classes.descr}
                      variant="subtitle1"
                      paragraph
                    >
                      I really enjoy engaging with fellow students to empower
                      and enrich their experiences with various subjects...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating:{" "}
                    <span aria-label="Star" role="img">
                      {" "}
                      ⭐⭐⭐⭐⭐{" "}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    6 reviews
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Card>

          {/* Card 3*/}
          <Card className={classes.card}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.cardMedia}
                image="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                title="has 10 reviews"
              />
              <div>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography
                      className={classes.nameHeading}
                      component="h2"
                      variant="h6"
                    >
                      Garret Richotto
                    </Typography>
                    <Typography className={classes.title} variant="h6">
                      Chemistry tutor
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider variant="middle" />

                    <Typography
                      variant="subtitle1"
                      paragraph
                      className={classes.descr}
                    >
                      Being once an Arts Student, my perspectives that I will
                      provide in our lesson content are largely from ...
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle1" color="primary">
                    Rating:{" "}
                    <span aria-label="Star" role="img">
                      {" "}
                      ⭐⭐⭐⭐⭐{" "}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    11 reviews
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Card>
          <Grid>
            <img
              className={classes.img}
              alt=""
              src="https://cdn.pixabay.com/photo/2013/07/12/14/07/student-147783_1280.png"
            ></img>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
