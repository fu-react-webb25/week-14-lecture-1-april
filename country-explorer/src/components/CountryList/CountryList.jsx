import './countryList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { shuffleArray } from '../../utils/shuffleArray';
import CountryCard from '../CountryCard/CountryCard';

const CountryList = ({ setActiveCountry }) => {
    const [suggestions, setSuggestions] = useState([]);
    const regions = [
        'europe',
        'asia',
        'africa',
        'north america',
        'south america',
        'oceania'
    ];

    useEffect(() => {
        const region = regions[Math.floor(Math.random() * regions.length)];
        axios.get(`https://restcountries.com/v3.1/region/${region}?fields=capital,region,area,population,fifa,timezones,name,currencies,languages,flags`)
            .then(data => setSuggestions(shuffleArray(data.data).slice(0, 3)));
    }, []);

    useEffect(() => {
        console.log(suggestions);
    }, [suggestions]);

    return (
        <main className="countries section">
            <h2 className="countries__title">Suggestions</h2>
            <section className="countries__list">
                {
                    suggestions.map((country, index) => {
                        return <CountryCard
                            key={index}
                            country={ country }
                            setActiveCountry={ setActiveCountry }
                        />
                    })
                }
            </section>
        </main>
    )
}

export default CountryList;