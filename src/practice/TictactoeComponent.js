import React, { Component } from 'react'

import '../css/TictactoeComponent.css'

export default class TictactoeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            spaces: '',
            disabled: false,
            counter: 0,
            xBoxes: [],
            oBoxes: [],
            res: ''
        }

        this.chance = this.chance.bind(this)
        this.restart = this.restart.bind(this)
        this.wins = this.wins.bind(this)
        this.result = this.result.bind(this)
    }

    componentDidMount() {
        document.body.style.backgroundColor = "rgb(144 137 137)"
    }

    chance(event) {
        //console.log("Counter = " + this.state.counter)
        if (this.state.counter % 2 === 0) {
            event.target.innerHTML = "X"
            // let aa = parseInt(event.target.id)
            this.state.xBoxes.push(event.target.id)
            //this.state.result.aa = "X"
            this.setState({ counter: this.state.counter + 1 })
            document.getElementById(event.target.id).disabled = true;

            if (this.wins(this.state.xBoxes)) {
                //console.log("X Wins")
                this.setState({ res: "X Wins" })
                this.result()
            }
        }
        else {
            //let aa = event.target.id
            //o.push(event.target.id)
            this.state.oBoxes.push(event.target.id)
            this.setState({ counter: this.state.counter + 1 })
            event.target.innerHTML = "O"
            document.getElementById(event.target.id).disabled = true;
            if (this.wins(this.state.oBoxes)) {
                //console.log("O Wins")
                this.setState({ res: "O Wins" })
                this.result()
            }

        }

        if (this.state.counter === 8 && this.state.res === '') {

            //console.log("FULL STATCK = ")
            this.setState({ res: "DRAW" })
            document.getElementById("reset").disabled = false;
        }

        // console.log(event.target.id)
        // event.target.value = "X"

        // console.log(event.target.innerHTML)
        // console.log("moves = "+moves)
        // console.log("xuser = " + x.length)
        // console.log("ouser = " + o)
        // console.log("x = " + this.state.xBoxes)
        // console.log("o = " + this.state.oBoxes)

        //console.log("o = " + this.state.result)

        //this.result()

    }

    restart() {
        //console.log("reset")
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).innerHTML = ""
            document.getElementById(i).disabled = false;
            document.getElementById(i).className = "btn  btn-dark waves-effect";
        }
        this.setState({ counter: 0, xBoxes: [], oBoxes: [], res: '' })
    }

    result() {
        //console.log("IN PROCESS")
        for (let i = 1; i < 10; i++) {
            //document.getElementById(i).innerHTML = ""
            document.getElementById(i).disabled = true;
        }
        this.setState({ counter: 0, xBoxes: [], oBoxes: [] })

    }


    wins(pos) {

        //console.log("WINS = "+pos)
        if (pos.indexOf('1') > -1 && pos.indexOf('2') > -1 && pos.indexOf('3') > -1) {
            this.buttonHightlight(1, 2, 3)
            return true;
        }
        else if (pos.indexOf('4') > -1 && pos.indexOf('5') > -1 && pos.indexOf('6') > -1) {
            this.buttonHightlight(4, 5, 6)
            return true;
        }
        else if (pos.indexOf('7') > -1 && pos.indexOf('8') > -1 && pos.indexOf('9') > -1) {
            this.buttonHightlight(7, 8, 9)
            return true;
        }
        else if (pos.indexOf('1') > -1 && pos.indexOf('4') > -1 && pos.indexOf('7') > -1) {
            this.buttonHightlight(1, 4, 7)
            return true;
        }
        else if (pos.indexOf('2') > -1 && pos.indexOf('5') > -1 && pos.indexOf('8') > -1) {
            this.buttonHightlight(2, 5, 8)
            return true;
        }
        else if (pos.indexOf('3') > -1 && pos.indexOf('6') > -1 && pos.indexOf('9') > -1) {
            this.buttonHightlight(3, 6, 9)
            return true;
        }
        else if (pos.indexOf('1') > -1 && pos.indexOf('5') > -1 && pos.indexOf('9') > -1) {
            this.buttonHightlight(1, 5, 9)
            return true;
        }
        else if (pos.indexOf('3') > -1 && pos.indexOf('5') > -1 && pos.indexOf('7') > -1) {
            this.buttonHightlight(3, 5, 7)
            return true;
        }
    }

    buttonHightlight(b1, b2, b3) {
        document.getElementById(b1).className = "btn btn-info";
        document.getElementById(b2).className = "btn btn-info";
        document.getElementById(b3).className = "btn btn-info";
    }

    render() {
        return (
            <div className=" container-fluid tictactoe overflow-auto">
                <h1>Welcome to <strong>TicTacToe</strong> Game</h1>
                <table className="game-table">
                    <thead>
                        <tr>
                            <td><strong>{this.state.res.length > 0 && this.state.res}</strong></td>
                            <td><strong>{this.state.counter % 2 === 0 ? "X Turn" : "O Turn"}</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td style={{ height: "95px", width: "95px" }}><button onClick={this.chance} id="1" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                            <td style={{ height: "95px", width: "95px" }}><button onClick={this.chance} id="2" className="btn  btn-light waves-effect  chance">{this.state.spaces}</button></td>
                            <td style={{ height: "95px", width: "95px" }}><button onClick={this.chance} id="3" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.chance} id="4" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="5" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="6" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.chance} id="7" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="8" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="9" className="btn  btn-light waves-effect chance">{this.state.spaces}</button></td>
                        </tr>
                        <tr>
                            <td colSpan="3" align="center">
                                <button onClick={this.restart} id="reset" className="btn btn-success" >Restart</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
            </div>
        )
    }

}