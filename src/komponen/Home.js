import React, { Component } from 'react';
import axios from 'axios'

import { InputText } from 'primereact/components/inputtext/InputText';
import { Link, Redirect } from 'react-router-dom';

import '../css/login.css'

import { connect } from 'react-redux';//menghubungkan dengan global state
import { loginId } from '../actions'
import KomentarForm from './komentarForm'


class Footer extends Component {

    constructor() {
        super();
        this.state = {
            // username: localStorage.getItem('login'),
            redirect_profile: false //nilai awal false redirect
        }
    }

    componentDidMount(){
        localStorage.removeItem('idUser')
    }

    register() {
        axios.post(process.env.REACT_APP_API+'users', {
            first_name: this.refs.firstname.value,
            last_name: this.refs.lastname.value,
            address: this.refs.address.value,
            birth_date: this.refs.birth_date.value,
            email:this.refs.email.value,
            password: this.refs.password.value,
        }).then((respon) => {
            console.log(respon)
            alert('Registrasi berhasil terima kasih')
        }).catch((gagal) => { console.log(gagal) })
    }


    login() {
        axios.post(process.env.REACT_APP_API+'users/login', {
            //id:this.refs.id.value,
           email: this.refs.mail.value,
           password: this.refs.pass.value
        }).then((respon) => {
            if (respon.data[0].ID > 0) {// respon data beroup no id , jika lebih besar dprd 0 , kondisi dijalankan 
                var logid = respon.data[0].ID
                localStorage.setItem("idUser", logid)
                this.props.loginId(logid)//props redux berupa funtion berasal dari action.index, yg berupa action creator  loginID nama nfunction yang dibuat
                this.setState({ redirect_profile: true }) // jika function jalan maka aredirect profile menjadi true

            } else {
                alert('gagal login')
            }

        }).catch((gagal) => { console.log(gagal) })
    }

    render() {
        const { redirect_profile } = this.state;
        if (redirect_profile) {
            this.setState({ redirect_profile: false }) //
            return (<Redirect to='/activity' />)
        }
        console.log(process.env.REACT_APP_API)//digunakan untuk mengganti alamat url
        return (
           

            <div>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-2 col-lg-6 hidden-xs badan" style={{ backgroundImage: 'url("img/pattern.png")', height: "985px" }} >

                            <div style={{ paddingLeft: "100px" }}>
                                <img src="img/sogo.png" alt="imageasd" />
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-5 badan" style={{ float: 'right', marginRight: '50px' }} >

                            <div className="login-form">
                                <h2 className="text-center">Sign in</h2>

                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i>@</i></span>
                                        <input ref='mail' type="email" className="form-control" placeholder="Masukkan Email..." />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        <input ref="pass" type="password" className="form-control" placeholder="Masukkan Password.." />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button onClick={() => this.login()} type="submit" className="btn btn-primary login-btn btn-block">Sign in</button>
                                </div>

                                <div className="clearfix">
                                    <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                                    <a href="#" className="pull-right">Forgot Password?</a>
                                </div>

                                <div className="or-seperator"><i>or</i></div>
            
                                

                                <p className="text-center text-muted small">Don't have an account? Sign up down  here</p>

                                {/* ======================== ini sign up =========================== */}
                                <h2 className="text-center">Signup Here</h2>
                                
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="text" className="form-control" ref="firstname" placeholder="Masukkan first name.." required="required" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="text" className="form-control" ref="lastname" placeholder="Masukkan last name.." required="required" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="text" className="form-control" ref="address" placeholder="masukkan alamat.. " required="required" />
                                    </div>
                                </div>

                                 <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="date" className="form-control" ref="birth_date" placeholder="tanggal lahir " required="required" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i>@</i></span>
                                        <input type="text" className="form-control" ref="email" placeholder="Masukkan Email..." required="required" />
                                    </div>
                                </div>


                                 <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        <input type="password" className="form-control" ref="password" placeholder="Masukkan Password.." required="required" />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <button onClick={() => this.register()} type="submit" className="btn btn-primary login-btn btn-block">Sign Up!</button>
                                </div>
                            </div>

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
export default connect(null, { loginId })(Footer); //untuk memanggil function id di loginId 
