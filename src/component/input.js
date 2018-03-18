import React, { Component } from 'react'
import fb from './fire'
class Input extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleChange(e){
        this.setState({message:e.target.value})

    }
    handleEnter(e){
        if(e.keyCode===13&&this.state.message!==''){
            let dbCon = fb.database().ref('/messages');
            dbCon.push({
              message: this.state.message,
              name:fb.auth().currentUser.displayName,
              time:Date.now(),
              picture: fb.auth().currentUser.photoURL
            });
            this.setState({message:''})
        }
    }

    render(){
        
        return(
            <div className="col-lg-12" style={{position:"fixed",bottom:"10px"}}>
            <input type="text" onKeyDown={this.handleEnter} value={this.state.message} onChange={this.handleChange} className="form-control" placeholder="Chat gì đi mày"/>
            </div>
        )
    }
}

export default  Input