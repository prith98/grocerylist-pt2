import React from 'react';
import axios from 'axios';

class GroceryForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      quantity: '',
      best_before: '',
      purchased: false
    }

    this.eventHandler = this.eventHandler.bind(this);
    this.refreshState = this.refreshState.bind(this);
    this.sendGrocery = this.sendGrocery.bind(this);
  }

  eventHandler(event) {
    if (event.target.name !== 'purchased') {
      this.setState({
        [event.target.name]: event.target.value
      })
    } else {
      this.setState({
        [event.target.name]: !this.state.purchased
      })
    }
  }

  refreshState() {
    this.setState({
      name: '',
      quantity: '',
      best_before: '',
      purchased: false
    })
  }

  sendGrocery(event) {
    event.preventDefault();
    axios
      .post('/api/groceries', this.state)
      .then(this.props.refresh)
      .then(this.refreshState)
  }

  editGrocery(event) {
    event.preventDefault();
    this.setState({
      name: event.target.name
    })
  }

  render() {

    return (
        <form>
          <label>
            Item
            <input
             name="name"
             type="text"
             value = {this.state.name}
             onChange={this.eventHandler}
             />
          </label>
          <label>
            Quantity
            <input
             name="quantity"
             type="number"
             value = {this.state.quantity}
             onChange={this.eventHandler}
             />
          </label>
          <label>
            Best Before
            <input
             name="best_before"
             type="date"
             value = {this.state.best_before}
             onChange={this.eventHandler}
             />
          </label>
          <label>
            Purchased
            <input
             name="purchased"
             type="checkbox"
             checked={this.state.purchased}
             onClick={this.eventHandler}
             />
          </label>
          <button
          name="add"
          onClick={this.sendGrocery}>
          {this.props.add_edit}
          </button>
        </form>
    )

  }

}

export default GroceryForm;