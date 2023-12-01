import axios from 'axios';
import React, { Component } from 'react'

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
          name: '',   
          phone_no: '',    
          age: '',
          source: '',
          destination: '',
          date: '',
        };
      }
      

      componentDidMount() {
        const { phone_no} = this.props;
      
        axios
          .get(`http://localhost:8900/get12/${phone_no}`)
          .then((response) => {
            const { name,phone_no, age, source,destination,date } = response.data;
            this.setState({
                name,
                phone_no,
                age,
                source,
                destination,
                date,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      


    handleSubmit= (e)=>{
        e.preventDefault();
        
        const formData={
            name:this.state.name,
            phone_no:this.state.phone_no,
            age:this.state.age,
            
            source:this.state.source,
            destination:this.state.destination,
            date:this.state.date,
        };
        
      axios.put(`http://localhost:8900/put`,formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      })
      alert("updated Sucessfully")
  };

  render() {
    return (
      <div id='box5'>
      <form id="text1" onSubmit={this.handleSubmit}>
        <br/>
        <label>Name</label>
        <input type="text" id="uname" class="field1" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
        <br/><br/>
        <label>Mobile Number</label>
        <input type="number" id="num" class="field1" value={this.state.phone_no} onChange={(e)=>{this.setState({phone_no:e.target.value})}}/>
        <br/><br/>
        <label>Age</label>
        <input type="number" id="age" class="field1" value={this.state.age} onChange={(e)=>{this.setState({age:e.target.value})}}/>
        <br/><br/>
        <label>source :</label>
        <input type="text" id="num" class="field1" value={this.state.source} onChange={(e)=>{this.setState({source:e.target.value})}} />
        <br/><br/>

        <label>degination :</label>
        <input type="text" id="num" class="field1" value={this.state.destination} onChange={(e)=>{this.setState({destination:e.target.value})}} />
        <br/><br/>

        <label> bookdate :</label>
        <input type="text" id="num" class="field1" value={this.state.date} onChange={(e)=>{this.setState({date:e.target.value})}}/>
        <br/><br/>
        <button type="submit" id="reg">Submit!</button>
        </form>
      </div>
    )
  }
}