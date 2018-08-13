import React, { Component } from 'react';
import Navbar from './navbar'
import { connect } from 'react-redux';//menghubungkan dengan global state
import axios, { post } from 'axios';
import { Nama } from '../actions'


class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Me: [],//untuk nama
      MyActivity: [],
      ActivityComments: [],
      userID: localStorage.getItem('idUser'),
      file: null,
      value: '',
      activityID: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  componentWillMount() {
    axios.get(process.env.REACT_APP_API + `users/${this.state.userID}`)
      .then((x) => {
        this.setState({
          Me: x.data[0]
        })
      })
    axios.get(process.env.REACT_APP_API + `${this.state.userID}/myactivity`, {
      peopleID: this.state.userID
    })
      .then((x) => {
        this.setState({
          MyActivity: x.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }



  detailActivity(activityID) {
    alert(activityID)
  }



  updateStatus() {
    axios.post(process.env.REACT_APP_API, {
      PeopleID: this.state.userID,
      text: this.refs.text.value
    })
      .then((respon) => {
        alert("update sukses")
      })
      .catch((gagal) => { console.log(gagal) })
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


  like(activityID) {
    axios.post(process.env.REACT_APP_API + `${activityID}/like`, {
      PeopleID: this.state.userID
    })
      .then(data => {
        alert("berhasil like status")
      })
      .catch(err => {
        alert("gagal like status")
      })
  }


  unlike(activityID) {
    axios.post(process.env.REACT_APP_API + `${activityID}/unlike`, {
      PeopleID: this.state.userID
    })
      .then(data => {
        alert("unlike like status")
      })
      .catch(err => {
        alert("unlike like status")
      })
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  render() {
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
                    <h4 className="media-heading text-uppercase reviews">{this.state.Me.first_name} </h4>
                    <ul className="media-date text-uppercase reviews list-inline">
                      <span>{new Date(a.created_at).toLocaleString()}</span>
                    </ul>
                    <h3 className="media-comment">
                      {a.text}
                    </h3>
                    <hr />
                    <button type="button" className="btn btn-outline-primary" onClick={() => this.like(a.ID)}>{a.total_like} Like</button>
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
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 " style={{ background: "url('img/pattern.png')", height: "200px" }}>
              <div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="hovereffect">
                    <img className="img-responsive" src="http://profilepicturesdp.com/wp-content/uploads/2018/06/default-user-profile-picture-7.png" alt="" />
                    <div className="overlay">
                      <h2>ganti Profpic?</h2>
                      <form onSubmit={this.onFormSubmit}>
                        <input type="file" onChange={this.onChange} />
                        <input type="submit" value="Upload" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <h1 style={{ float: "right", padding: "0", margin: "0" }}>{this.state.Me.first_name} {this.state.Me.last_name}</h1>

            </div>



            <div className="col-xs-12 col-sm-3 col-lg-3" style={{ background: "purple", margintop: "20px", padding: "10px" }}>
              <div className="panel panel-default" style={{}}>
                <div className="panel-body">total viewed : 100 </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-body">daily viewed : </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-9 col-lg-9" style={{ background: "darkslateblue", height: "163px", padding: "10px" }}>
              <textarea ref='text' placeholder="Mau tulis apa.." id="status" className="form-control" style={{ height: "100px", width: "100%", paddingtop: "5px", placeholder: "write something.." }}></textarea>

              <ul style={{ display: "inline", listStyleType: "none", float: "right", paddingtop: "3px" }}>
                <li style={{ display: "inline", marginTop: "2px" }}>
                  <button style={{ marginTop: 15 }} className="btn btn-default " onClick={() => this.updateStatus()} id="post" >Post</button></li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-9" style={{ marginTop: 0 }}>

              {MyActivityComponent}


            </div>

          </div>
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




export default connect(mapStateToProps, { Nama })(Activity); //memanggil global state menggunakn map state to props