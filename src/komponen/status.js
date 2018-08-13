import React from 'react';

export default function Status(props) {

    return (
        <div>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="dropdown" style={{ float: "right", paddingBottom: "20px" }}>
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ...
                            </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            Post 1
                                <li /><a className="dropdown-item" href="#">Delete</a>
                            <li /><a className="dropdown-item" href="#">Something else here</a>
                        </ul>
                    </div>
                    <img src="../img/mad.jpg" style={{ width: "20px" }} /><a style={{ color: "white" }}>{this.props.testing}</a>
                    <p />
                    <h1 className="panel-title">Post 1</h1>
                </div>

                <div className="panel-collapse collapse" id="panel-1">
                    <div className="panel-body">
                        <p>ini beda isi</p>
                    </div>

                </div>
                <div className="panel-footer">
                    <button data-target="#panel-1" data-toggle="collapse" data-parent="#lin_Accor" >Selengkapnya...</button>
                </div>
            </div>
        </div>
    )
}