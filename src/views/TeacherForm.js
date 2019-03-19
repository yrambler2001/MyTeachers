import React from 'react';

import rerender from '../index';
//TODO: update only table
import teachers from "../collections/teachers";
import './TeacherForm.css'


class TeacherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueName: '', valueSurname: '', valuePhone: '', valueSubject: '', valueNotes: '' };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeNotes = this.handleChangeNotes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ valueName: event.target.value });
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

    console.log(teachers.items)
    // const postId = db    .get('posts')    .push({ id: shortid.generate(), title: 'low!' })    .write()    .id
    let teacher = {
      name: this.state.valueName, surname: this.state.valueSurname,
      phone: this.state.valuePhone, subject: this.state.valueSubject, notes: this.state.valueNotes
    };
    teachers.insert(teacher);

    //console.log(this.state.valueName);
    // this.props.update.setState(this.props.update.state)
    //console.log(this.props.update)
    rerender(); //TODO: update only table
    //teacherTable.setState(TeacherTable.state);
  }

  render() {
    return (
      //TODO: incapsulate.
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label>Name</label>
            </div>
            <div className="col-75">
              <input type="text" value={this.state.valueName} onChange={this.handleChangeName} required /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Surname</label>
            </div>
            <div className="col-75">
              <input type="text" value={this.state.valueSurname} onChange={this.handleChangeSurname} required /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Phone</label>
            </div>
            <div className="col-75">
              <input type="tel" value={this.state.valuePhone} onChange={this.handleChangePhone} pattern='\+380\d{9}' /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Subject</label>
            </div>
            <div className="col-75">
              <input type="text" value={this.state.valueSubject} onChange={this.handleChangeSubject} required /><br />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Notes</label>
            </div>
            <div className="col-75">
              <textarea value={this.state.valueNotes} onChange={this.handleChangeNotes} /><br />
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default TeacherForm