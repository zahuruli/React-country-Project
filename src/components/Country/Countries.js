import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import './Countries.css';

const Countries = ({ countries, onRemove }) => {
    return (
        <section className="countries">
            {countries &&
                countries.map((country) => {
                    const countryNew = { id: uuidv4(), country };
                    return <Country {...countryNew} key={countryNew.id} onRemove={onRemove} />;
                })}
        </section>
    );
};

export default Countries;
