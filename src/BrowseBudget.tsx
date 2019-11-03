import React from 'react';
import logo from './logo.svg';
import './App.css';

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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { addItem } from './budget_actions';


//import axios from 'axios';

//import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
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
}));

//"match":{"path":"/budget/browse","url":"/budget/browse","isExact":true,"params":{}}}

interface Identifiable {id: string; }

//interface storeState {notes_reducer: {notes:any, tags: any}, budget_reducer: {items: any, tags: any}}
interface storeProps {match: any, history: any, location: any, items: any, addItem: (description: any, date: any, amount: any) => {}}

interface budgetState {
    description: string, 
    amount: string, 
    selectedDate: any
}

class BrowseBudget extends React.Component<storeProps, budgetState> {
  constructor(props: any) {
    super(props);
    this.state = {description: "", amount: "", selectedDate: new Date().toDateString()}
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

  addItem = () => {

    //alert(this.state.selectedDate);

    this.props.addItem(this.state.description, this.state.selectedDate, this.state.amount);

  }

  render(){
    //const classes = useStyles();
    const {items} = this.props;
    const {description, amount, selectedDate} = this.state;

    //map reduce mount
    const total_amount = items.reduce((sum: any, item: any) => { return sum + parseFloat(item.amount) }, 0) 

    //alert(JSON.stringify(total_amount.toFixed(2)));

    return (
          <div>
            <br/>
            <br/>
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
            Add Budget Item
            <br/>
            <FormGroup row>
              <TextField
                id="standard-name"
                label="Description"
                value={description}
                onChange={(e) => this.changeDescription(e)}
                margin="normal"
              />
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
              <TextField
                id="standard-name"
                label="Amount"
                value={amount}
                onChange={(e) => this.changeAmount(e)}
                margin="normal"
              />
            </FormGroup>
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
            {items.map((item: any) => <div>{item.description}{item.date}{item.amount}</div>)}
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
    addItem(description: any, date: any, amount: any){
      dispatch(addItem(description, date, amount))
    }
  }
}

const BrowseBudgetConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseBudget)

export default BrowseBudgetConnected

