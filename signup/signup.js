// import React, { useState } from "react";
// import "./signup.css";
// import axios from "axios";

// export default function Signup() {
//     const[username,setName]=useState('');
//     const[mailid,setMail]=useState('');
//     const[password,setPassword]=useState('');
//      const handleSubmit=(e)=>
//      {
//         e.preventDefault();
//         const data={username,mailid,password};
//         axios.post('http://127.0.0.1:8900/post1',data)
//         .then(response=>{console.log(response.data)})
//         .catch(err=>{console.log(err)})

//     }

//   return (
//     <div id='align'>
//     <form id='main' onSubmit={handleSubmit}>
//     <div><img id='photo' src='data:image/jpeg;base64,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'></img></div>
//     <div id='f1'>
//     <br></br>
//     <label><b className='l' >USERNAME</b></label>
//     <br></br>
//     <input type='text' placeholder='please enter the name' className='al'
//     name="username"
//      value={username} 
//      onChange={(e) => setName(e.target.value)}>
//      </input>
//     <br></br><br></br>
//     <label><b className='l'>EMAIL</b></label>
//     <br></br>
//     <input type='text' placeholder='please enter the mail' className='al'
//     name="mailid"
//      value={mailid} 
//      onChange={(e) => setMail(e.target.value)}>
//      </input>
//     <br></br><br></br>
//     <label><b className='l'>PASSWORD</b></label>
//     <br></br>
//     <input type='password' placeholder='password' className='al'
//     name="password"
//      value={password} onChange={(e) => setPassword(e.target.value)}>
//      </input><br></br><br></br>
//      </div>
//     </form>
//     <button className='man' type='submit'>SIGNUP</button>
//     </div>
//   )
// }
// import axios from 'axios';
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
// //import Profile from './Profile';
// import { Link } from 'react-router-dom';

// export default class Signup extends Component {

//     constructor(props)
//     {
//         super(props);
//         this.state={
//           username:'',
//             mailid:'',
//             password:'',
//             data:[],
//             showprofile: false
           
        
//         }
//     } 
//     handleSubmit= (e)=>
//     {
//         e.preventDefault(); 
//         const email= this.state.mailid;
//         axios.get(`http://localhost:8900/post1/${email}`)
//         .then(response => {
//           this.setState({data: response.data});
//     }


import React, { Component } from 'react';
import './signup.css';
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        mailid: '',
        password: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ mailid: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        username: this.state.username,
        mailid: this.state.mailid,
        password: this.state.password,  
      };
    
      axios.post('http://127.0.0.1:8900/post1', data)
      alert("successfully registered");
  };

  render() {
    return (
      <div id='align'>
      <form onSubmit={this.handleSubmit} id='main' >
       
        <div><img id='photo' src='data:image/jpeg;base64,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'></img></div>
        <label className='l'><b>Name</b></label><br></br>
        <input
          className="al"
          type="text"
          value={this.state.username}
          onChange={this.handleNameChange}
        />
        <br></br><br></br>
        <label className='l'>Email</label><br></br>
        <input
          className="al"
          type="mailid"
          value={this.state.mailid}
          onChange={this.handleEmailChange}
        />
        <br></br><br></br>
        <label className='l'>Password</label><br></br>
        <input
          className="al"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />  
        <br></br>   <br></br>   
        <button className="man" type="submit">
          Sign Up
        </button>
      </form>
      </div>
    );
  }
}

export default Signup;

