import React from 'react';

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
    render() {
        return (
            <tr>
                {this.getItems()}
            </tr>
        );
    }
}
export default TableRow