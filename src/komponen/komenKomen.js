import React, { Component } from 'react';
import '../css/komentar.css'



class Komen extends Component {
    render() {
        return (
            <div className="collapse" id="replyOne">
            <ul className="media-list">

                <li className="media media-replied">
                   
                    <div className="media-body">
                    <div className="well well-lg">

                        <a className="pull-left">
                         <img className="media-object img-circle" style={{width:40}} src="https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg" alt="profile"/>
                        </a>
                        <h4 style={{marginLeft:50}} className="media-heading text-uppercase reviews"> Si Biji</h4>
                    
                        <hr/>
                        <ul className="media-date text-uppercase reviews list-inline">
                            <li className="dd">22</li>
                            <li className="mm">09</li>
                            <li className="aaaa">2014</li>
                        </ul>
                        <h4 className="media-comment">
                            Nice job coyy.
                        </h4>
                    </div>              
                    </div>
                </li>
            </ul>  
         </div>

        )
    }

}

export default Komen;


