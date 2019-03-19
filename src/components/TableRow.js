import React from 'react';
import teachers from "../collections/teachers";
import rerender from '../index';
import EditDialog from '../views/EditDialog'
import Button from '@material-ui/core/Button';



class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', isChecked: false };
    }
    getItems() {
        if (Array.isArray(this.props.items))
            return this.props.items.map(x => <th>{x}</th>);
        return [
            <th>{this.props.items.name}</th>,
            <th>{this.props.items.surname}</th>,
            <th>{this.props.items.phone}</th>,
            <th>{this.props.items.subject}</th>,
            <th>{this.props.items.notes}</th>]
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
                <th>{this.props.id ? (<input type="checkbox" id={this.props.id} onChange={this.toggleChange} autoComplete="off" />) : <br/>}</th>
                {this.getItems()}
                <th>{this.props.id ?// (<button id={this.props.id} type="button" onClick={this.handleButtonClick}>Delete</button>) : <br />}
                 <Button variant="contained" onClick={this.handleButtonClick}>Delete</Button>:<a></a>
                }</th>
                <th>{this.props.id ? (<EditDialog items={this.props.items}/>) : ""}</th>
            </tr>
        );
    }
}
export default TableRow