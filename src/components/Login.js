import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import LoginLogo from "../Login-rafiki.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function ValidationTextFields() {
    const classes = useStyles();

    return (
        <Grid container spacing={0} alignItems="center" alignContent="center" justify="center">
            {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
            <Grid item xs={12} sm={6} alignItems="center" alignContent="center" justify="center">
                <img src={LoginLogo} alt="Main Logo"/>

            </Grid>
            <Grid item xs={12} sm={6} alignItems="center" alignContent="center" justify="center">
                <Grid container spacing={0} alignItems="center" alignContent="center" justify="center"
                      >
                <form className={classes.root} noValidate="false" autoComplete="off">
                    <div>
                        <TextField id="standard-error" label="E-mail" helperText="Введите e-mail" type="email" required/>
                    </div>
                    <div>
                        <TextField id="standard-error" label="Пароль" helperText="Введите пароль" type="password" required/>
                    </div>
                    <div>
                        <Grid container spacing={0} alignItems="center" alignContent="center" justify="center"
                        >
                            <Button variant="contained" color="primary" style={{marginTop: 15}}>
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
