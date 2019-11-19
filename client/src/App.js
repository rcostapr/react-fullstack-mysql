import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    invoices: []
  }

  renderInvoice = (invoice) => (
    <li key={invoice.id}>ID: {invoice.id} :: Name: {invoice.name} :: Qty: {invoice.qty} :: Total: {invoice.total}</li>
  )

  componentDidMount() {
    this.getInvoices()
  }

  getInvoices = _ => {
    fetch('http://localhost:4000/invoices')
      .then(response => response.json())
      //.then(({ data }) => console.log(data))
      .then(response => this.setState({ invoices: response.data }))
      .catch(err => console.error(err))
  }


  render() {
    const { invoices } = this.state
    return (
      <div className="App" >
        <ul>
          {invoices.map(this.renderInvoice)}
        </ul>
      </div>
    );
  }
}

export default App;
