import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar'
import Profpic from './profpic'
import Status from './status'




class Article extends Component {
    render() {


        return (
            <div>

            <header>
                <Navbar/>
            </header>


        <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-12 " style={{background:"url('img/pattern.png')" , height: "200px"}}>
                    <div>
                    <Profpic alt="profile.jpg" style={{paddingtop: "5px"}}/>
                    </div>
                    <h1 style={{float: "right",padding: "0",margin: "0"}}>Mahdi Purna Putra</h1>
                </div>



                <div className="col-xs-12 col-sm-3 col-lg-3" style={{background: "purple", margintop: "20px",padding:"10px"}}>

                    <div className="panel panel-default" style={{}}>
                        <div className="panel-body">total viewed : 100 </div>
                     </div>
                     
                     <div className="panel panel-default">
                        <div className="panel-body">daily viewed : </div>
                     </div>
                </div>


                <div className="col-xs-12 col-sm-9 col-lg-9" style={{background: "darkslateblue", height: "100px",padding: "10px"}}>
                    <input id="judul" placeholder="Masukkan judul.." style={{marginBottom:"2px",width:"355px"}}/>
                    <textarea id="status" className="form-control" style={{height:"60px",width:"100%", paddingtop:"5px",placeholder:"write something.."}}></textarea>
                   
                   <ul style={{display: "inline",listStyleType: "none", float:"right",paddingtop: "3px"}}>
                        <li style={{display: "inline",marginTop:"2px"}}><button id="post" >Post</button> </li>  
                   </ul>
                   
                </div>


                <div className="col-xs-12 col-sm-9 col-lg-9" style={{background: "rgb(198, 191, 248)",float: "right", marginTop: "20px"}}>
                    
                   <Status />

                   <Status />

                   <Status />      

                </div>

                <div className="col-xs-12 col-sm-6">

                </div>
                <div className="col-xs-12 col-sm-6">

                </div>
                </div>
             </div>
    
            </div>
         );
    }
}
export default Article;