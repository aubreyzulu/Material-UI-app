import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText } from '@material-ui/core'
import { ListItemSecondaryAction, IconButton } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import './App.css';

class App extends Component {
  state = {
    exercises: [
      { id: 1, title: 'Bench Press' },
      { id: 2, title: 'Deadlift' },
      { id: 3, title: 'Squats' }],
    title: ''
  }

  handleCreate = (e) => {
    e.preventDefault();
    if (this.state.title) {
      this.setState(({ exercises, title }) => (
        { exercises: [...exercises, { title, id: Date.now() }], title: '' }))
    }
  }
  handleDelete = id => {
    this.setState(({ exercises }) => ({ exercises: exercises.filter(ex => ex.id !== id) }))
  }


  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  render() {
    const { title, exercises } = this.state
    console.log(this.state)
    return (
      <Paper>
        <form onSubmit={this.handleCreate}>
          <TextField
            name='title'
            label='Exercise'
            value={title} onChange={this.handleChange} />
          <Button type='submit' color='primary' variant='outlined'>CREATE</Button>
        </form>
        <List>
          {exercises.map(({ id, title }) =>
            <ListItem key={id}>
              <ListItemText primary={title} />
              <ListItemSecondaryAction>
                <IconButton
                  color='primary'
                  onClick={() => this.handleDelete(id)} ><Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)}</List>
      </Paper>
    )


  }
}



export default App;
