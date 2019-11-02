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

import { addNote } from './actions';


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
    this.state = {title: "", note: ""}
  }

  changeTitle = (e: any) => {

    //alert(e.target.value)

    this.setState({title: e.target.value});

  }

  changeNote = (e: any) => {

    this.setState({note: e.target.value});

  }

  addNote = () => {

    //alert("add");

    this.props.addNote(this.state.title, this.state.note);

  }

  render(){
    //const classes = useStyles();
    const {notes} = this.props;
    const {title} = this.state

    return (
          <div>
            <br/>
            Add Budget Item
            <br/>
            <FormGroup row>
              <TextField
                id="standard-name"
                label="Description"
                value={tag}
                onChange={(e) => this.changeTag(e)}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Datetime"
                value={tag}
                onChange={(e) => this.changeTag(e)}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Amount"
                value={tag}
                onChange={(e) => this.changeTag(e)}
                margin="normal"
              />
            </FormGroup>
            <br/>
            <br/>
            <br/>
            <Button disabled={false} onClick={() => this.addTag()}>Add Item</Button>

            <br/>
            Sort
            <br/>
            Budget-Daily-Weekly-By prooject
            <br/>
            Description-Datetime-Amount
            <br/>
            Grocery Shopping-date-amount spent
            <br>
            Upwork credits-date-amount spent
            <br/>
            Car registration
            <br/>
            <br/>
            {notes.map((note: any) => <div><Link to="/notes/1">{note.title}</Link></div>)}
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
    addNote(title: any, note: any){
      dispatch(addNote(title, note))
    }
  }
}

const BrowseBudgetConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseBudget)

export default BrowseBudgetConnected

