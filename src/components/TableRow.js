import React from 'react';
import teachers from "../collections/teachers";
import rerender from '../index';


class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    getItems() {
        return this.props.items.map(x => {
            return <th>{x}</th>
        })
    }
    handleButtonClick = (e,ee) => {console.log(this.props.id);
        teachers.remove(this.props.id);
    rerender()}
    render() {
        return (
            <tr>
                {this.getItems()}
                {this.props.id ? (<button id={this.props.id} type="button" onClick={this.handleButtonClick}>Delete</button>) : ""}
            </tr>
        );
    }
}
export default TableRow