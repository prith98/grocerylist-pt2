import React from 'react';
import axios from 'axios';
import GroceryForm from '/frontend/src/components/GroceryForm.js';

class Groceries extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

    }

  }

  render() {

    return (

      <div>
        <img src="grocery-bags.png"/>
        <h1>Grocery List</h1>
        <GroceryForm />
      </div>

    )

  }

}

export default Groceries;