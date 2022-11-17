import React from "react";

const Pokemon = () => {
    return (
        <>
            <h1>Pokemon Name</h1>
            <img className="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" alt="charizard"/>
            <div className="abilities">
                <div className="ability-group">
                    <h2>Blaze</h2>
                </div>
            </div>
            <div className="stats">
                <div className="stat-group">
                    <h3>hp</h3>
                    <h3>attack</h3>
                    <h3>defense</h3>
                    <h3>special-attack</h3>
                    <h3>Speed</h3>
                </div>
            </div>
        </>
    )

}

export default Pokemon;