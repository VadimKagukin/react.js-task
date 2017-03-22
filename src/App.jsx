import React, { Component } from 'react';
import './App.css';

import ItemsList from './components/itemsList.jsx';
import products from './products.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <ItemsList items={products} 
                      id={products.id} 
                      name={products.name} 
                      imageUrl={products.imageUrl} 
                      price={products.price} 
                      desc={products.desc} 
                      status={products.status} />
        </div>
      </div>
    );
  }
}

export default App;
