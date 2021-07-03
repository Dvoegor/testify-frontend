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
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
  const [questionList, setQuestionList] = useState( [["Another word for soccer", "Football", 1, 1], ["What do tennis players hit the ball over?", "Line", 1, 0]]);

  const { id } = useParams();
  const testId = id;

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(URL + "/testResult", {
  //       params: {
  //         testId: testId,
  //       },
  //     });
  //     setQuestionList(result.data);
  //     console.log(result.data)
  //     setLoading(false);
  //   }

  //   fetchData().then();
  // }, [URL, setLoading, testId]);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className={classes.root}>
      <Container>
      <Typography variant="h5" component="h2" align="left" style={{ marginBottom: 20, marginTop: 20}}>
                    Результат теста:
                    </Typography>
      {questionList.map((item, index) => (
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
            <HelpOutlineIcon style={{ marginRight: 5, marginBottom: -3 }}/>{item[0]}
            </Typography>
            <Typography variant="h4" component="h2">
            <ArrowForwardIosIcon style={{ marginRight: 0 }}/>{item[1]}
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ marginTop: 10 }}>
              Количество ответов: {item[2]}
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ marginTop: 10 }}>
              Количество правильных ответов: {item[3]}
            </Typography>
            <Typography variant="h6" component="h2">
            Локальный процент сложности вопроса: {(item[2] - item[3]) *100} % 
            </Typography>
          </CardContent>
        </Card>
      ))}
      </Container>
    </div>
  );
}
