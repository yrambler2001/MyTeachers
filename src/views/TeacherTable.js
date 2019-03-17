import React from 'react';
import TableRow from '../components/TableRow'
import teachers from '../collections/teachers'
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
                        {teachers.items.map(x => { return <TableRow id={x._id} items={[x.name, x.surname, x.phone, x.subject, x.notes]} /> })}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TeacherTable