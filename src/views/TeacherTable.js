import React, { Component } from 'react';
import TableRow from '../components/TableRow'
class TeacherTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return (
            <div>
                <table>
                <thead> <TableRow items={['Name', 'Surname', 'Phone', 'Subject', 'Notes']} /> </thead>
                <tbody> 
                    {this.props.table.map(x => 
                    <TableRow items={[x.name, x.surname, x.phone, x.subject, x.notes]} />)}
                    </tbody> 
                </table>
            </div>
        );
    }
}
export default TeacherTable