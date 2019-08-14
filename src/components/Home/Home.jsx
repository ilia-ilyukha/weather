import React from 'react';
import AddForm from '../AddForm/AddForm.jsx';
import CitiesList from '../CitiesList/CitiesList.jsx';

class Home extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <AddForm />
                <p>Examples: Uman, Odessa, Kyiv, London, Lutsk, Mykolaiv</p>
                More cities you can see <a
                    href="https://openweathermap.org/weathermap"
                    target="_blank"
                    className="link"
                >
                    here
                </a>
                <CitiesList />
            </div>

        )
    }
}

export default Home;