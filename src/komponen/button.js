import React, { Component } from 'react';
import {connect} from 'react-redux';
import {tes} from '../actions';


class button extends Component{
    ubah = ()=>{
        this.props.tes()
    }
    render(){
        return (
            <div>
                <button onClick={this.ubah}>ubah</button>
            </div>
        )

    }
   
}

export default connect(null,{tes})(button);