import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class CitiesList extends React.Component {
    getCitiesList = () => {
        return this.props.cities.map((city, key) => {
            return (
                <div key={city.name} className="city-link">
                    <Link to={`/City/` + key}>
                        <span>{city.name}:</span>
                        <p>Temperature: {city.main.temp}&#8451;
                        Min: {city.main.temp_min}&#8451; - Max: {city.main.temp_max}&#8451;</p>
                    </Link>

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
    }
}

export default connect(mapStateToProps, null)(CitiesList);