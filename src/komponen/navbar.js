import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class Navbar extends Component {
    render(){
        return(
            <div>
            <nav className="navbar navbar-inverse" style={{background:"purple"}}>
            <div className="container" >
               
                <div className="navbar-header">
                    <a href="/article" className="navbar-brand">
                        <img src="img/mad.jpg" alt="wadaw" width="25px"/>        
                    </a>
                
                  
                  <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menucollapse">
                        <span style={{color:"firebrick"}} className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
            
                </div>
            
            
                <div className="collapse navbar-collapse" id="menucollapse">
                
                    <ul className="nav navbar-nav">
                            <li><a href="/article" style={{color:"white"}}>Profile</a></li>
                            <li><a href="/header" style={{color:"white"}}>Home</a></li>
                    </ul>
            
                    <div>
                        <button style={{marginright:"10px"}} className="btn btn-default navbar-btn navbar-right">
                        <Link to='/home'>log out</Link>
                        </button>
                    </div>
            
                </div>
            </div>
            </nav>
            
            </div>
        )

    }
    
}

export default Navbar ;


