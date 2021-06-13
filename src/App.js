import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import CreateTest from "./components/CreateTest";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";

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

function App() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/create-test">
            <CreateTest />
          </Route>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/login">
            {true ? <Login /> : <Redirect to="/auth" />}
          </Route>
          <Route path="/register">
            {true ? <Register /> : <Redirect to="/auth" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
