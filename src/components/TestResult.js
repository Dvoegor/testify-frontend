import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosURL from "./config.json";
import Container from "@material-ui/core/Container";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

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

  const URL = axiosURL.axiosURL;

  const [loading, setLoading] = useState(true);
  const [testsList, setTestsList] = useState(true);

  const { id } = useParams();
  const testId = id;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL + "/profile", {
        params: {
          testId: testId,
        },
      });
    //   const testsArr = result.data.reverse();
    //   setTestsList(testsArr);
    //   console.log(testsArr);
      setLoading(false);
    }

    fetchData().then();
  }, [URL, setTestsList, setLoading, testId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      <Container></Container>
    </div>
  );
}
