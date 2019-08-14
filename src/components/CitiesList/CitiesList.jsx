import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteCityAction } from '../../redux/actions/appActions';

class CitiesList extends React.Component {

    deleteCity = (key) => {
        this.props.deleteCity(key);
    }
    getCitiesList = () => {
        return this.props.cities.map((city, key) => {
            return (
                <div key={city.name} className="city-link">
                    <Link to={`/City/` + key}>
                        <span>{city.name}:</span>
                        <p>Temperature: {city.main.temp}&#8451;
                        Min: {city.main.temp_min}&#8451; - Max: {city.main.temp_max}&#8451;</p>
                    </Link>
                    <div onClick={() => this.deleteCity(key)} className="add-button">Delete</div>
                </div>
            )
        });
    }

    render() {
        console.log(this.props.cities);
        return (
            <div className="cities-list">
                {this.getCitiesList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.appReducer.cities,
        state: state.appReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCity: (id) => dispatch(deleteCityAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);