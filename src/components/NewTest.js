import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";

import Loader from './Loader';

import axios from "axios";
import axiosURL from "./config.json";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
});

export default function SimpleCard({testId}) {
  const classes = useStyles();

  const URL = axiosURL.axiosURL;
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  // console.log('resultObj')
  console.log(testId)

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL + "/questionList", {
        params: {
          testId: testId,
        },
      });
      setQuestionList(result.data)
      console.log(result.data)
      setLoading(false)
    }

    fetchData().then();
  }, [URL, testId, setLoading]);

  const host = window.location.host

  if (loading) {
    return <Container><Loader/></Container>
}
  return (
    <div>
      <div>
      <Typography variant="h3" component="h1" align="center" style={{ marginTop: 55 }}>
            Все готово, осталось лишь поделиться вашим тестом!
          </Typography>
      </div>
        <Container>
          <div style={{ marginTop: 50, textDecoration: "none" }}>
          <Link to="#" style={{ marginTop: 50, textDecoration: "none" }}>
          {host}/test/{testId}
          </Link>
          </div>
          <div style={{ marginTop: 50, textDecoration: "none" }}>
          <Link to="/" style={{ marginTop: 50, textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Вернуться в личный кабинет
            </Button>
          </Link>
          </div>
      </Container>
    </div>
  );
}
