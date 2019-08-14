import React from "react";
import { connect } from 'react-redux';
import { refreshWeatherAction } from '../../redux/actions/appActions';

class City extends React.Component {
    name = this.props.match.params.name;
    id = this.props.match.params.id;
    state = {
        weather: '',
        main: {},
        wind: {},
    }
    componentDidMount = () => {
        if (this.props.cities[this.id] === undefined) {
            this.setState({
                weather: {},
                main: '',
                wind: '',
                name: "Введите город на главной странице"
            });
        }else{
            const { wind, weather, main, name } = this.props.cities[this.id];
            const time = this.getCurrentTime();
            this.setState({
                weather: weather,
                main: main,
                wind: wind,
                name: name, 
                time: time,
            });
        }
        
    }

    getCurrentTime = () => {
        const now = new Date();
        return now.getHours().toString().padStart(2, 0) + ":"
            + now.getMinutes().toString().padStart(2, 0) + ":"
            + now.getSeconds().toString().padStart(2, 0);
    }

    getCityWeather = () => {
        const time = this.getCurrentTime();
        this.setState({
            time: time,
        });

        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.props.cities[this.id].name + '&units=metric&APPID=0de5d3477dfe7cf46403d74dc294a003';
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        weather: result.weather[0],
                        main: result.main,
                        wind: result.wind,
                        name: result.name
                    });

                    this.props.refreshWeather({
                        id: this.id,
                        weather: result,
                    });
                },
                (error) => {
                    alert("Error!");
                }
            );
            
    }

    render() {
        const { wind, weather, main, time, name } = this.state;
        console.log(this.state);
        return (
            <div className="city-detail">
                <h1>
                    {this.state.name}:
                </h1>
                <p>Description: {weather.description}</p>
                <p>Temperature: {main.temp} Min: {main.temp_min} - Max: {main.temp_max}</p>
                <p>Wind speed: {this.state.wind.speed}</p>
                <p>Time {time}</p>
                <div
                    onClick={this.getCityWeather}
                    className="add-button"
                >
                    Refresh
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cities: state.appReducer.cities,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        refreshWeather: (city) => dispatch(refreshWeatherAction(city)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City);