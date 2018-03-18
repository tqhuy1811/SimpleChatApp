import React, { Component } from 'react'
import fb from './fire'
import Input from './input'

class ChatRoom extends Component{
   constructor(props){
        super(props)
        this.state = {
            messages:[],
        }
   }
   handleRefreshToken(){
       const root = fb.database().ref()
       const query = root.child('tokens')
        return fb.messaging().getToken().then(token => {
            if(token){
                query.orderByChild('token').equalTo(token).on('value',snap =>{
                    if(!snap.val()){
                        fb.database().ref('tokens').push(
                            {
                                token:token,
                                id: fb.auth().currentUser.uid
                            }
                        )}
                 })            
                }
       })
   }
   askPermission(){
    const messaging = fb.messaging();

    messaging.requestPermission()
        .then(() => this.handleRefreshToken().catch(err => {
                console.log(err)
              }
            )
        )
    }
   
    renderMessage(){
        if(this.state.messages.length!==0){
        return this.state.messages.map((message,index) =>{
            if(message.name!==fb.auth().currentUser.displayName){
            return(
                <div key={index}>
                 <div  style={{display:"flex",justifyContent:"flex-start",marginRight:"5px"}} ><img  style={{width:"40px",height:"40px",borderRadius: "50%",marginRight:"5px",marginBottom:"4px"}} alt='Avatar' src={message.picture}/>
                 <div className="card col-sm-2"  style={{marginBottom:"4px"}}>
                    <div className="card-block">
                        {message.message}
                    </div>
                </div>
                 </div>

                </div>

                )
                }
            else{
                return(
                    <div key={index} style={{display:"flex",justifyContent: "flex-end"}}>
                    <div className="card col-sm-2"  style={{marginBottom:"4px"}}>
                    <div className="card-block">
                   {message.message}
                    </div>
                    </div>
                    </div>
                )
                }
            }
            )}
    }
  
    componentDidMount(){
        this.scrollToBottom()
        this.askPermission()

        var arr = this.state.messages
        let dbCon = fb.database().ref('/messages');
        dbCon.on('child_added',snap =>{
            arr.push(snap.val())
            this.setState({message:arr})
         })
         
        }
    
    componentDidUpdate(){
        this.scrollToBottom()
        // this.askPermission()

    }
    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }
    render(){

        return(
            <div  style={{overflow:"auto",height:"480px",marginTop:"30px"}}  >
                <div style={{marginLeft:"20px",marginRight:"20px"}} >
                    {this.renderMessage()}
                    <div ref={el => { this.el = el; }} />
                </div>
                
               <Input/>
            </div>
         
        )
    }
}


export default ChatRoom