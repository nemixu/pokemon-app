import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import PokemonCards from './PokemonCards';
import Button from './Button';

function Home() {
	// On mount make initial req to pokemon api of max 20
	const [searchParams, setSearchParams] = useSearchParams();
	const [pokemonData, setPokemonData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [offset, setOffset] = useState(searchParams.get('offset') || 0);
	const pokeApi = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`;

	const requestPokemon = async () => {
		setLoading(true);
		const data = await axios.get(pokeApi);
		getAllPokemon(data.data.results);
		setSearchParams({ offset });
		setLoading(false);
	};

	// React router
	const getAllPokemon = async (result) => {
		result.map(async (item) => {
			const results = await axios.get(item.url);
			setPokemonData((receivedPokemon) => {
				receivedPokemon = [...receivedPokemon, results.data];
				receivedPokemon.sort((a, b) => (a.id > b.id ? 1 : -1));
				return receivedPokemon;
			});
		});
	};

	const handleButtonClickBack = () => {
		setPokemonData([]);
		setOffset(Number(offset) - 20);
	};

	const handleButtonClickForward = () => {
		setPokemonData([]);
		setOffset(Number(offset) + 20);
	};

	// lifecycle methods -> allows to do things as part of the rendering cycle of the dom.
	// any time endpoint changes, recall
	useEffect(() => {
		requestPokemon();
	}, [offset]);

	return (
		<>
			<div className="pt-3 text-center container">
				<div className="buttons">
					{offset == 0 && '0' ? (
						<Button
							isDisabled
							label="Previous"
							handleClick={handleButtonClickBack}
							className="btn btn-success"
						/>
					) : (
						<Button
							isDisabled={false}
							label="Previous"
							handleClick={handleButtonClickBack}
							className="btn btn-success"
						/>
					)}
				</div>
				<div className="buttons">
					{offset <= 1080 && '1080' ? (
						<Button
							isDisabled={false}
							label="Next"
							handleClick={handleButtonClickForward}
							className="btn btn-warning"
						/>
					) : (
						<Button
							isDisabled
							label="Next"
							handleClick={handleButtonClickForward}
							className="btn btn-warning"
						/>
					)}
				</div>
			</div>
			<div className="card-container container">
				<div className="row">
					<PokemonCards
						pokemon={pokemonData}
						loading={loading}
						currentOffset={offset}
					/>
				</div>
			</div>
		</>
	);
}

export default Home;
