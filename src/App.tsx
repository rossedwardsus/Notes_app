import React, { useState } from 'react';
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
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Hidden from '@material-ui/core/Hidden';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from 'react-redux'

//import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import AddNote from "./Notes/AddNote";
import BrowseNotes from "./Notes/BrowseNotes";
import Note from "./Notes/Note";

import AddTag from "./Notes/AddNoteTag";
import BrowseTags from "./Notes/BrowseNoteTags";

import Budget from "./Budget/Budget";
import BudgetAddItemCategory from "./Budget/BudgetAddItemCategory";
import BudgetAddItem from "./Budget/BudgetAddItem";


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
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    color: "green"
  },
  action: {
    color: "green",
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


const App: React.FC = (props: any) => {
  const classes = useStyles();
  const {tags} = props; 
  const [value, setValue] = useState(0)
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
              <Button color="inherit" component={props => <Link to="/signup" {...props}/>}>Signup</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item md={1}>
            </Grid>
            <Grid item md={2}>
                <br/>
                <br/>
                <Hidden smDown>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <br/>
                      Notes/bill reminder/budger tracker
                      <br/>
                      Move into left menu component
                      <br/>
                      add paper
                      <br/>
                      better links
                      <br/>
                      <li>
                        <Link to="/notes/browse">Browse notes</Link>
                      </li>
                      <li>
                        <Link to="/notes/add">Add Note</Link>
                      </li>
                      <br/>
                      Tags
                      <br/>
                      <li>
                        <Link to="/tags/add">Add Tag</Link>
                      </li>
                      <li>
                        <Link to="/tags/browse">Browse tags</Link>
                      </li>
                      <br/>
                      {tags.map((tag: any) => <div><Link to={"/tags/" + tag}/>{tag}</div>)}
                      <br/>
                      <br/>
                      Budget
                      <br/>
                      <li>
                        <Link to="/budget/browse">Budget</Link>
                      </li>
                      <li>
                        <Link to="/budget/category/add">Add Budget Item Category</Link>
                      </li>
                      <li>
                        <Link to="/budget/category/car">Budget Items by Categories</Link>
                      </li>
                      <li>
                        <Link to="/budget/item/add">Budget Add Item</Link>
                      </li>
                    </ul>
                  </nav>
                </Hidden>
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
                  <Route exact path="/tags/add">
                      <AddTag/>
                  </Route>
                  <Route path="/tags/:tag" component={BrowseTags}>
                  </Route>
                  <Route path="/budget/browse" component={Budget}>
                  </Route>
                  <Route path="/budget/category/add" component={BudgetAddItemCategory}>
                  </Route>
                  <Route path="/budget/item/add" component={BudgetAddItem}>
                  </Route>
               </Switch>
               <Hidden smUp>
                  <Paper style={{backgroundColor: "green"}}>
                    <BottomNavigation
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      showLabels
                      className={classes.stickToBottom}
                    >
                      <BottomNavigationAction label="Notes" icon={<RestoreIcon />} component={Link} to="/notes/browse" />        
                      <BottomNavigationAction label="Budget" icon={<FavoriteIcon />} component={Link} to="/notes/add" />
                      <BottomNavigationAction label="Bills" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                  </Paper>
                </Hidden>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

//export default App;


const mapStateToProps = (state: any) => {
  //alert(JSON.stringify(state.notes_reducer.tags));

  return {
//    todos: getVisibleTodos(state.todos, state.visibilityFilter)
      tags: state.notes_reducer.tags
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNote(title: any, note: any){
      //dispatch(addNote(title, note))
    }
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppConnected