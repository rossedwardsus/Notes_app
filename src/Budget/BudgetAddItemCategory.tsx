import React from 'react';
import logo from './logo.svg';
import '../App.css';

import { connect } from 'react-redux'
import { Dispatch, Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk';

import {
    BrowserRouter as Router,
    Route,
    Link,
    match,
    RouteProps,
    RouteComponentProps
} from 'react-router-dom';
import { History } from 'history';

import { makeStyles } from '@material-ui/core/styles';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';



import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { addItemCategory } from '../Actions/budget_actions';


//import axios from 'axios';

//import { Link } from "react-router-dom";

/*const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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
  table: {
    minWidth: 650,
  },
}));*/

const styles = {
  root: {
      flexGrow: 1,
    },
    textField: {
      //marginLeft: theme.spacing(1),
      //marginRight: theme.spacing(1),
      width: 200,
    },
    paper: {
      height: 140,
      width: 100,
    },
    menuButton: {
      //marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    table: {
      minWidth: 650,
    },
}

//"match":{"path":"/budget/browse","url":"/budget/browse","isExact":true,"params":{}}}

interface Identifiable {id: string; }

//interface storeState {notes_reducer: {notes:any, tags: any}, budget_reducer: {items: any, tags: any}}
interface storeProps {match: any, history: any, location: any, item_categories: any, addItemCategory: (category_name: any) => {}}

interface budgetState {
    category_name: string, 
}

export class BudgetAddItemCategory extends React.Component<storeProps, budgetState> {
  constructor(props: any) {
    super(props);
    this.state = {category_name: ""}
  }

  changeCategoryName = (e: any) => {

    //alert(e.target.value)

    this.setState({category_name: e.target.value});

  }

  addItemCategory = () => {

    //alert(this.state.selectedDate);

    this.props.addItemCategory(this.state.category_name);

  }

  render(){
    //const classes = useStyles();
    const {item_categories, location} = this.props;
    const {category_name} = this.state;

    //map reduce mount
  
    return (
          <div>
             <AppBar position="static">
              <Tabs value={location.pathname} onChange={() => {}} aria-label="simple tabs example">
                <Tab label="Add Item" value={"/budget/item/add"} component={Link} to="/budget/item/add"/>
                <Tab label="Item Category" value={"/budget/category/add"} component={Link} to="/budget/category/add"/>
                <Tab label="Budget" value={"/budget/browse"} component={Link} to="/budget/browse"/>
              </Tabs>
            </AppBar>
            <br/>
            <br/>
            Add Budget Category
            <br/>
            <FormGroup row>
              <TextField
                id="standard-name"
                label="Category Name"
                value={category_name}
                onChange={(e) => this.changeCategoryName(e)}
                margin="normal"
              />
            </FormGroup>
            <br/>
            Categories
            <br/>
            {item_categories.map((category: any) => <div>{category.name}</div>)}
            <br/>
            <Button disabled={false} onClick={() => this.addItemCategory()}>Add Item Category</Button>
        </div>
      );
  }
}

//export default AddNote;

const mapStateToProps = (state: any,  ownProps: storeProps) => {
  alert(JSON.stringify(state.budget_reducer.item_categories));
  //alert(JSON.stringify(ownProps));

  return {
//    todos: getVisibleTodos(state.todos, state.visibilityFilter)
      items: state.budget_reducer.items,
      //notes: state.notes_reducer.notes
      item_categories: state.budget_reducer.item_categories
  }
}

//state, e, actiontypes
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => {

//const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    addItemCategory(category_name: any){
      dispatch(addItemCategory(category_name))
    }
  }
}

const BudgetAddItemCategoryConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetAddItemCategory)

//export default BrowseBudgetConnected
export default withStyles(styles)(BudgetAddItemCategoryConnected);

