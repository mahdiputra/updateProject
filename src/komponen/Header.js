import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {Button} from 'primereact/components/button/Button';
import {connect} from 'react-redux';//menghubungkan dengan global state
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import Button1 from './button'
import Navbar from './navbar'



class Header extends Component {
    render() {
        var items = [
            {label:'Sunting', icon:'fa-refresh', command: ()=>{}},
            {label:'Hapus', icon:'fa-close', command: ()=>{}},
            {label:'Tautan', icon:'fa-link', command: ()=>{}},
            {label:'Desain', icon:'fa-paint-brush', command: ()=>{}},
            ];

        var ButPad = {
            marginTop:"5px",
            paddingRight:"75px",
            paddingLeft:"75px",
            color: "white"
        }
        return (
            <div>
             <header>
               <Navbar/>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-12">
                    <div className="row">
                         <div className="col-xs-12 col-lg-3" >    
                            <center>
                                <Button style={ButPad} label="Top viewed friends" className="ui-button-success"/>
                            </center>
                         </div>
                        
                         <div className="col-xs-12 col-lg-3" style={{margin:"0px"}}>    
                            <center>
                                <Button style={ButPad} label="Top viewed friends" className="ui-button-success"/>
                            </center>
                         </div>
                        
                         <div className="col-xs-12 col-lg-3" style={{margin:"0px"}}>    
                            <center>
                                <Button style={ButPad} label="Top viewed friends" className="ui-button-success"/>
                            </center>
                         </div>
                        
                         <div className="col-xs-12 col-lg-3" style={{margin:"0px"}}>   
                            <center>
                                <SplitButton label="Simpan" icon="fa-check" model={items} className="ui-button-success"></SplitButton>
                            </center>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
            <ScrollPanel style={{width: '100%', height: '500px'}}>
            <div class="col-xs-12 col-sm-12 col-lg-12" style={{background: "rgb(198, 191, 248)",float: "right", marginTop: "20px"}}>
                    
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h1 class="panel-title">Post 1</h1>
                        </div>

                        <div class="panel-collapse collapse" id="panel-1">
                            <div class="panel-body">
                            <h1>ini dari props{this.props.testing}</h1>
                            <Button1 />
                            
                        </div>

                        </div>
                        <div class="panel-footer">
                            <button data-target="#panel-1" data-toggle="collapse" data-parent="#lin_Accor" >Selengkapnya...</button>
                        </div>
                    </div>

                    <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h1 class="panel-title">Post 1</h1>
                            </div>
    
                            <div class="panel-collapse collapse" id="panel-2">
                                <div class="panel-body">
                                <p>ini isi</p>
                            </div>
    
                            </div>
                            <div class="panel-footer">
                                <button data-target="#panel-2" data-toggle="collapse" data-parent="#lin_Accor" >Selengkapnya...</button>
                            </div>
                    </div>

                    <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h1 class="panel-title">Post 1</h1>
                            </div>
    
                            <div class="panel-collapse collapse" id="panel-3">
                                <div class="panel-body">
                                <p>ini isi</p>
                            </div>
    
                            </div>
                            <div class="panel-footer">
                                <button data-target="#panel-3" data-toggle="collapse" data-parent="#lin_Accor" >Selengkapnya...</button>
                            </div>
                    </div> 

                </div>
                </ScrollPanel>
            </div>
            </div>
         );
    }
}

const mapStateToProps = (state) =>{
    const testing = state.test
    return { testing }

}

export default connect(mapStateToProps)(Header);