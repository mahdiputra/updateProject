import React, { Component } from 'react';
import '../css/login.css'
import { Link } from 'react-router-dom';

class datadiri extends Component {
    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"/>
                    <div className="container" style={{marginLeft:600}}>
                        <div className="justify-content-center">
                        
                            <div className="col-12 col-md-8 col-lg-6 pb-5">


                                                <div className="card border-primary rounded-0">
                                                    <div className="card-header p-0">
                                                        <div className="bg-info text-white text-center py-2">
                                                            <h3><i className="fa fa-user text-info"></i> PROFIL</h3>
                                                            <p className="m-0">Silahkan isi Profil</p>
                                                        </div>
                                                </div>
                                                <div className="card-body p-3">
                                                
                                                    <div className="form-group">
                                                        <div className="input-group mb-2">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                                            </div>
                                                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="isi nama lengkapmu" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="input-group mb-2">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                                            </div>
                                                            <textarea className="form-control" placeholder="Jelaskan tentang dirimu" ></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <input type="submit" value="Input" className="btn btn-info btn-block rounded-0 py-2"/>
                                                    </div>
                                                    </div>

                                            </div>

                                     </div>

                               </div>
                        </div>
             </div>
        )
    }
}
export default datadiri;













                           