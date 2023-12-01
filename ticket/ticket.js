import React, { Component } from 'react';

import axios from 'axios'
import './ticket.css'
class Ticketbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        phone_no: '',
        age:'',
        source:'',
        destination:'',
        date:''
    };
  }

  handlenameChange = (event) => {
    this.setState({name: event.target.value });
  };
  handlemobilenoChange = (event) => {
    this.setState({phone_no: event.target.value });
  };
  handleageChange = (event) => {
    this.setState({age: event.target.value });
  };
  

  handlesourceChange = (event) => {
    this.setState({source: event.target.value });
  };
  handledeginationChange = (event) => {
    this.setState({destination: event.target.value });
  };
  handlebookdateChange = (event) => {
    this.setState({date: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        name: this.state.name,
        phone_no: this.state.phone_no,
        age: this.state.age,
        source: this.state.source,
        destination: this.state.destination,
        date: this.state.date,
        
      };
    alert(" you have ticket booked Successfully");
      axios.post('http://localhost:8900/post', data)
  };

  render() {
    return (
    <div id='kk'>
      <form onSubmit={this.handleSubmit} className="book-form">
      <h1>TICKET  BOOKING</h1>  
      <label className="sign-label">NAME : </label>
        <input
          className="sign-input"
          type="text"
          value={this.state.name}
          onChange={this.handlenameChange}
        />
        <br></br>
        <br></br>
        <br></br>
             <label className="login-label">MOBILE NUMBER : </label>
             <input
               className="login-input"
               type="number"
               value={this.state.phone_no}
               onChange={this.handlemobilenoChange}
             />
   <br></br>
   <br></br>
   <br></br>
        <label className="sign-label">AGE : </label>
        <input
          className="sign-input"
          type="number"
          value={this.state.age}
          onChange={this.handleageChange}
        />
       
  
        <br></br>
   <br></br>
   <br></br>

        <label className="sign-label">SOURCE : </label>
        <input
          className="sign-input"
          type="text"
          value={this.state.source}
          onChange={this.handlesourceChange}
        />
        <br></br>
   <br></br>
   <br></br>
        <label className="sign-label">DESIGNATION : </label>
        <input
          className="sign-input"
          type="text"
          value={this.state.destination}
          onChange={this.handledeginationChange}
        />
        <br></br>
   <br></br>
   <br></br>
        <label className="sign-label">BOOKDATE : </label>
        <input
          className="sign-input"
          type="text"
          value={this.state.date}
          onChange={this.handlebookdateChange}
        />
        <br></br>
   <br></br>
   <br></br>
        
        <button className="login-button" type="submit">
         submit
        </button>
      </form>
      </div>
    );
  }
}

export default Ticketbook;