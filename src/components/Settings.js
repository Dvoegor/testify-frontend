import React from "react";
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

export default function ValidationTextFields() {
  const classes = useStyles();

  const [name, setName] = React.useState([]);
//   const [time, setTime] = React.useState([]);

  function handleSubmit(event) {
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
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // onChange={handleChange('amount')}
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
                Войти
              </Button>
            </Grid>
          </div>
        </form>
        </FormControl>
      </Grid>
    </Grid>
  );
}



// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: '25ch',
//   },
// }));

// export default function InputAdornments() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className={classes.root}>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="standard-start-adornment"
//           className={clsx(classes.margin, classes.textField)}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
//           }}
//         />
//         <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
//           <Input
//             id="standard-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//             aria-describedby="standard-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl className={clsx(classes.margin, classes.textField)}>
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth className={classes.margin}>
//           <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//           <Input
//             id="standard-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="filled-start-adornment"
//           className={clsx(classes.margin, classes.textField)}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
//           }}
//           variant="filled"
//         />
//         <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
//           <FilledInput
//             id="filled-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//             aria-describedby="filled-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
//           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
//           <FilledInput
//             id="filled-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth className={classes.margin} variant="filled">
//           <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
//           <FilledInput
//             id="filled-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           className={clsx(classes.margin, classes.textField)}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
//           }}
//           variant="outlined"
//         />
//         <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//             aria-describedby="outlined-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//             labelWidth={0}
//           />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             labelWidth={70}
//           />
//         </FormControl>
//         <FormControl fullWidth className={classes.margin} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             labelWidth={60}
//           />
//         </FormControl>
//       </div>
//     </div>
//   );
// }