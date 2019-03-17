import React, { Component } from 'react';
import App from '../App';
import TableRow from '../components/TableRow';
import TeacherTable from './TeacherTable';
import rerender from '../index';
//TODO: update only table

class TeacherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueName: '',valueSurname: '',valuePhone: '',valueSubject: '',valueNotes: '' };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeNotes = this.handleChangeNotes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({valueName: event.target.value });
  }
  handleChangeSurname(event) {
    this.setState({ valueSurname: event.target.value });
  }
  handleChangePhone(event) {
    this.setState({ valuePhone: event.target.value });
  }
  handleChangeSubject(event) {
    this.setState({ valueSubject: event.target.value });
  }
  handleChangeNotes(event) {
    this.setState({ valueNotes: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.state.value);

    App.a = App.a.concat({
      name: this.state.valueName, surname: this.state.valueSurname,
      phone: this.state.valuePhone, subject: this.state.valueSubject, notes: this.state.valueNotes
    });

    console.log(this.state.valueName);
    // this.props.update.setState(this.props.update.state)
    //console.log(this.props.update)
    rerender(); //TODO: update only table
    //teacherTable.setState(TeacherTable.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" value={this.state.valueName} onChange={this.handleChangeName} required/><br />
        <label>Surname</label>
        <input type="text" value={this.state.valueSurname} onChange={this.handleChangeSurname} required/><br />
        <label>Phone</label>
        <input type="tel" value={this.state.valuePhone} onChange={this.handleChangePhone} pattern='\+380\d{9}' /><br />
        <label>Subject</label>
        <input type="text" value={this.state.valueSubject} onChange={this.handleChangeSubject} required/><br />
        <label>Notes</label>
        <textarea value={this.state.valueNotes} onChange={this.handleChangeNotes} /><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default TeacherForm