import React from 'react';
import TableRow from '../components/TableRow'
import teachers from '../collections/teachers'
import rerender from '../index';
import ClearDialog from './ClearDialog'
import AddDialog from './AddDialog'


import "./TeacherTable.css"
class TeacherTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    checkedSet = new Set();
    handleButtonClick = (e, ee) => {
        console.log(this.checkedSet);
        this.checkedSet.forEach(x => teachers.remove(x));
        this.checkedSet.clear();
        rerender();
        // teachers.remove(this.props.id); 
        // rerender()
    }
    render() {
        return (
            <div className="container1">
                <table>
                    <thead><TableRow items={['Name', 'Surname', 'Phone', 'Subject', 'Notes','']}/></thead>
                    <tbody>
                        {teachers.items.map(x => { return <TableRow key={x._id} checkedSet={this.checkedSet} id={x._id} items={x} /> })}
                    <tr>
                        <th><button id={this.props.id} type="button" onClick={this.handleButtonClick}>Delete</button></th>
                        <th><ClearDialog /></th>
                        <th><AddDialog /></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TeacherTable