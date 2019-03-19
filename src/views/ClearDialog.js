import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import teachers from "../collections/teachers";
import rerender from '../index';

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangePass = this.handleChangePass.bind(this);
  }
  state = {
    valuePass: '',
    open: false,
  };

  handleChangePass(event) {
    this.setState({ valuePass: event.target.value });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleClear = (e) => {
    if (this.state.valuePass === "SUPERPASS") {
      this.setState({ open: false });
      teachers.reset();
      rerender();
    }
  };


  render() {
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
          Clear all
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Clear all</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To clear all teachers, please enter your password here. TODO: Wrong password warning.
            </DialogContentText>
            <TextField
              onChange={this.handleChangePass}
              autoFocus
              margin="dense"
              id="name"
              label="Password (`SUPERPASS`)"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClear} color="primary">
              Clear
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
