import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';

function PokemonDetail() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const type = state.item.types[0].type.name;
	const handleBackClick = () => {
		navigate({
			pathname: '/',
			search: `?offset=${state.currentOffset}`,
		});
	};

	return (
		<div>
			{!state.item ? (
				<div>Oops something went wrong..</div>
			) : (
				<div className="container-fluid" key={state.item.id}>
					<div className="row">
						<div className="col-12">
							<Button
								label="Go back"
								handleClick={handleBackClick}
								isDisabled={false}
								className="btn btn-success mt-3"
							/>
						</div>
						<div className="col-12">
							<div className="pokemon-detail-wrapper">
								<div className={`pokemon-detail-wrapper-card type-${type}`}>
									<div className="img-container">
										<img
											className="pokemon-detail-img"
											src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${state.item.id}.svg`}
											alt="pokemon"
										/>
									</div>
									<div className="detail-container">
										<div className="pokemon-details">
											<h1 className="text-capitalize text-center">
												<span className="fs-2 text-capitalize fw-bold ">
													{state.item.name}
												</span>
											</h1>
										</div>
										<div className="types text-center pb-2">
											{state.item.types.map((typeArray) => (
												<div
													className="d-inline px-2 fs-5 text-capitalize fst-italic"
													key={typeArray.id}>
													{typeArray.type.name}
												</div>
											))}
										</div>

										<div className="abilities">
											{state.item.abilities.map((x) => (
												<div className="d-inline-block px-3" key={x.id}>
													<h2 className="text-capitalize fs-5">
														{x.ability.name}
													</h2>
												</div>
											))}
										</div>
										<div className="stats justify-content-center align-items-center mb-4">
											{state.item.stats.map((statsArray) => (
												<div className="col-12" key={statsArray.id}>
													<div className="d-block">
														<div className="px-2 d-inline text-capitalize">
															{statsArray.stat.name}
														</div>
														<div className="stat-background">
															<div
																className={`px-2 d-inline stat-name-fillbar type-${type} `}
																style={{ width: `${statsArray.base_stat}%` }}>
																{statsArray.base_stat}
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default PokemonDetail;
