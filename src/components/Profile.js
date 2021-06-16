import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

// const preventDefault = (event) => event.preventDefault();

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Link
          to="/create-test"
          style={{ marginTop: 30, textDecoration: "none" }}
        >
          <Button variant="contained" color="secondary">
            Создать тест
          </Button>
        </Link>
      </Grid>
    </div>
  );
}
