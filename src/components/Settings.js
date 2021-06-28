import 'date-fns';
import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,} from '@material-ui/pickers';
import moment from 'moment';
import 'moment-timezone';

moment().format();
// moment().tz("America/Los_Angeles").format();

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function ValidationTextFields({sendSettingsToParent}) {
    const classes = useStyles();

    const defaultDateTime = moment(new Date()).tz("America/Los_Angeles").add(10, 'hours').format('YYYY-MM-DDTHH:mm')
    const [name, setName] = React.useState([]);
    const [selectedDateTime, setSelectedDateTime] = React.useState(defaultDateTime);
    const [selectedTime, setSelectedTime] = React.useState(20);

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    function handleSubmit(event) {
        sendSettingsToParent({name: name, selectedTime: selectedTime, selectedDateTime: selectedDateTime})
      // console.log(selectedTime)
      // console.log(selectedDate)

        event.preventDefault();
    }

    // console.log(moment())
    // const defaultDate = moment().tz("America/Los_Angeles").add(10, 'hours').format();

    console.log(defaultDateTime)

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
                                labelWidth={120}
                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <TextField
                                        id="standard-number"
                                        label="Number"
                                        type="number"
                                        defaultValue={20}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                    />
                                    <TextField
                                        id="datetime-local"
                                        label="Next appointment"
                                        type="datetime-local"
                                        // defaultValue="2017-05-24T10:30"
                                        defaultValue={defaultDateTime}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(e) => setSelectedDateTime(e.target.value)}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
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
                                    style={{marginTop: 15}}
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

