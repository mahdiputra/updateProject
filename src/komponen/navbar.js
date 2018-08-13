import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component {
    render() {
        return (
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
        )
    }

}

export default Navbar;


