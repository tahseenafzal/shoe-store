import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core/";
import Shoe from "./../../shoes.json";
import { useParams } from "react-router-dom";

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
    height: "500px",
    boxSizing: "borderBox",
  },
}));

export default function ProductItem() {
  const { id } = useParams();
  const classes = useStyles();
  const shoeItem = Shoe[id];

  if (!shoeItem) {
    return <h2>Product Not Found (404)</h2>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <img src={shoeItem.img} alt={shoeItem.name} height="100%" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={`${classes.card} shoe-description`}>
            <h2>{shoeItem.name}</h2>
            <h4>Size: {shoeItem.size}</h4>
            <h4>Color: {shoeItem.color}</h4>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
