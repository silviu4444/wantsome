import React, {Component} from 'react';
import './Item.css'
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        {
            // console.log(this.props)
        }
        return (
            <div className="style">
                <h3>{this.props.item}</h3>
                <p>${this.props.price}</p>
            </div>
        )
    }
}
export default Item;