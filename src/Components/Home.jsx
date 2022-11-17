import React from "react"
import axios from "axios";
import { useState, useEffect  } from "react";
import Card from "./Card";
import Pokemon from "./Pokemon";

const Home = () => {

    // On mount make initial req to pokemon api of max 20
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [page, setPage] = useState(true);

    const requestPokemon = async () => {
        setLoading(true);
        const data  = await axios.get(endpoint)
        getAllPokemon(data.data.results);
        setPage({nextPage: data.data.next, previousPage: data.data.previous})
        setLoading(false);
    }
    
    // React router
    const getAllPokemon = async(result)=> {
        result.map(async(item) => {
            const result = await axios.get(item.url)
            setPokemonData(receivedPokemon =>{
                receivedPokemon = [...receivedPokemon, result.data]

                receivedPokemon.sort((a, b)=> a.id > b.id? 1: - 1)
                return receivedPokemon;
            })
        })
    }
    
    
    // lifecycle methods -> allows to do things as part of the rendering cycle of the dom.
    // any time endpoint changes, recall
    useEffect(()=> {
        requestPokemon();
    },[endpoint]);

    return(
        <>
            <div className="card-container">
                <Card pokemon={pokemonData} loading={loading} />
                <Pokemon/>
            </div>
            <div>
                <div className="buttons">
                {
                    !page.previousPage ? <button className="btn btn-success" disabled>Previous</button> :<button className="btn btn-success" onClick={() => {
                            setPokemonData([])
                            setEndpoint(page.previousPage)
                        }}
                        >Previous</button>
                }
                {
                        page.nextPage && <button onClick={() => {
                            setPokemonData([])
                            setEndpoint(page.nextPage)
                        }} className="btn btn-success">Next</button>
                }
                </div>
            </div>
        </>
    )
}

export default Home;