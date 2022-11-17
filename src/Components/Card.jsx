import React from "react";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";

const Card = ({pokemon, loading}) => {
    return (
        <>
        {
            loading ? <h1>Please wait loading...</h1> : 
                pokemon.map((item)=>{
                    return(                    
                        <div className="card" key={item.id}>
                        <Link to={`/pokemon-detail/${item.id}`} state={{ item , pokemon}}>
                            <div className="card-inner-container">
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="of a pokemon"/>
                                <h3>{item.name}</h3>
                            </div>
                            </Link>
                        </div>
                )})       
        }
        </>
    )
}

export default Card;