import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LoginLogo from "../Login-rafiki.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import axios from "axios";
import axiosURL from "./config.json";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  const URL = axiosURL.axiosURL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    async function postData() {
      await axios
        .post(URL + "/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          // console.log(response.headers)
            const token = response.headers["auth-token"]
            // const isAdmin = response.headers["admin"]
            if (token) {
                document.cookie = `auth-token=${token}`
                // document.cookie = `admin=${isAdmin}`
                window.location.href = '/'
            }
        //   setMessage(response.data);
        //   setOpen(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    postData();

    event.preventDefault();
  }

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      alignContent="center"
      justify="center"
    >
      {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
      <Grid
        item
        xs={12}
        sm={6}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <img src={LoginLogo} alt="Main Logo" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Grid
          container
          spacing={0}
          alignItems="center"
          alignContent="center"
          justify="center"
        >
          <form className={classes.root} noValidate="false" autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <TextField
                helperText="Введите e-mail"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                helperText="Введите пароль"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Grid
                container
                spacing={0}
                alignItems="center"
                alignContent="center"
                justify="center"
              >
                <Button
                type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 15 }}
                >
                  Войти
                </Button>
              </Grid>
            </div>
          </form>
        </Grid>
      </Grid>

      {/*<Button variant="outlined" color="secondary">*/}
      {/*    Secondary*/}
      {/*</Button>*/}
      {/*<Button variant="contained" color="primary">*/}
      {/*    Primary*/}
      {/*</Button>*/}

      {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
    </Grid>
  );
}
