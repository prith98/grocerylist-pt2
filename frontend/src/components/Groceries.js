import React from 'react';
import axios from 'axios';
import GroceryForm from '/frontend/src/components/GroceryForm.js';

class Groceries extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      groceries: [],
      add_edit: 'Add Grocery',
      groceryToEdit: {}
    }

    this.refreshGroceries = this.refreshGroceries.bind(this);
    this.deleteGrocery = this.deleteGrocery.bind(this);
    this.editGrocery = this.editGrocery.bind(this);
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

  deleteGrocery(id) {
    axios
      .delete(`/api/groceries/${id}`)
      .then(this.refreshGroceries());
  }

  editGrocery(grocery) {
    this.setState({
      groceryToEdit: grocery
    })
  }

  componentDidMount() {
    this.refreshGroceries();
  }


  render() {

    return (

      <div>
        <img src="grocery-bags.png"/>
        <h1>Grocery List</h1>
        <GroceryForm refresh={this.refreshGroceries} groceries={this.state.groceries} add_edit={this.state.add_edit} groceryToEdit={this.state.groceryToEdit}/>
        {this.state.groceries.map(oneItem => (
          <div id ="listItem">
            <div name={oneItem.name}>Name: {oneItem.name}</div>
            <div name={oneItem.quantity}>Quantity: {oneItem.quantity}</div>
            <div name={oneItem.best_before}>Best Before: {oneItem.best_before}</div>
            <div name={oneItem.purchased}>Purchased: {oneItem.purchased}</div>
            <button type="button" name={oneItem.name} onClick={() => {
              this.deleteGrocery(oneItem.id)
            }}> Delete </button>
            <button type="button" onClick={() => {
              this.editGrocery(oneItem)
            }}> Edit </button>
          </div>

        ))}
      </div>

    )

  }

}

export default Groceries;