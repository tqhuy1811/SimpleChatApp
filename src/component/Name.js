import React, { Component } from 'react'


import './style/name.css'
class Name extends Component{

    render(){
        return(
            <div>
                <h1 style={{textAlign:"center",marginTop:"20px",fontFamily:"Coiny, cursive"}}>H&K</h1>
                <div className="text-center">
                    <img style={{height:"550px"}} src="https://firebasestorage.googleapis.com/v0/b/chatapp-418a9.appspot.com/o/UNADJUSTEDNONRAW_thumb_25.jpg?alt=media&token=de7c3301-d9cd-469d-8bf7-eff23d9dc080" className="rounded" alt=""/>
                </div>    
            </div>
        )
    }
}

export default (Name)