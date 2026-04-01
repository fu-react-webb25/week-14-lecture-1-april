import Detail from '../Detail/Detail';
import './countryDetails.css';
import { formatNumber } from '../../utils/formatNumber';

const CountryDetails = ({ country, setActiveCountry }) => {
    console.log(country);
    
    return (
        <main className="details section">
            <button onClick={ () => setActiveCountry(null) } className="details__close">X</button>
            <section className="details__left">
                <h2 className="details__country">{ country.name.common }</h2>
                <h3 className="details__capital">Capital: { country.capital[0] }</h3>
                <img src={ country.flags.png } alt={ country.flags.alt } className="details__flag" />
            </section>
            <ul className="details__list">
                <Detail 
                    icon="fa-solid fa-users"
                    title="Population"
                    text={formatNumber(country.population)}
                    color="blue"
                />
                <Detail 
                    icon="fa-solid fa-language"
                    title="Language"
                    text={country.languages[Object.keys(country.languages)[0]]}
                    color="yellow"
                />
                <Detail 
                    icon="fa-solid fa-money-bill-1"
                    title="Currency"
                    text={`${country.currencies[Object.keys(country.currencies)[0]].name} (${Object.keys(country.currencies)[0]})`}
                    color="green"
                />
                <Detail 
                    icon="fa-solid fa-location-dot"
                    title="Region"
                    text={ country.region }
                    color="blue"
                />
                <Detail 
                    icon="fa-solid fa-clock"
                    title="Timezone"
                    text={ country.timezones[0] }
                    color="yellow"
                />
                <Detail 
                    icon="fa-solid fa-mountain"
                    title="Area"
                    text={ `${formatNumber(country.area)} km2` }
                    color="green"
                />
            </ul>
        </main>
    )
}

export default CountryDetails;