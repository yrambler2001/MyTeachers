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
import MaterialTeacherForm from './MaterialTeacherForm';

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
  // handleEdit = (e) => {
  //     this.setState({ open: false });
  //     teachers.reset();
  //     rerender();
  // };


  render() {
    return (
      <div>
        <Button variant="contained"  onClick={this.handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit</DialogTitle>
          <DialogContent>
            <MaterialTeacherForm items={this.props.items} scenario='edit' handleClose={this.handleClose} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button form='form' type="submit" color="primary">
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
