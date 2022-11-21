import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PokemonDetail from './Components/PokemonDetail';

function App() {
	return (
		// react router, using Routes instead of Switch as vers6 of router uses this and takes an element property.
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:offset?" element={<Home />} />
				<Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
