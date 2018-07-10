import React, { Component } from 'react';
import fire from './../fire';
import axios from 'axios'
import {InputText} from 'primereact/components/inputtext/InputText';
import {Password} from 'primereact/components/password/Password';
import { Link } from 'react-router-dom';

class Footer extends Component {

    klikPost(){
        var url = 'http://localhost:3000/api/pegawais';
        axios.post(url,{
        //   id:this.refs.id.value,
          nama:this.refs.nama.value,
          usia:this.refs.usia.value
        }).then((respon)=>{console.log(respon)}).catch((gagal)=>{console.log(gagal)})
      }


    render() {
        return (
            <div>
                    <div id="header"  className="jumbotron" >
                            <div className="container">
                            <h1><img src="img/sogo.png" alt="imageasd" style={{width:"200px"}}/>Sentry</h1>
                                <div>
                                    <p>Welcome to Sentry</p>
                                </div>
                            </div>


                        
                            <div style={{float:'right', marginRight :"0"}} className="col-sm-12 col-md-3 col-lg-4 hidden-xs">
                                <ul style={{ listStyleType: "none"}}>
                                    <li style={{display:"inline",paddingRight:"2px"}}><input style={{borderRadius:"3px"}} type="text" placeholder="email.." /></li>
                                    <li style={{display:"inline",paddingRight:"2px"}}><input style={{borderRadius:"3px"}} type="password" placeholder="password.." /></li>
                                    <li style={{display:"inline"}}><Link to='/article'><button > log in</button></Link></li>
                                </ul>
                            </div>
                     </div>


    
    <div className="container-fluid">
        <div className="row">
        <div className="hidden-md hidden-sm hidden-lg">
            <ul style={{ listStyleType: "none"}}>
                <li style={{display:"inline",paddingRight:"2px"}}><input style={{borderRadius:"3px"}} type="text" placeholder="email.." /></li>
                <li style={{display:"inline",paddingRight:"2px"}}><input style={{borderRadius:"3px"}} type="password" placeholder="password.." /></li>
                <li style={{display:"inline"}}><button><Link to='/article'> log in </Link></button></li>
            </ul>
        </div>
            <div  className="col-sm-2 col-lg-2 hidden-xs badan ">
                <div>
                    <img src="img/id.svg" alt="imageasd"/>
                </div>
            </div>
            
            <div  className="col-sm-6 col-md-6 col-lg-3 badan" style={{float:'right',marginRight:'50px'}} >
                <h1>Buat Akun Baru</h1><br /><br />
                {/* <input  type="text" placeholder="Nama.."/><br /><br /><br />
                <input  type="text" placeholder="tanggal lahir.."/><br /><br /><br />
                <input  type="text" placeholder="Email address.."/><br /><br /><br />
                <input  type="text" placeholder="password.."/><br /><br /><br /> */}

                    <div >

                        <input type="text" placeholder="masukkan nama" ref="nama"/> <br />
                        <input type="password" placeholder="masukkan password" ref="usia"/><br />

                        {/* <span className="ui-float-label" style={{paddingBottom:"15px"}}>
                        <InputText id="float-input" type="text" size="30" ref="nama" />
                        <label htmlFor="float-input">Username</label>
                        </span>

                        <span className="ui-float-label" style={{paddingBottom:"15px"}}>
                        <InputText id="float-input" type="text" size="30" ref="usia" />
                        <label htmlFor="float-input">email</label>
                        </span> */}
                    </div>
                    
                    <p>
                        <Password placeholder="password.." />
                    </p>

                    <button onClick={()=>this.klikPost()}>submit</button>
            </div>
        </div>
    </div>


       

    <footer className="section section-primary">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
            </div>
      </footer>



         </div>
         );
    }
}
export default Footer;