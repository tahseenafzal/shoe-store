import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core/";
import { Link } from "react-router-dom";
import Shoes from "./../../shoes.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1000px",
    margin: "30px auto",
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#efefef",
  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Grid item xs={12} sm={4} key={keyName}>
              <Link to={`/${keyName}`}>
                <div className="shoe-container">
                  <Card className={classes.card}>
                    <img src={shoe.img} alt={shoe.name} height="150" />
                  </Card>
                  <h4>{shoe.name}</h4>
                </div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
