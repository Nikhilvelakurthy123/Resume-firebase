import React from 'react'
import axios from 'axios'

import './RandomUserComponent.css'

export default class RandomUserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomUser: [],
            keys: []
        }
        this.getUser = this.getUser.bind(this)
    }
    //https://randomuser.me/api/

    componentWillMount() {
        document.body.style.backgroundColor = "#282c34"

        this.getUser();
    }

    getUser() {
        let Jsonkeys = []
        console.log("user is called")
        axios.get('https://randomuser.me/api/')
            .then(resp => {
                Object.keys(resp.data.results[0]).forEach(function (key) {
                    var value = resp.data.results[0][key];
                    console.log(value)
                    Jsonkeys.push(value)
                })
                this.setState({
                    randomUser: (resp.data.results[0]),
                    keys: Jsonkeys
                });
                console.log(resp.data.results[0]);
                console.table(Jsonkeys)
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
    }

    render() {
        console.log(JSON.parse(this.state.randomUser['name'])['title'])

        return (
            <div className="container-fluid w-75 randomuser-block p-4 mb-4">
                <div className="card border-0 " >
                    <h1>Welcome Back</h1>
                    <datalist>
                        {
                            this.state.randomUser &&
                            <><dt>Name :</dt>
                                <dd>{this.state.randomUser['name']['title']}</dd>
                                <dt>Gender :</dt>
                                <dd>{this.state.randomUser['gender']}</dd>
                                <dt>Name :</dt>
                                <dd>{this.state.randomUser['name'][2] + " " + this.state.randomUser['name']['first'] + " " + this.state.randomUser['name']['last']}</dd>
                                <dt>Location :</dt>
                                <dd>{this.state.randomUser['location']['country']}</dd>
                                <dt>Email :</dt>
                                <dd>{this.state.randomUser['email']}</dd>
                                <dt>User Name :</dt>
                                <dd>{this.state.randomUser['login']['username']}</dd>
                                <dt>Password :</dt>
                                <dd>{this.state.randomUser['login']['password']}</dd>
                                <dt>DOB :</dt>
                                <dd>{this.state.randomUser['dob']['date']}</dd>
                                <dt>Age :</dt>
                                <dd>{this.state.randomUser['dob']['age']}</dd>
                                <dt>registered :</dt>
                                <dd>{this.state.randomUser['registered']['date']}</dd>
                                <dd>{this.state.randomUser['registered']['age']}</dd> </>
                        }
                    </datalist>

                </div>
            </div>
        )
    }
}