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

export default function SimpleCard({newTestId}) {
  const classes = useStyles();

  const URL = axiosURL.axiosURL;
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  console.log('resultObj')
  console.log(newTestId)

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL + "/questionList", {
        params: {
            newTestId: newTestId,
        },
      });
    //   setList(result.data)
      setLoading(false)
    }

    fetchData().then();
  }, [URL, newTestId, setLoading]);


  if (loading) {
    return <Container><Loader/></Container>
}
  return (
    <div>
        {/* <Container>
      {resultObj.wordIds.map((item, index) => (
        <Card className={classes.root} style={{ marginBottom: 15 }}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {index + 1}
            </Typography>

            <Typography variant="h5" component="h1">
            <HelpOutlineIcon style={{ marginRight: 5, marginBottom: -3 }}/>{item.question}
            </Typography>
            <Typography variant="h4" component="h2">
            <ArrowForwardIosIcon style={{ marginRight: 0 }}/>{item.answer}
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ marginTop: 10 }}>
              {item.area}, {item.method}, {item.function}
            </Typography>
          </CardContent>
        </Card>
      ))}
      </Container> */}
    </div>
  );
}
