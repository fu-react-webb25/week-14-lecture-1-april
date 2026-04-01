import './countryCard.css';

const CountryCard = ({ country, setActiveCountry }) => {

    console.log(country);
    return (
        <article className="country">
            <img src={ country.flags.png } alt={ country.flags.alt } className="country__flag" />
            <h3 className="country__name">{ country.name.common }</h3>
            <h4 className="country__capital">Capital: {country.capital[0]}</h4>
            <button onClick={ () => setActiveCountry(country) } className="country__button">Learn more</button>
        </article>
    )
}

export default CountryCard;