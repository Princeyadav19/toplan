import "./App.css";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from './plan';
class App extends Component {
  state = {
    items:[],
    text:""
  }
  handleChange = e =>{
      this.setState({text: e.target.value})
  }
  adddetails= e =>{
    if(this.state.text!==""){
      const items = [...this.state.items, this.state.text];
      this.setState({
        items:items,text:""
      })
    }
  }
  handledelete= id =>{
    const olditems = [...this.state.items]
    const items = olditems.filter((element,i)=>{
      return i!==id
    })
    this.setState({items:items})
      console.log("deleted", id)
  }
  render(){
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-centre">Today's plan</h1>
            <div className="row">
              <div className="col-9">
                <input type="text" value={this.state.text}className="form-control" onChange={this.handleChange} placeholder="write plan here"/>
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 font-weight-bold" onClick={this.adddetails}>Add</button>
              </div>

              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value,i)=>{
                      return <Plan handledelete={this.handledelete} key={i} id={i} value={value}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
