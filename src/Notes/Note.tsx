import React from 'react';
import logo from './logo.svg';
//import './App.css';

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
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


import { updateNote } from '../Actions/actions';
import { getNote } from '../selector_index'


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

export class Note extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {title: "", note: "", tags: [], checkedMoving: "checked"}
  }

  changeTitle = (e: any) => {

    //alert(e.target.value)

    this.setState({title: e.target.value});

  }

  componentDidMount = () => {

    //alert("mount");

    this.setState({title: this.props.note.title});
    this.setState({note: this.props.note.note});

  }

  componentWillReceiveProps = () => {

      alert("props");

  }

  changeNote = (e: any) => {

    this.setState({note: e.target.value});

  }

  handleChange = (e: any) => {

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

  updateNote = () => {

    alert(JSON.stringify(this.state.tags));

    //this.props.updateNote(this.state.title, this.state.note);

  }

  render(){
    //const classes = useStyles();
    const {match: { params }} = this.props;
    const {title, note, checkedMoving} = this.state

    return (
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
            note
            <br/>
            {params.note_id}
            <br/>
            {title}
            <br/>
            Tags:
            <br/>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox checked={checkedMoving} onChange={(e) => this.handleChange(e)} value="moving" />
                }
                label="Moving"
              />
            </FormGroup>
            <br/>
            <br/>
            <TextField
              id="standard-multiline-flexible"
              label="Note"
              multiline
              fullWidth
              rows="10"
              value={this.state.note}
              onChange={(e) => this.changeNote(e)}
              margin="normal"
            />
            <br/>
            <Button disabled={false} onClick={() => this.updateNote()}>Submit</Button>
        </div>
      );
  }
}

//export default AddNote;

const mapStateToProps = (state: any, ownProps: any) => {
  //alert(JSON.stringify(state));
  //alert(JSON.stringify(ownProps.match));
  //alert(getNote(state, 1));

  return {
//    todos: getVisibleTodos(state.todos, state.visibilityFilter)
      note: state.notes[ownProps.match.params.note_id-1]
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNote(title: any, note: any){
      dispatch(updateNote(title, note))
    }
  }
}

const NoteConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)

export default NoteConnected

