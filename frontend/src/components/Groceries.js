import React from 'react';
import axios from 'axios';
import GroceryForm from '/frontend/src/components/GroceryForm.js';

class Groceries extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      groceries: []
    }

    this.refreshGroceries = this.refreshGroceries.bind(this);

  }

  componentDidMount() {
    axios
      .get('/api/groceries')
      .then(({data}) => {
        this.setState({
          groceries: data
        })
      })
  }

  refreshGroceries() {
    axios
      .get('/api/groceries')
      .then(({data}) => {
        this.setState({
          groceries: data
        })
      })
  }

  render() {

    return (

      <div>
        <img src="grocery-bags.png"/>
        <h1>Grocery List</h1>
        <GroceryForm refresh={this.refreshGroceries} groceries={this.state.groceries}/>
        {this.state.groceries.map(oneItem => (
          <div id ="listItem">
            <div name={oneItem.name}>Name: {oneItem.name}</div>
            <div name={oneItem.quantity}>Quantity: {oneItem.quantity}</div>
            <div name={oneItem.best_before}>Best Before: {oneItem.best_before}</div>
            <div name={oneItem.purchased}>Purchased: {oneItem.purchased}</div>
          </div>

        ))}
      </div>

    )

  }

}

export default Groceries;