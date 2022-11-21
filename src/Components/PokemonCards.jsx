import React from 'react';
import { Link } from 'react-router-dom';

function Card({ pokemon, loading, currentOffset }) {
	return (
		<>
			{loading ? (
				<h1>Please wait loading...</h1>
			) : (
				pokemon.map((item) => (
					<div className="col-sm-12 col-md-6 col-lg-3" key={item.id}>
						<div className="pokemon-card">
							<Link
								to={`/pokemon-detail/${item.id}`}
								state={{ item, pokemon, currentOffset }}>
								<div className="card-inner-container text-center text-color">
									<h2 className="fs-3">
										<span className="fs-6">CP </span>
										{item.base_experience}
									</h2>
									<img src={item.sprites.front_default} alt="of a pokemon" />
									<h3 className="pokemon-name">{item.name}</h3>
								</div>
							</Link>
						</div>
					</div>
				))
			)}
		</>
	);
}

export default Card;
