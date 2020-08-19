

import './App.css';
import Form from './Form'
import Table1 from './Table1'
import axios from 'axios'


import React, { Component } from 'react'

 class App extends Component {

  constructor() {
    super()
  
    this.state = {
       data:[],
       editdata:[]
    }
  }
  

   create = (data) =>{

    if(!data.isEdit){
      axios.post("http://localhost:5000/info",data).then(res => {
        console.log(res)
         
         this.getall()
       })

    }
     
       axios.put("http://localhost:5000/info/update",data).then(res => {
         console.log(res)
         this.getall()
       })
     }
    
   

   componentDidMount(){
     this.getall()

   }
   getall(){
     axios.get("http://localhost:5000/info").then(res =>{
       
       this.setState({ 
        data:res.data
      })
     })
    }
    
    update = (data) => {
      console.log(data)

      this.setState({
        editdata:data
      })
       
    }
    

    del = (data) =>{
      var option = window.confirm(`Are You sure To delete ${data.name}`)

      if(option){
        axios.delete(`http://localhost:5000/info/del/${data._id}`).then(res => {
        console.log(res)
        this.getall()
      })
      }
      
      
        
  
    }
    
  render() {
    return (
      <div className="container">
      <div>
        <h1 className="title"> Reat Server Side </h1>
        </div>
        <div>


        </div>
      <div className="row">
        
        <div className = "col-6">
          <Form myData= {this.create} setForm={this.state.editdata}/>
        </div>
        <div className = "col-6">
          <Table1 getData = {this.state.data} setData = {this.update} del ={this.del}/>
        </div>
      </div>
      
      
      
    </div>
    )
  }
}

export default App
