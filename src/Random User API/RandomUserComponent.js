import React from 'react'
import axios from 'axios'

import './RandomUserComponent.css'

export default class RandomUserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomUser: {},
            keys: []
        }
        this.getUser = this.getUser.bind(this)
        this.displayData = this.displayData.bind(this)
    }
    //https://randomuser.me/api/

    componentDidMount() {
        document.body.style.backgroundColor = "#282c34"
        console.log("RANDOM USER COMPONENT")
        this.getUser();
    }

    getUser() {
        console.log("user is called")
        let Jsonkeys = []
        axios.get('https://randomuser.me/api/')
            .then(res => {
                Object.keys(res.data.results[0]).flatMap(i => Jsonkeys.push(i));
                this.setState({
                    randomUser: (res.data.results[0]),
                    keys: Jsonkeys
                });
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });

    }

    displayData() {
        // console.log("DATA")
        let dataToDisplay = "";
        return Object.values(this.state.randomUser).map((item, i) => {
            console.log(item);
            <>
                <dt>Name :</dt>
                <dd>{item}</dd>
                <dt>Gender :</dt>
                <dd>{i}</dd>
            </>
        })
        // return dataToDisplay;//JSON.stringify(this.state.randomUser, undefined, 5);
    }

    render() {
        return (
            <div className="container-fluid w-75 randomuser-block p-4 mb-4">
                <h1>Welcome Back</h1>
                <p>Description: Random API is the API that generates the Random users for each page load.</p>
                <code>{this.state.randomUser && this.displayData()}</code>

                <dl>

                    {
                        this.state.randomUser && (
                            Object.values(this.state.randomUser).map((item, i) => <><dt key={i}>{this.state.keys[i]}</dt>
                                <dd key={this.state.keys[i]}>
                                    {/* {Object.values(item).map((sub, k) => <>{sub}</>)} */}
                                    {JSON.stringify(item).replaceAll(":", " - ").replaceAll(/,|{|}|\"/g, " ")}
                                </dd></>)
                        )
                    }
                </dl>
            </div>
        )
    }
}