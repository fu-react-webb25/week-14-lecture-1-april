import Background from "./components/Background/Background";
import CountryList from "./components/CountryList/CountryList";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import './App.css';
import { useEffect, useState } from "react";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
	const [activeCountry, setActiveCountry] = useState(null);
	useEffect(() => {
		console.log(activeCountry)
	}, [activeCountry]);
	return (
		<div className="app">
			<div className="wrapper">
				<Background />
				<Header />
				<SearchForm setActiveCountry={ setActiveCountry } />
				{
					activeCountry
					? <CountryDetails country={ activeCountry } setActiveCountry={ setActiveCountry } />
					: <CountryList setActiveCountry={ setActiveCountry } />
				}
			</div>
		</div>
	)
}

export default App;
