import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import RegisterLogo from "../Mobile login-amico.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid container spacing={0} alignItems="center" alignContent="center" justify="center">
            <Grid item xs={12} sm={6} alignItems="center" alignContent="center" justify="center">
                <img src={RegisterLogo} alt="Main Logo"/>
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center" alignContent="center" justify="center">
                <Grid container spacing={0} alignItems="center" alignContent="center" justify="center">
                    <form className={classes.root} noValidate="false" autoComplete="off">
                        <div>
                            <TextField id="standard-error" label="Имя" helperText="Введите имя" type="text" required/>
                        </div>
                        <div>
                            <TextField id="standard-error" label="Фамилия" helperText="Введите фамилию" type="text" required/>
                        </div>
                        <div>
                            <TextField id="standard-error" label="E-mail" helperText="Введите e-mail" type="email" required/>
                        </div>
                        <div>
                            <TextField id="standard-error" label="Пароль" helperText="Введите пароль" type="password" required/>
                        </div>
                        <div>
                            <FormControl component="fieldset" style={{marginTop: 15, marginLeft: 10}} required>
                                <FormLabel component="legend">Роль</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="student" control={<Radio />} label="Студент" />
                                    <FormControlLabel value="teacher" control={<Radio />} label="Учитель" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <Grid container spacing={0} alignItems="center" alignContent="center" justify="center">
                                <Button variant="contained" color="secondary" style={{marginTop: 15, marginBottom: 25}}>
                                    Регистрация
                                </Button>
                            </Grid>

                        </div>
                    </form>
                </Grid>
            </Grid>
        </Grid>

    );
}
