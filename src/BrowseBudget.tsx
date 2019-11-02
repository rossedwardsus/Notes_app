import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

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


import { addItem } from './budget_actions';


//import axios from 'axios';

import { Link } from "react-router-dom";

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

class BrowseBudget extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {description: "", amount: ""}
  }

  changeDescription = (e: any) => {

    //alert(e.target.value)

    this.setState({description: e.target.value});

  }

  changeAmount = (e: any) => {

    this.setState({amount: e.target.value});

  }

  addItem = () => {

    //alert("add");

    this.props.addNote(this.state.description, this.state.amount);

  }

  render(){
    //const classes = useStyles();
    const {items} = this.props;
    const {description, amount} = this.state;

    return (
          <div>
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
              <TextField
                id="standard-name"
                label="Datetime"
                value={amount}
                onChange={(e) => this.changeAmount(e)}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Amount"
                value={"tag"}
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
            {items.map((item: any) => <div>{item.description}</div>)}
        </div>
      );
  }
}

//export default AddNote;

const mapStateToProps = (state: any) => {
  alert(JSON.stringify(state));

  return {
//    todos: getVisibleTodos(state.todos, state.visibilityFilter)
      notes: state.notes
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem(description: any, amount: any){
      dispatch(addItem(description, amount))
    }
  }
}

const BrowseBudgetConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseBudget)

export default BrowseBudgetConnected

