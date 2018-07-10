import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FileUpload} from 'primereact/components/fileupload/FileUpload';
import '../css/profpic.css'

class Profpic extends Component {
    render(){
        return(
            <div>
               <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" src="./img/mad.jpg" alt=""/>
                     <div class="overlay">
                         <h2>ganti Profpic?</h2>
                     <a><FileUpload name="demo" url="./upload" style={{backgroundColor:"black"}}></FileUpload></a>
                     </div>
                    </div>
            </div>
            </div>
        )
    }
}
export default Profpic