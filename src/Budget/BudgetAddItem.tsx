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

import { addItem } from '../Actions/budget_actions';


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
    formControl: {
      margin: 10,
      //margin: theme.spacing(1),
      minWidth: 200,
      verticalAlign: "middle"
    },
}

//"match":{"path":"/budget/browse","url":"/budget/browse","isExact":true,"params":{}}}

interface Identifiable {id: string; }

//interface storeState {notes_reducer: {notes:any, tags: any}, budget_reducer: {items: any, tags: any}}
interface storeProps {classes: any, match: any, history: any, location: any, items: any, item_categories: any, addItem: (description: any, category_name: any, date: any, amount: any) => {}}

interface budgetState {
    description: string, 
    category_name: string,
    amount: string, 
    selectedDate: any
}

export class BudgetAddItem extends React.Component<storeProps, budgetState> {
  constructor(props: any) {
    super(props);
    this.state = {description: "", category_name: "", amount: "", selectedDate: new Date().toDateString()}
  }

  changeDescription = (e: any) => {

    //alert(e.target.value)

    this.setState({description: e.target.value});

  }

  changeDatetime = (e: any) => {

    this.setState({selectedDate: e.target.value});

  }

  changeAmount = (e: any) => {

    this.setState({amount: e.target.value});

  }

  handleDateChange = (e: any) => {

    //alert(e)

    this.setState({selectedDate: e});

  }

  handleCategoryNameChange = (e: any) => {

    alert(e.target.value)

    this.setState({category_name: e.target.value});

  }

  addItem = () => {

    //alert(this.state.selectedDate);

    this.props.history.push("/budget/browse");

    //this.props.addItem(this.state.description, this.state.category_name, this.state.selectedDate, this.state.amount);

  }

  render(){
    //const classes = useStyles();
    const {classes, item_categories, location} = this.props;
    const {description, category_name, amount, selectedDate} = this.state;

    //map reduce mount
  
    return (
          <div>
            <AppBar position="static">
              <Tabs value={location.pathname} onChange={() => {}} aria-label="simple tabs example">
                <Tab label="Add Item" value={"/budget/item/add"} component={Link} to="/budget/item/add"/>
                <Tab label="Item Categories" value={"/budget/category/add"} component={Link} to="/budget/category/add"/>
                <Tab label="Budget" value={"/budget/browse"} component={Link} to="/budget/browse"/>
              </Tabs>
            </AppBar>
            <br/>
             Add Budget Item-use popup instead-has to work that way on mobile anyway
            <br/>
            <FormGroup row={false}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-name"
                  label="Description"
                  value={description}
                  onChange={(e) => this.changeDescription(e)}
                  margin="normal"
                />
              </FormControl>
              <br/>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="Category">Category</InputLabel>
                <Select
                  native
                  value={category_name}
                  onChange={(e: any) => this.handleCategoryNameChange(e)}
                  inputProps={{
                    name: 'Category',
                    id: 'age-simple',
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                  {item_categories.map((category: any) => <option>{category.name}</option>)}
                </Select>
              </FormControl>
              <br/>
             <FormControl className={classes.formControl}>
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                 <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
              <br/>
              <FormControl className={classes.formControl}>
              <TextField
                id="standard-name"
                label="Amount"
                value={amount}
                onChange={(e) => this.changeAmount(e)}
                margin="normal"
              />
              </FormControl>
            </FormGroup>
            <br/>
            <Button disabled={false} onClick={() => this.addItem()}>Add Item</Button>
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
    addItem(description: any, category_name: any, date: any, amount: any){
      dispatch(addItem(description, category_name, date, amount))
    }
  }
}

const BudgetAddItemConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetAddItem)

//export default BrowseBudgetConnected
export default withStyles(styles)(BudgetAddItemConnected);

