import axios from "axios";
import React, { Component } from "react";


class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8900/get1')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
    render() {  
        return (
            
            <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>MailId</th>
                <th>PASSWORD</th>
      
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((user) => (
                <tr key={user.mailid}>
                  <td>{user.username}</td>
                  <td>{user.mailid}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
           </table>
        );
      }}

    export default Showdata;
