import React, { Component } from 'react'

 class Table1 extends Component {
    render() {
        return (
            <div>
                 <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Age</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
          
    
       

       this.props.getData.map(e =>(
           <tr key={e._id}>
               <td>{e.Name}</td>
               <td>{e.City}</td>
               <td>{e.Age}</td>
               <td><button className="btn btn-primary" onClick ={(event) =>{
                   this.props.setData(e)
                   
               }}>Edit</button></td>
               <td><button className="btn btn-primary"
                onClick ={(event) =>{
                  this.props.del(e) }}
                  >Delete</button></td>
           </tr>
       )
           
         
       )
                 
             
        
      }
    </tbody>
  </table>
            </div>
        )
    }
}

export default Table1
