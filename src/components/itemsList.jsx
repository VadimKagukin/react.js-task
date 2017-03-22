import React, { Component } from 'react';

import * as _ from 'lodash';

import Item from './item.jsx';
import './itemsList.css';

class ItemsList extends Component{
    constructor(props){
        super(props);
        this.state = {  
            items: this.props.items,
        };
        this.items = this.props.items;

        this.filterList = this.filterList.bind(this);
    }
    
    // фильтрация списка
    filterList(e){
        var filteredList = _.filter(this.items, (item) =>{
            return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: filteredList});
    }

    render(){
        return(
            <div>
                <div className="itemFilter">
                    <input type="text" className="form-control" placeholder="Поиск по названию" onChange={this.filterList} />
                </div>
                <div className="items">
                    <ul>
                        {_.map(this.state.items, (item) => {
                            return <Item key={item.id}
                                        name={item.name} 
                                        price={item.price} 
                                        imageUrl={item.imageUrl} 
                                        desc={item.desc} 
                                        status={item.status} />
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ItemsList;