import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Table from "./Table";
import List from "./List";
import Settings from "./Settings";
import Loader from "./Loader";
import NewTest from "./NewTest";

import axios from "axios";
import axiosURL from "./config.json";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Выберите записи",
        "Посмотрите на выбранные записи",
        "Выберите настройки для теста",
    ];
}

export default function HorizontalLabelPositionBelowStepper({profileId, sendnewTestIdToParent}) {
    const [idArr, setIdArr] = React.useState([]);
    const [settings, setSettings] = React.useState({});
  const [testId, setTestId] = React.useState(0);

    const sendIdsToParent = (index) => {
        // the callback. Use a better name
        setIdArr(index);
    };

    const sendSettingsToParent = (index) => {
        // the callback. Use a better name
        setSettings(index);
    };

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <Table sendIdsToParent={sendIdsToParent}/>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <List idArr={idArr}/>
                    </div>
                );
            case 2:
                return <Settings sendSettingsToParent={sendSettingsToParent}/>;
            default:
                return <Loader/>;
        }
    }

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    const handleFinish = (event) => {
        // вот тут два запроса отправляются, надо фиксить
        async function fetchData() {
            const result = await axios.post(URL + "/createTest", {
                profileId: profileId.id,
                testName: settings.name,
                idArr: idArr,
            });
            // console.log(result.data.testId)
            // sendResultObjToParent(result.data)
          setTestId(result.data.testId)
            console.log(typeof testId)
        }

        fetchData()
            .then(function (response) {
                sendnewTestIdToParent(testId)
                // window.location.href = `/new-test/${testId}`
            })
            .catch(function (error) {
                console.log(error);
            });
        // .then(data => {
        //   console.log(data)
        //   // window.location.href = `/new-test/${data.testId}`
        // }
        // );
        // setActiveStep(0);
        event.preventDefault();
    };
    // console.log(testId)

    if (testId !== 0) {
      // NewTest
      return <NewTest testId={testId}/>
    }
    const URL = axiosURL.axiosURL;

    return (
        <div className={classes.root}>
            {/*<Typography>Создание теста</Typography>*/}
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    alignContent="center"
                    justify="center"
                    style={{marginBottom: 20, marginTop: 10}}
                >
                    <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                        >
                            Назад
                        </Button>
                        {activeStep === steps.length - 1 ? (
                            <Button variant="contained" color="primary" type="submit" onClick={handleFinish}>
                                Создать тест
                            </Button>
                        ) : (
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                Дальше
                            </Button>
                        )}

                        {/*
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Создать тест" : "Дальше"}
            </Button> */}
                    </div>
                </Grid>
                <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                </Typography>
            </div>
        </div>
    );
}
