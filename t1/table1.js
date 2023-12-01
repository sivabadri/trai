import axios from "axios";
import React, { Component } from "react";
import Update from "../update/update";

class Ticketshow extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8900/get')
    .then(response => {
      this.setState({ data:response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
hotelShow=(e,phone_no)=>
{
    e.preventDefault();

    this.setState({showHotel: true , id:phone_no})
}

deleteBooking = (e, phone_no) => {
    e.preventDefault();
  
    axios
      .delete(`http://localhost:8900/delete/${phone_no}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          this.setState({ data: response.data });
        } else {
          console.error('Unexpected response data:', response.data);
        }
        alert(`The booking ID: ${phone_no} has been cancelled! Kindly refresh the page.`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  updateBooking= (e,phone_no)=>{
    e.preventDefault();

    this.setState({editData: true ,phone_no})
  }


  render() {   
    return (
        <div id="log">
      <table border={1}>
      <thead id="as" >
        <tr >
        <th>Name</th>
        <th>Mobile Number</th>
          <th>Age</th> 
          
          <th>Source</th>
          <th>Destination</th>
          <th>BookDate</th>
          
        </tr>
      </thead>
      <tbody id="sd">
        {this.state.data.map(user => (
          <tr key={user.phone_no}>
          <td>{user.name}</td> 
            <td>{user.phone_no}</td>
            <td>{user.age}</td> 
            <td>{user.source}</td>
            <td>{user.destination}</td>
            <td>{user.date}</td>
            
            <button id='but2' class="butts" onClick={(e)=>{this.deleteBooking(e,user.phone_no)}}>Cancel Booking!</button>
            <button id='but3' class="butts" onClick={(e)=>{this.updateBooking(e,user.phone_no)}}>Update Details</button>
            
          </tr>
        ))}
      </tbody>
      {this.state.editData && <Update phone_no={this.state.phone_no}/>}
    </table>
    </div>
    );
  }}
  
export default Ticketshow;