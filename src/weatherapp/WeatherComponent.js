import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import '../css/weatherapp/WeatherComponent.css'

export default class WeatherComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputData: 'Hyderabad',
            data: '',
            coulds: '',
            humidity: '',
            temp_c: '',
            feelsLike_c: '',
            name: '',
            region: '',
            country: '',
            dateOnload: new Date(),
            image: '',
            error: '',
            success: '',
            image_flag: false
        }

        this.inputData = this.inputData.bind(this)
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        document.body.style.backgroundColor = "white"
        //get current weather using openweathermap with the latitudes and longititudes
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                // console.log("Latitude is :", position.coords.latitude);
                // console.log("Longitude is :", position.coords.longitude);
            });
        }
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error Getting Weather Conditions'
                });
                this.getData()
            }
        );
    }

    fetchWeather(lat = 25, lon = 25) {
        console.log(lat, lon)

        var weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=849338767c0e95025b5559533d26b7c4&units=metric`
        //weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat=17.34&lon=78.5287&APPID=849338767c0e95025b5559533d26b7c4&units=metric'

        axios.get(weatherURL, { responseType: 'json' })
            .then(res => {
                //console.log(res.data)
                this.setState({
                    data: new Date().toString(),
                    feelsLike_c: res.data.main.feels_like,
                    humidity: res.data.main.humidity,
                    coulds: res.data.weather[0].description,
                    temp_c: res.data.main.temp,
                    name: res.data.name,
                    inputData: res.data.name,
                    // region: JSON.stringify(res.data.location.region),
                    country: res.data.sys.country,
                    // image: "http://" + JSON.stringify(res.data.current.condition.icon).toString().substring(3).replace(/['"]+/g, ''),
                    error: '',
                })
                // console.log(this.state.data)
                // console.log(res.data)
                // console.log(res.data.main)
                // console.log(res.data.main.feels_like)
            })
            .catch(error => {
                this.setState({ error: 'Requested City isnt available' })
                console.log("request city not available")
                this.getData()
            })
    }

    //getData fetch the data from the weatherapi for the input data
    getData() {

        console.log(this.state.inputData)

        const weatherURL = `http://api.weatherapi.com/v1/current.json?key=3e79fb6a68cb4b4d8e6111159203011&q=${this.state.inputData}&aqi=no`
        //`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=6a469f798aed60f706c50c96d2c735b1`

        const fetch = async () => {
            const data = await axios.get(weatherURL, { responseType: 'json' })
                .then(res => {
                    this.setState({ image: JSON.stringify(res.data.current.condition.icon) })
                    console.log(res.data.current.condition.icon)
                })
        }
        fetch();
        //console.log("image = " + this.state.image)

        axios.get(weatherURL, { responseType: 'json' })
            .then(res =>
                this.setState({
                    data: JSON.stringify(res.data.current.last_updated),
                    feelsLike_c: JSON.stringify(res.data.current.feelslike_c),
                    humidity: JSON.stringify(res.data.current.humidity),
                    coulds: JSON.stringify(res.data.current.condition.text),
                    temp_c: JSON.stringify(res.data.current.temp_c),
                    name: JSON.stringify(res.data.location.name),
                    region: JSON.stringify(res.data.location.region),
                    // inputData: JSON.stringify(res.data.location.name).replace(/['"]+/g, ''),
                    country: JSON.stringify(res.data.location.country),
                    image: "http://" + JSON.stringify(res.data.current.condition.icon).toString().substring(3).replace(/['"]+/g, ''),
                    error: '',
                    image_flag: true
                }))
            .catch(error => this.setState({ error: 'Requested City isnt available' }))
    }

    inputData(event) {
        this.setState({ inputData: event.target.value })
    }

    newCity() {
        console.log(this.props.newCity)
    }

    render() {
        return (

            <div className="container-fluid p-2 w-75">
                <h1 className="text-center">Demonstration of Third party API calls</h1>
                <div className="overflow-auto">
                    <table className="table table-striped weather-table w-50">
                        <thead>
                            <tr><td>{this.state.error && <div className="alert alert-warning" id="abc">{this.state.error}</div>}</td></tr>
                            {/* <tr><td>{this.state.success && <div className="alert alert-success" id="abc">{this.state.success}</div>}</td></tr> */}
                        </thead>
                        <tbody >
                            <tr className="p-2 mt-2 mb-2">
                                <td className="mt-2 mb-2">
                                    <input type="text" id="newCity" name="newCity" onChange={this.inputData} value={this.state.inputData} className="form-control search-city" />
                                    <p id="emailHelp" className="form-text text-muted ">Search with city Name.</p>
                                </td>
                            </tr>
                            <tr className="p-2 mt-2  mb-2 text-center">
                                <td>
                                    <button className="btn btn-info search-city" onClick={this.getData}> Search </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-hover table-striped weather-table2 p-2">
                        <thead className="thead-dark">
                            <tr>
                                <th>Data Updated On</th>
                                <th>Temperature in Celcious</th>
                                <th>Feels Like in Celcious</th>
                                <th>Humidity</th>
                                <th>Clouds</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{moment(this.state.data.replace(/['"]+/g, '')).format("DD-MM-YYYY")}</td>
                                <td>{this.state.temp_c}</td>
                                <td>{this.state.feelsLike_c}</td>
                                <td>{this.state.humidity}</td>
                                <td id="img" background={this.state.image && this.state.image}>{this.state.coulds.replace(/['"]+/g, '')}</td>
                                <td>{this.state.name.replace(/['"]+/g, '')}</td>
                                <td>{this.state.region.replace(/['"]+/g, '')}</td>
                                <td>{this.state.country.replace(/['"]+/g, '')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}