import React from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

//import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import AddNote from "./AddNote";
import BrowseNotes from "./BrowseNotes";
import Note from "./Note";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const isAuthenticated = true;

//<PrivateRoute
//    path='/private'
//    isAuthenticated={this.props.state.session.isAuthenticated}
//    component={PrivateContainer}
///>

const PrivateRoute = ({ component: Component, isAuthenticated, ...props }: any) => {
  return (
    <Route
      {...props}
      render={(innerProps: any) =>
        isAuthenticated ? 
            <Note {...innerProps} />
            :
            <Redirect to="/" />
      }
    />
  );
};


const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <div >
          <AppBar position="static" style={{ margin: 0, position: "fixed" }}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Notes
              </Typography>
              <Button color="inherit" component={props => <Link to="/pets" {...props}/>}>Browse Notes</Button>
              <Button color="inherit" component={props => <Link to="/signup" {...props}/>}>Signup</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <br/>
          <Grid container spacing={2}>
            <Grid item md={1}>
            </Grid>
            <Grid item md={2}>
                <br/>
                <br/>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <br/>
                    <br/>
                    <li>
                      <Link to="/notes/browse">Browse notes</Link>
                    </li>
                    <li>
                      <Link to="/notes/add">Add Note</Link>
                    </li>
                    <li>
                      <Link to="/tags/add">Add Note</Link>
                    </li>
                    <br/>
                    <br/>
                    Moving
                    <br/>
                    React
                   </ul>
                </nav>
                <br/>
            </Grid>
            <Grid item md={8}>
               <Switch>
                  <Route exact path="/notes/add">
                      <AddNote/>
                  </Route>
                  <Route exact path="/notes/browse">
                      <BrowseNotes/>
                  </Route>
                  <Route path="/notes/:note_id" component={Note}>
                  </Route>
                  
               </Switch>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
