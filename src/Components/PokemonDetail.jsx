import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const PokemonDetail = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const type = state.item.types[0].type.name;
    const handleBackClick = () => {
            navigate ({
                pathname: '/',
                search: `?offset=${state.currentOffset}`,
            })
    }

    return (
        <>
            {
                (!state.item) ? <div>Oops im empty</div> : (

                        <div className="container-fluid" key={state.item.id}>
                            <div className="row">
                                <div className="col-12">
                                    <Button label={'Go back'} handleClick={handleBackClick} isDisabled={false} className={'btn btn-danger'}/>
                                </div>
                                <div className="col-12">
                                    <div className="pokemon-detail-wrapper">
                                        <div className={`pokemon-detail-wrapper-card type-${type}`}>
                                            <div className="img-container">
                                                <span className="d-block pokedex">#{state.item.id}</span>
                                                <img className="pokemon-detail-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${state.item.id}.svg`} alt="pokemon"/>
                                            </div>
                                        
                                            <div className="pokemon-details">
                                                <h1 className="text-capitalize">
                                                    <span>{state.item.name}</span>
                                                </h1>
                                                <h2 className="text-center">
                                                    <span>Weight{state.item.weight}</span>
                                                </h2>
                                            </div>
                                            <div className="types">{
                                                state.item.types.map(typeArray => {
                                                    return(
                                                        <div className="d-inline px-2">
                                                            {typeArray.type.name}
                                                        </div>
                                                )})
                                            }
                                               
                                            </div>
                                            
                                            <div className="abilities">
                                                {
                                                    state.item.abilities.map(x => {
                                                        return(
                                                            <>
                                                                <div className="d-inline-block px-3">
                                                                    <h2 className="text-capitalize fs-4">{x.ability.name}</h2>
                                                                </div>
                                                            </>
                                                    )})
                                                }
                                            </div>
                                            <div className="stats justify-content-center align-items-center mb-4">
                                                {
                                                    state.item.stats.map(statsArray =>{
                                                        return(
                                                            <div className="col-12">
                                                                <div className="d-block">
                                                                    <div className="px-2 d-inline text-capitalize">
                                                                        
                                                                        {statsArray.stat.name}
                                                                    
                                                                    </div>
                                                                    <div className="stat-background">
                                                                        <div className={`px-2 d-inline stat-name-fillbar type-${type} `} style={{width:statsArray.base_stat + '%',}}>
                                                                        {statsArray.base_stat} 
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            
                                                                
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
        </>
    )
}

export default PokemonDetail