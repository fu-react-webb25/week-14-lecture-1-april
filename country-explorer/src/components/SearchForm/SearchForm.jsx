import { useRef } from 'react';
import './searchForm.css';
import axios from 'axios';

const SearchForm = ({ setActiveCountry }) => {
    const inputRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        if(inputRef.current.value.length > 0) {
            axios.get(`https://restcountries.com/v3.1/name/${inputRef.current.value}?fields=capital,region,area,population,fifa,timezones,name,currencies,languages,flags`).then(data=> setActiveCountry(data.data[0]))
            .catch(err => console.log(err));
            inputRef.current.value = '';
        }
    }

    return (
        <form className="form section">
            <input 
                type="text" 
                className="form__input"
                placeholder="Search for a country..."
                aria-label="Search for a country"
                ref={ inputRef }
            />
            <button 
                onClick={ handleSearch }
                className="form__button"
            >
                Search
            </button>
            <p className="form__example">Example: Sweden, Finland, Greece</p>
        </form>
    )
}

export default SearchForm;