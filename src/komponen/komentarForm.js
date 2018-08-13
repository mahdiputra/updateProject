import React, { Component } from 'react';
import '../css/komentar.css'
import Komen from './komenKomen'
import { connect } from 'react-redux';//menghubungkan dengan global state



class Status extends Component {
    render() {
        return (

                <div className="row">
                        <div className="comment-tabs">
                            <div className="tab-content">

                                <div className="tab-pane active" id="comments-logout">

                                    <ul className="media-list">
                                        <li className="media">
                                            <a className="pull-left">
                                                <img className="media-object img-circle" src="./img/mad.jpg" alt="profile" />
                                            </a>
                                            <div className="media-body">
                                                <div className="well well-lg">
                                                    <h4 className="media-heading text-uppercase reviews"> </h4>
                                                    <ul className="media-date text-uppercase reviews list-inline">
                                                        <li className="dd">22</li>
                                                        <li className="mm">09</li>
                                                        <li className="aaaa">2014</li>
                                                    </ul>
                                                    <h3 className="media-comment">
                                                        Great snippet! Thanks for sharing.
                                                    </h3>
                                                    <hr />
                                                    <textarea style={{ width: '99%', height: 100 }} placeholder='Komentari...' />
                                                    <br />
                                                    <a style={{ width: 40 }} className="btn btn-info btn-circle text-uppercase" data-toggle="collapse" href="#replyKomen" id="reply"><span className="glyphicon glyphicon-thumbs-up"></span> </a>
                                                    <a style={{ width: 100, marginLeft:'72%'}} className="btn btn-default " data-toggle="collapse" href="#replyOne">Post</a>

                                                    <hr />
                                                    <Komen />
                                                    <hr />
                                                    <a style={{ color: 'black', letterSpacing: 2 }} href='#'><span className="glyphicon glyphicon-circle-arrow-down">Tampil lebih banyak ..</span></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    
                </div>
        )

    }

}


const mapStateToProps = (state) => {
    const id = state.login // login dapat dari reducer
    const nama = state.NamaUser
    return { id, nama }

}

export default connect(mapStateToProps)(Status); //memanggil global state menggunakn map state to props


