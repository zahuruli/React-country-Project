import React from 'react';
import './country.css';

const Country = ({ country, id, onRemove }) => {
    const { name, flags, capital, population, area } = country;

    const handleRemove = (name) => {
        onRemove(name);
    };
    return (
        <article className="country">
            <div>
                <img src={flags.png} alt={name.common} className="flag" />
                <h2>Name: {name.common}</h2>
                <h5>Official:{name.official}</h5>
                <h3>Population: {population}</h3>
                <h3>Area: {area}</h3>
                <button
                    className="btn"
                    onClick={() => {
                        handleRemove(name.common);
                    }}>
                    Remove
                </button>
            </div>
        </article>
    );
};

export default Country;
