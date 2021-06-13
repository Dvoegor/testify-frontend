import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'

// import Loader from "./Loader";
import MainLogo from "../QA engineers-bro.svg"
// import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const preventDefault = (event) => event.preventDefault();

export default function FullWidthGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/*<Container maxWidth="">*/}
            {/*<Loader/>*/}
            <Grid container spacing={0} alignItems="center" alignContent="center" justify="center">
                {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
                <Grid item xs={12} sm={6} alignItems="center" alignContent="center" justify="center">
                    <img src={MainLogo} alt="Main Logo"/>

                </Grid>
                <Grid item xs={12} sm={6} alignItems="center" alignContent="center" justify="center">
                    {/*<Paper className={classes.paper}>xs=12 sm=6</Paper>*/}
                    <Typography variant="h2" component="h1" align="center">
                        Testify
                    </Typography>
                    <Typography variant="h5" component="h2" align="center">
                        Лучший сервис для тестирования и опросов онлайн
                    </Typography>
                    <Grid container spacing={0} alignItems="center" alignContent="center" justify="center"
                          style={{marginTop: 15}}>

                            <Link to="/login" style={{marginRight: 10, textDecoration: 'none'}}>
                                <Button variant="contained" color="primary">
                                    Вход
                                </Button>
                            </Link>

                        {/*<Link href="#" onClick={preventDefault} color="inherit">*/}
                        {/*    {'color="inherit"'}*/}
                        {/*</Link>*/}
                        <Link to="/register" style={{marginLeft: 10, textDecoration: 'none'}}>
                            <Button variant="contained" color="secondary">
                                Регистрация
                            </Button>
                        </Link>

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
            {/*</Container>*/}
        </div>
    );
}
