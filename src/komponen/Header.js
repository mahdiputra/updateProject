import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/components/button/Button';
import { connect } from 'react-redux';//menghubungkan dengan global state
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { SplitButton } from 'primereact/components/splitbutton/SplitButton';
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';
import axios from 'axios'
import KomentarForm from './komentarForm'
// import '../css/card.css'



class Header extends Component {
    constructor() {
        super()
        this.state = {
            dataUser: [],
            ActivityComments: [],
            dataku: [],
            jumlahLike: [],
            MyActivity: [],
            Me: [],
            userID: localStorage.getItem('idUser')
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    //=================================================================render awal
    componentWillMount() {

        axios.get(process.env.REACT_APP_API + `users/${this.state.userID}`)
            .then((x) => {
                this.setState({
                    Me: x.data[0]
                })
            })

            axios.get(process.env.REACT_APP_API + `users`)
            .then((x) => {
                this.setState({
                    dataUser: x.data
                })
            })


        axios.get(process.env.REACT_APP_API + `${this.state.userID}/list` )
            .then((x) => {
                console.log(x.data)
                this.setState({
                    MyActivity: x.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    //==========================================================untuk dapat komen yang dirender
    comment(activityID) {
        axios.get(process.env.REACT_APP_API + `${activityID}/comments`)
          .then(data => {
            this.setState({
              ActivityComments: data.data,
              activityID: activityID
            })
          })
          .catch(err => {
            alert("gagal ambil data comment")
          })
      }

      handleSubmit(event) {
        event.preventDefault();
        axios.post(process.env.REACT_APP_API + `${this.state.activityID}/comment`, {
          PeopleID: this.state.userID,
          text: this.state.value
        })
          .then(data => {
            alert("komentar berhasil")
          })
          .catch(err => {
            alert("komentar gagal")
          })
      }

      handleChange(event) {
        this.setState({ value: event.target.value });
      }
    


    //=============================================================untuk like
    like(activityID) {
        axios.post(process.env.REACT_APP_API + `${activityID}/like`, {

            PeopleID: this.state.userID

        }).then((respon) => {
            alert('berhasil like')
        }).catch((gagal) => { alert('gagal like') })
    }

    unlike(activityID) {
        axios.post(process.env.REACT_APP_API + `${activityID}/unlike`, {
          PeopleID: this.state.userID
        })
          .then(data => {
            alert("unlike berhasil")
          })
          .catch(err => {
            alert("unlike gagal")
          })
      }
    

    //=================================================================untuk follow dan unfollow
    follow(id) {
        console.log(id)
        axios.post(process.env.REACT_APP_API + `users/${this.state.userID}/follow`, {

            peopleID2: id //ini untuk req body orang yang akan di follow

        }).then((respon) => {
            alert('berhasil follow')
        }).catch((gagal) => { console.log(gagal) })
    }

    unfollow(id) {
        console.log(id)
        axios.post(process.env.REACT_APP_API + `users/${this.state.userID}/unfollow`, {

            peopleID2: id //ini untuk req body orang yang akan di follow

        }).then((respon) => {
            alert('berhasil unfollow')
        }).catch((gagal) => { console.log(gagal) })
    }
    //=============================================== untuk delete status

    update(id) {
        var url = 'http://localhost:3210/'
    }

    render() {
        var items = [
            { label: 'Sunting', icon: 'fa-refresh', command: () => { } },
            { label: 'Hapus', icon: 'fa-close', command: () => { } },
            { label: 'Tautan', icon: 'fa-link', command: () => { } },
            { label: 'Desain', icon: 'fa-paint-brush', command: () => { } },
        ];


        var ButPad = {
            marginTop: "5px",
            paddingRight: "75px",
            paddingLeft: "75px",
            color: "white"
        }

        //==========================================================userlist
        const UserList = this.state.dataUser.map((a, b) => {
            return (
                <div class="panel-body" key={a.ID}>
                    <div class="card">
                        <div class="box">
                            <div class="img">
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/06/default-user-profile-picture-7.png" alt="foto profil" style={{ width: 50 }} />
                            </div>
                            <h2>{a.first_name} {a.last_name}<br /></h2>
                            <span>
                                <ul>
                                    <button onClick={() => this.follow(a.ID)}>follow</button>
                                    <button onClick={() => this.unfollow(a.ID)}>unfollow</button>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <hr />
                </div>

            )
        })

        //========================================================== status list


        const MyActivityComponent = this.state.MyActivity.map((a, b) => {
            return (
                <div className="row" key={b}>
                    <div className="tab-content">
                        <ul className="media-list">
                            <li className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object img-circle" src="http://profilepicturesdp.com/wp-content/uploads/2018/06/default-user-profile-picture-7.png" alt="profile" />
                                </a>
                                <div className="media-body">
                                    <div className="well well-lg">
                                        <h4 className="media-heading text-uppercase reviews">{a.first_name} </h4>
                                        <ul className="media-date text-uppercase reviews list-inline">
                                            <span>{new Date(a.created_at).toLocaleString()}</span>
                                        </ul>
                                        <h3 className="media-comment">
                                            {a.text}
                                        </h3>
                                        <hr />
                                        <button type="button" className="btn btn-outline-primary" onClick={() => this.like(a.ID)}>Like</button>
                                        <button style={{ marginLeft: 5 }} type="button" className="btn btn-outline-secondary" onClick={() => this.unlike(a.ID)}>Unlike</button>

                                        <button style={{ marginLeft: 5 }} type="button" className="btn btn-outline-primary" onClick={() => this.comment(a.ID)} data-toggle="modal" data-target="#exampleModalCenter">Comment</button>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            )
        }).reverse()

        const CommentsActivityComponent = this.state.ActivityComments.map((a, b) => {
            return (
                <div className="list-group" key={b}>
                    <a className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h3 className="mb-1">{a.first_name}</h3>
                        </div>
                        <p className="mb-1">{a.text}</p>
                    </a>
                    <small>{new Date(a.created_at).toLocaleString()}</small>
                </div>
            )
        })

        return (
            <div>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">User comments in activity</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {CommentsActivityComponent}
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="modal-footer">
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Input your opinion here</label>
                                        <textarea className="form-control" onChange={this.handleChange} ></textarea>
                                    </div>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <input type="submit" value="Add your opinion" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <header>
                    <nav className="navbar navbar-inverse" style={{ background: "purple" }}>
                        <div className="container" >

                            <div className="navbar-header">
                                <a href="/activity" className="navbar-brand">
                                    <img src="img/mad.jpg" alt="wadaw" width="25px" />
                                </a>
                                <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menucollapse">
                                    <span style={{ color: "firebrick" }} className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>


                            <div className="collapse navbar-collapse" id="menucollapse">

                                <ul className="nav navbar-nav">
                                    <li><Link to='/activity'>Profile</Link></li>
                                    <li><Link to='/Header'>Home</Link></li>
                                </ul>

                                <div>
                                    <button style={{ marginright: "10px" }} className="btn btn-default navbar-btn navbar-right">
                                        <Link to='/'>log out</Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </nav>
                </header>

                <div className="container">
                    <ScrollPanel style={{ width: '100%', height: '100%' }}>
                        <div class="col-xs-12 col-sm-4 col-lg-4" style={{ background: "rgb(198, 191, 248)", float: "right", marginTop: "20px" }}>

                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <h1 class="panel-title">Sentry User</h1>
                                </div>

                                <div className="" id="panel-1">

                                    {UserList}




                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-8 col-lg-8" style={{ background: "rgb(198, 191, 248)", float: "right", marginTop: "20px" }}>

                            <div class="panel panel-primary">




                                {/* <KomentarForm />
                                <KomentarForm /> */}

                                {MyActivityComponent}


                            </div>

                        </div>
                    </ScrollPanel>
                </div>

            </div>
        );
    }
}




const mapStateToProps = (state) => {
    const id = state.login // login dapat dari reducer
    const nama = state.NamaUser
    return { id, nama }

}




export default connect(mapStateToProps)(Header); //memanggil global state menggunakn map state to props
