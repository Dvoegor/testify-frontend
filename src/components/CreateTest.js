import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Table from "./Table";
import List from "./List";
import Settings from "./Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

export default function HorizontalLabelPositionBelowStepper() {
  const [idArr, setIdArr] = React.useState([]);
  const [settings, setSettings] = React.useState({});

  const sendIdsToParent = (index) => { // the callback. Use a better name
    setIdArr(index);
  };

  const sendSettingsToParent = (index) => { // the callback. Use a better name
    setSettings(index);
  };

  console.log(settings)


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
              <List idArr={idArr} />
            </div>
        );
      case 2:
        return <Settings sendSettingsToParent={sendSettingsToParent}/>;
      default:
        return 'Unknown stepIndex';
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

  const handleReset = () => {
    setActiveStep(0);
  };

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
          {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
          ) : (
              <div>
                <Grid container spacing={0} alignItems="center" alignContent="center" justify="center" style={{marginBottom: 20, marginTop: 10}}>
                  <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </Grid>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              </div>
          )}
        </div>
      </div>
  );
}
