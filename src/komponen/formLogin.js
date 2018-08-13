import React, { Component } from 'react';
import '../css/login.css'
import { Link } from 'react-router-dom';

class Profpic extends Component {
    render(){
        

        return(
            <div>
                    <div className="login-form">
                        <form  method="post">
                            <h2 className="text-center">Sign in</h2>   
                            
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>				
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>				
                                </div>
                            </div>   

                            <div className="form-group">
                             <Link to='/activity'> <button type="submit" className="btn btn-primary login-btn btn-block">Sign in</button></Link>
                            </div>

                            <div className="clearfix">
                                <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                                <a href="#" className="pull-right">Forgot Password?</a>
                            </div>

                            <div className="or-seperator"><i>or</i></div>
                            <p className="text-center">Login with your social media account</p>
                            <div className="text-center social-btn">
                                <a href="#" className="btn btn-primary"><i className="fa fa-facebook"></i> Facebook</a>
                                <a href="#" className="btn btn-info"><i className="fa fa-twitter"></i> Twitter</a>
                                <a href="#" className="btn btn-danger"><i className="fa fa-google"></i> Google</a>
                            </div>
                            
                        </form>
                        <p className="text-center text-muted small">Don't have an account? <a href="#">Sign up here!</a></p>
                    </div>

            </div>
        )
    }
}
export default Profpic













                           