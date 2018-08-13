import React, { Component } from 'react'

const UserList = (user) => {
    console.log("User", user)
    return (
        user.map((data,i) => {
            <div class="panel-body" key={data.id}>
            <div class="card">
                <div class="box">
                    <div class="img">
                        <img src="https://0.gravatar.com/avatar/fa4a4b435f837496e958f57bee80e5a7?s=128&d=identicon&r=G" style={{ width: 50 }} />
                    </div>
                    <h2> ini nanti nama state <br /></h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et.</p>
                    <span>
                        <ul>
                            <button>follow</button>
                        </ul>
                    </span>
                </div>
            </div>
            <hr />
        </div>
        })

    )
}

export default UserList