import React, { Component } from 'react'
import '../css/CalculatorComponent.css'

export default class CalcComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            calculate: '0',
            backDisabled: true
        }

        this.solve = this.solve.bind(this)
        //this.s = this.s.bind(this)
        this.calculate = this.calculate.bind(this)
        this.divideString = this.divideString.bind(this)
        this.back = this.back.bind(this)
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#4e2b2b"
    }

    render() {
        return (
            <div className="calculatorcomponent">
                {/* cellPadding="2" cellSpacing="4" */}
                <table className="table-striped " >
                    <thead>
                        <tr>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3">
                                <input type="text" value={this.state.calculate} className="form-control font-size-8" readOnly autoFocus />
                            </td>
                            <td><button onClick={() => this.solve('/')} className="btn  btn-info">/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.solve('1')} className="btn  btn-light waves-effect">1</button></td>
                            <td><button onClick={() => this.solve('2')} className="btn btn-light waves-effect">2</button></td>
                            <td><button onClick={() => this.solve('3')} className="btn btn-light waves-effect">3</button></td>
                            <td><button onClick={() => this.solve('+')} className="btn btn-info">+</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.solve('4')} className="btn btn-light waves-effect">4</button></td>
                            <td><button onClick={() => this.solve('5')} className="btn btn-light waves-effect">5</button></td>
                            <td><button onClick={() => this.solve('6')} className="btn btn-light waves-effect">6</button></td>
                            <td><button onClick={() => this.solve('-')} className="btn btn-info">-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.solve('7')} className="btn btn-light waves-effect">7</button></td>
                            <td><button onClick={() => this.solve('8')} className="btn btn-light waves-effect">8</button></td>
                            <td><button onClick={() => this.solve('9')} className="btn btn-light waves-effect">9</button></td>
                            <td><button onClick={() => this.solve('*')} className="btn btn-info">*</button></td>
                        </tr>
                        <tr>
                            <td><button disabled={this.state.backDisabled} onClick={() => this.back()} className="btn btn-info" >&lt;-</button></td>
                            <td><button onClick={() => this.solve('0')} className="btn btn-light waves-effect">0</button></td>
                            <td><button onClick={() => this.reset()} className="btn btn-info">AC</button></td>
                            <td><button onClick={() => this.solve('=')} className="btn btn-light waves-effect">=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    // eval() {

    // }

    reset() {
        this.setState({
            calculate: '0',
            backDisabled: true
        })
    }

    back() {
        let backSpace = this.state.calculate
        //console.log(backSpace)
        if (backSpace.length === 1 || backSpace === "NaN") {
            backSpace = ''
        }
        else {
            backSpace = backSpace.slice(0, backSpace.length - 1)
        }
        //console.log(backSpace)
        this.setState({
            calculate: backSpace
        })
    }

    solve(number) {
        //console.log(typeof number)
        let s = [];
        if (this.state.calculate === "0") {
            //console.log("IF")
            this.setState({
                calculate: number,
                backDisabled: false
            })
        }
        else if (number === "=") {
            s = this.state.calculate.split("^*/+-")
            console.log("split = " + s)
            //console.log("FINAL ANS = " + eval(this.state.calculate))
            let ans = this.calculate(this.divideString(this.state.calculate))
            this.setState({
                calculate: ans + ''
            })
            console.log("ANSWER =====" + this.state.calculate)
            console.log("ans = " + ans)
        }
        else {
            //console.log("ELSE")
            this.setState({
                calculate: this.state.calculate + number,
                backDisabled: false
            })
        }

        //console.log(this.state.calculate)
    }


    divideString(s) {
        let dividedString = [], ch = ''

        //console.log("division started")
        for (let i = 0; i < s.length; i++) {
            ch = s.charAt(i)
            // op = 0
            if ('^*/+-'.indexOf(ch) > -1) {
                //op = i
                // console.log("index = "+i)
                // console.log("0 index = "+s.charAt(0))
                if (i - 1 === 0) {
                    dividedString.push(parseFloat(s.charAt(0)))
                }
                else {
                    //console.log(s.substring(0,i-1))
                    dividedString.push(parseFloat(s.substring(0, i)))
                }
                //console.log("added as number ="+s.substring(0,i-1))
                dividedString.push(s.charAt(i))
                s = s.substring(i + 1, s.length)
                i = 0
                //console.log("main string = "+s)
            }

        }
        dividedString.push(parseFloat(s))

        console.log("method of string division = " + dividedString)
        // console.log("type of divide = "+typeof dividedString)
        // console.log("type of divide length = "+ dividedString.length)
        return dividedString;
    }



    // s(s) {
    //     // --- Parse a calculation string into an array of numbers and operators
    //     var calculation = [],
    //         ch = '',
    //         current = '';

    //     for (var i = 0; i < s.length; i++) {
    //         ch = s.charAt(i)
    //         if ('^*/+-'.indexOf(ch) > -1) {
    //             if (current === '' && ch === '-') {
    //                 current = '-';
    //             }
    //             else {
    //                 calculation.push(parseFloat(current), ch);
    //                 current = '';
    //             }
    //         }
    //         else {
    //             current += s.charAt(i);
    //         }
    //     }
    //     if (current !== '') {
    //         calculation.push(parseFloat(current));
    //     }

    //     console.log("string returned to calculate = " + calculation)
    //     console.log("type of s = " + typeof calculation)
    //     return calculation;
    // }

    calculate(calc) {
        // --- Perform a calculation expressed as an array of operators and numbers
        let ops = [{ '*': (a, b) => a * b, '/': (a, b) => a / b },
        { '+': (a, b) => a + b, '-': (a, b) => a - b }],
            newCalc = [],
            currentOp;
        for (var i = 0; i < ops.length; i++) {
            for (var j = 0; j < calc.length; j++) {
                if (ops[i][calc[j]]) {
                    currentOp = ops[i][calc[j]];
                } else if (currentOp) {
                    newCalc[newCalc.length - 1] =
                        currentOp(newCalc[newCalc.length - 1], calc[j]);
                    currentOp = null;
                } else {
                    newCalc.push(calc[j]);
                }
                console.log(newCalc);
            }
            calc = newCalc;
            newCalc = [];
        }
        if (calc.length > 1) {
            console.log('Error: unable to resolve calculation');
            return calc;
        } else {
            return calc[0];
        }

    }
    // var calculateButton = document.getElementById('calculate'),
    //     userInput = document.getElementById('userInput'),
    //     result = document.getElementById('result');
    // calculateButton.addEventListener('click', function() {
    //     result.innerHTML = "The answer is " + calculate(parseCalculationString(userInput.value));
    // });

}