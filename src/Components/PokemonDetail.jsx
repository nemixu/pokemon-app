import React from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";

const PokemonDetail = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    console.log(state)

    return (
        <>
            {
                (!state.item) ? <div key={Math.random}>Oops im empty</div> : (
                    <>
                    <div className="pokemon-detail-wrapper" key={state.item.name}>
                        <h1>
                            {state.item.name}
                        </h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${state.item.id}.svg`} alt="pokemon"/>
                        <div className="abilities">
                            {
                                state.item.abilities.map(x => {
                                    return(
                                        <>
                                            <div>
                                                <h2>{x.ability.name}</h2>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button onClick={() => navigate("/")}>Go Back</button>
                    
                    </>
                    
                    
                )
            }
        </>
    )
}

export default PokemonDetail