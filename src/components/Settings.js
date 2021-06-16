import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LoginLogo from "../Login-rafiki.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function ValidationTextFields({sendSettingsToParent}) {
  const classes = useStyles();

  const [name, setName] = React.useState([]);
//   const [time, setTime] = React.useState([]);

  function handleSubmit(event) {
    sendSettingsToParent({name: name})

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
      <Grid
        item
        xs={12}
        sm={6}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
          <FormControl fullWidth className={classes.margin} variant="outlined">
        <form
          className={classes.root}
          noValidate="false"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
                   <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Название теста</InputLabel>
          <OutlinedInput
              fullWidth={200}
            id="outlined-adornment-amount"
            onChange={(e) => setName(e.target.value)}
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
          <div>
            <Grid
              container
              spacing={0}
              alignItems="center"
              alignContent="center"
              justify="center"
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: 15 }}
              >
                Сохранить настройки
              </Button>
            </Grid>
          </div>
        </form>
        </FormControl>
      </Grid>
    </Grid>
  );
}