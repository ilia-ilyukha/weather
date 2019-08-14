import React from 'react';
import { connect } from 'react-redux';
import { addCityAction } from '../../redux/actions/appActions';

class AddForm extends React.Component {
    state = {
        newCity: '',
        weather: '',
    }

    handleCity = (e) => {
        this.setState({
            newCity: e.target.value,
        });
    }

    addCity = () => {
        const { newCity } = this.state;

        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&units=metric&APPID=0de5d3477dfe7cf46403d74dc294a003';
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.cod === "404") {
                        return Promise.reject(new Error(result.statusText))
                    }
                    const res = {
                        weather: result.weather[0],
                        main: result.main,
                        wind: result.wind,
                        name: result.name
                    }
                    this.props.addCity(res);
                    this.setState({
                        weather: result,
                    });
                }
            )
            .catch(function (error) {
                alert("Error! Check city name");
            });

        this.setState({ newCity: '' })
    }

    render() {
        return (
            <div className="add-form">
                <input
                    value={this.state.newCity}
                    onChange={this.handleCity}
                    placeholder="Enter city"
                />
                <div
                    onClick={this.addCity}
                    className="add-button"
                >
                    Add
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cities: state.appReducer.cities,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCity: (city) => dispatch(addCityAction(city)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);