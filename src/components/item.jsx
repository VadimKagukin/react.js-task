import React, { Component } from 'react';

import './item.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = { isOpened: false };
        
        this.toggleState = this.toggleState.bind(this);
    }

    // Развернуть/свернуть элемент FLAG
    toggleState(){
        this.setState({ isOpened: !this.state.isOpened });
    }

    render(){
        var statusColor = this.props.status === "В наличии" ? "green" : "orange";
        return(
            <div className="item" onClick={this.toggleState}>
                <li>
                    <div className="itemImage">
                        <img src={"images/" + this.props.imageUrl} alt="product_image"/>
                    </div>
                    <div className="itemInfo">
                        <h3>{this.props.name}</h3>
                        <p className="price">{this.props.price + " р."}</p>
                        { this.state.isOpened ?(  // если true, то показать доп. информацию, иначе скрыть
                                <div>
                                    <p className="desc">{this.props.desc}</p>
                                    <p className="status" style={{ color: statusColor}}>{this.props.status}</p>
                                </div>
                            )
                            : <div></div>
                        }
                    </div>
                </li>
            </div>
        );
    }
}

export default Item;