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
//import Checkbox from '@material-ui/core/Checkbox';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import { addNote } from './actions';


//import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

export class AddNote extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {title: "", note: "", checkedMoving: true, checkedReact: true}
  }

  changeTitle = (e: any) => {

    //alert(e.target.value)

    this.setState({title: e.target.value});

  }

  changeNote = (e: any) => {

    this.setState({note: e.target.value});

  }

  handleChange = (e: any) => {

    //this.setState({[e]: true});

    alert(e.target.value);

    if(this.state.checkedMoving == "checked"){

        this.setState({checkedMoving: ""});
        //this.state.tags.pop(e)
        let tags_temp = this.state.tags;
        let index = tags_temp.indexOf(e.target.value);
        tags_temp.splice(index, 1);

        this.setState({tags: tags_temp.splice(index, 1)})

    }else{

        this.setState({checkedMoving: "checked"});
        //this.state.tags.push(e)

        let tags_temp = this.state.tags;
        tags_temp[tags_temp.length] = e.target.value;

        this.setState({tags: tags_temp})
    }

  }

  addNote = () => {

    //alert("add");

    this.props.addNote(this.state.title, this.state.note);
    //clear text field
    // say note added!

  }

  render(){
    //const classes = useStyles();
    const {addNote} = this.props;
    const {title, checkedMoving, checkedReact} = this.state

    return (
          <div>
            <br/>
            <br/>
            Add note
            <br/>
            <TextField
              id="standard-name"
              label="Title"
              value={title}
              onChange={(e) => this.changeTitle(e)}
              margin="normal"
            />
            <br/>
            Tags
            <br/>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox checked={checkedMoving} onChange={() => this. handleChange('checkedMoving')} value="moving" />
                }
                label="Moving"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={checkedReact} onChange={() => this. handleChange('checkedReact')} value="react" />
                }
                label="React"
              />
            </FormGroup>
            <TextField
              id="standard-multiline-flexible"
              label="Note"
              multiline
              rows="5"
              value={this.state.note}
              onChange={(e) => this.changeNote(e)}
              margin="normal"
            />
            <br/>
            <br/>
            <Button disabled={false} onClick={() => this.addNote()}>Submit</Button>

        </div>
      );
  }
}

//export default AddNote;

const mapStateToProps = (state: any) => {
  //alert(JSON.stringify(state));

  return {
//    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNote(title: any, note: any){
      dispatch(addNote(title, note))
    }
  }
}

const AddNoteConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote)

export default AddNoteConnected

