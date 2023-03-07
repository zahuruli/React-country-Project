import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import './DataFetch.css';
import Search from './Search';

const Url = 'https://restcountries.com/v3.1/all ';

const Datafetch = () => {
    const [isLoading, setIsloading] = useState(true);
    const [countries, setCountries] = useState(null);
    const [error, setError] = useState(null);
    const [filterCountries, setfilterCountries] = useState(countries);

    // const fetchData = async (url) => {
    //     setIsloading(true);

    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         setCountries(data);
    //         setIsloading(false);
    //         setError(null);

    //     } catch (err) {
    //         setIsloading(false);
    //         setError(err);
    //     }
    // };

    useEffect(() => {
        setTimeout(() => {
            fetch(Url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Can not fatched Url');
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setCountries(data);
                    setfilterCountries(data);
                    setIsloading(false);
                })
                .catch((err) => {
                    setIsloading(false);
                    setError(err);
                });
        }, 500);
    }, []);

    const handleRemoveCountry = (name) => {
        const filter = filterCountries.filter((country) => country.name.common !== name);
        setfilterCountries(filter);
    };

    const handleSearch = (searchValue) => {};

    return (
        <div>
            <br />
            <Search onsearch={handleSearch} />
            {isLoading && <h2>Data is Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            {countries && <Countries countries={filterCountries} onRemove={handleRemoveCountry} />}
        </div>
    );
};

export default Datafetch;
