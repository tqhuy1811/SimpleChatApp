import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fb from '../component/fire'
import * as firebase from 'firebase'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: 'hidden',
            word:'Sign In',
            state: false
        }
        this.handleOnClick = this.handleOnClick.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
    }
    handleOnClick(){
        if(!this.state.state){
        const db = fb.database().ref('/users')
        const usersDb = fb.database().ref('/users')
        var provider = new firebase.auth.GoogleAuthProvider()
        fb.auth().signInWithPopup(provider).then(function(result) {
        
            db.orderByChild('id').equalTo(result.user.uid).on('value',snap => {
                if(!snap.val()){
                    usersDb.push({
                        id:result.user.uid,
                        profile:result.user.photoURL,
                        user: result.user.displayName
                    })
                }
    
            })
            
          }).catch(function(error) {

          });

        }
          else{
            fb.auth().signOut()
 
            this.setState({word:'Sign in'})
            this.setState({state:false})
          }
    }
    handleStateChange(user){
        if(user){      
            this.setState({word:'Sign Out'})
            this.setState({state:true})
            const db = fb.database().ref()
            db.child('secret').orderByChild('email').equalTo(user.email).on('value',snap => {
                if(snap.val()){
                    this.setState({visible:'visible'})
                }
            })
        
        }
        else{

            this.setState({visible:'hidden'})
        }
    }


    componentDidMount(){
        fb.auth().onAuthStateChanged(this.handleStateChange)
       
    }

    render(){
        return(
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#B8FD99'}}>

        <Link className="navbar-brand btn btn-dark" to="/">H&K</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                     <Link className="nav-link btn btn-dark" to="/us">About Us</Link>
                </li>
             </ul>      
                
        <div style={{marginRight:"20px"}}>
        
        <Link className="nav-link btn btn-dark"  style={{visibility:this.state.visible}}   to="/chatRoom">Chat Room</Link>
        </div>
        <button onClick={this.handleOnClick} className="btn btn-dark">{this.state.word}</button>
    </div>
    </nav>
        )
    }
}
export default Header