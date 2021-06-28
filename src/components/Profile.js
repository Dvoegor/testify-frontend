import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom";
import axios from "axios";
import axiosURL from "./config.json";
import Container from '@material-ui/core/Container';
import Loader from './Loader';

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

export default function FullWidthGrid({profileId}) {
  const classes = useStyles();

  const URL = axiosURL.axiosURL;

  const [loading, setLoading] = useState(true);
  const [testsList, setTestsList] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(URL + "/profile", {
        params: {
          profileId: profileId.id,
        },
      });
      const testsArr = result.data.reverse()
      setTestsList(testsArr)
      console.log(testsArr)
      setLoading(false)
    }
  
    fetchData().then();
  }, [URL, setTestsList, setLoading, profileId]);

  if (loading) {
    return <Loader/>
}

  return (
    <div className={classes.root}>
      <Container>
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

      <Grid
        container
        spacing={1}
        // xs={6}
        // sm={3}
        // alignItems="center"
        // alignContent="center"
        // justify="center"
      >
              {testsList.map((item, index) => (
                      <Grid
                      item
                      xs={3}
                      sm={3}
                      // alignItems="center"
                      // alignContent="center"
                      // justify="center"
                    >
        <Card className={classes.root} style={{ marginBottom: 15 }}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              { index + 1}
              {/* {testsList.length()} */}
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ marginTop: 10 }}>
              {item.test_name}
            </Typography>
          </CardContent>
          <CardActions>
          <Link
          to={`/test-result/${item.id}`}
          style={{ marginTop: 30, textDecoration: "none" }}
        >
<Button size="small">Learn More</Button>
        </Link>
        
      </CardActions>
        </Card>
        </Grid>
      ))}
        {/* <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
      
      </Grid>
      </Container>
    </div>
  );
}

