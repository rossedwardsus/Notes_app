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
import MenuItem from '@material-ui/core/MenuItem';
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
      //flexGrow: 1,
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
      //minWidth: 120,
      verticalAlign: "middle"
    },
}

//"match":{"path":"/budget/browse","url":"/budget/browse","isExact":true,"params":{}}}

interface Identifiable {id: string; }

//interface storeState {notes_reducer: {notes:any, tags: any}, budget_reducer: {items: any, tags: any}}
interface storeProps {classes: any, match: any, history: any, location: any, items: any, addItem: (description: any, category_name: any, date: any, amount: any) => {}}

interface budgetState {
    description: string, 
    category_name: string,
    amount: string, 
    selectedDate: any,
    tab_index: any,
}

export class Budget extends React.Component<storeProps, budgetState> {
  constructor(props: any) {
    super(props);
    this.state = {description: "", category_name: "", amount: "", selectedDate: new Date().toDateString(), tab_index: 0}
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

  handleTabChange = (e: any, newValue: any) => {

    alert(newValue);

    this.setState({tab_index: newValue});

  }

  addItem = () => {

    //alert(this.state.selectedDate);

    this.props.addItem(this.state.description, this.state.category_name, this.state.selectedDate, this.state.amount);

  }

  render(){
    //const classes = useStyles();
    const {items, classes, location} = this.props;
    const {description, category_name, amount, selectedDate, tab_index} = this.state;

    //map reduce mount
    const total_amount = items.reduce((sum: any, item: any) => { return sum + parseFloat(item.amount) }, 0) 

    //alert(JSON.stringify(total_amount.toFixed(2)));

    return (
          <div>
            <br/>
            <br/>
            <br/>
            <AppBar position="static">
              <Tabs value={location.pathname} onChange={this.handleTabChange} aria-label="simple tabs example">
                <Tab label="Add Item" value={"/budget/item/add"} component={Link} to="/budget/item/add"/>
                <Tab label="Add Item Category" value={"/budget/category/add"} component={Link} to="/budget/category/add"/>
                <Tab label="Browse Budget" value={"/budget/browse"} component={Link} to="/budget/browse"/>
              </Tabs>
            </AppBar>
            <br/>
            <br/>
            Total
            <br/>
            {total_amount.toFixed(2)}
            <br/>
            <br/>
            from date time date
            <br/>
            <br/>
            Add Budget Item-use popup instead-has to work that way on mobile anyway
            <br/>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-name"
                  label="Description"
                  value={description}
                  onChange={(e) => this.changeDescription(e)}
                  margin="normal"
                />
              </FormControl>
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
                </Select>
              </FormControl>
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
              <FormControl className={classes.formControl}>
             
              <TextField
                id="standard-name"
                label="Amount"
                value={amount}
                onChange={(e) => this.changeAmount(e)}
                margin="normal"
              />
              </FormControl>
            <br/>
            <br/>
            <br/>
            <Button disabled={false} onClick={() => this.addItem()}>Add Item</Button>
            <br/>
            Sort
            <br/>
            Budget-Daily-Weekly-By prooject
            <br/>
            Description-Datetime-Amount
            <br/>
            Grocery Shopping-date-amount spent
            <br/>
            Upwork credits-date-amount spent
            <br/>
            Car registration
            <br/>
            <br/>
            <Grid container spacing={2}>
                {items.map((item: any) => <div key={item}><Grid item md={4}>{item.description}</Grid><Grid item md={4}>{item.date}</Grid><Grid item md={4}>{item.amount}</Grid></div>)}
            </Grid>
            <br/>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Amount($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item: any) => (
                  <TableRow key={item.description}>
                    <TableCell component="th" scope="row">
                      {item.description}
                    </TableCell>
                    <TableCell align="right">{item.date}</TableCell>
                    <TableCell align="right">{"$" + parseFloat(item.amount).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
      );
  }
}

//export default AddNote;

const mapStateToProps = (state: any,  ownProps: storeProps) => {
  //alert(JSON.stringify(state.budget_reducer.items));
  //alert(JSON.stringify(ownProps));

  return {
//    todos: getVisibleTodos(state.todos, state.visibilityFilter)
      items: state.budget_reducer.items,
      //notes: state.notes_reducer.notes
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

const BudgetConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget)

//export default BrowseBudgetConnected
export default withStyles(styles)(BudgetConnected);

