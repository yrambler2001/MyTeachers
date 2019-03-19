import React from 'react';
import teachers from "../collections/teachers";
import rerender from '../index';


class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', isChecked: false };
    }
    getItems() {
        return this.props.items.map(x => {
            return <th>{x}</th>
        })
    }
    handleButtonClick = (e, ee) => {
        console.log(this.props.id);
        teachers.remove(this.props.id);
        rerender()
    }
    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
        if (!this.state.isChecked) //here state is same as before setState 
            this.props.checkedSet.add(this.props.id)
        else
            this.props.checkedSet.delete(this.props.id)
        console.log(this.props.checkedSet);
    }
    render() {
        return (
            <tr>
                {this.props.id ? (<input type="checkbox" id={this.props.id} onChange={this.toggleChange} autocomplete="off"/>) : <br />}
                {this.getItems()}
                {this.props.id ? (<button id={this.props.id} type="button" onClick={this.handleButtonClick}>Delete</button>) : <br />}
                {console.log(this)}
            </tr>
        );
    }
}
export default TableRow