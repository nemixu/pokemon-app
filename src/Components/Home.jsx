import React from "react"
import axios from "axios";
import { useState, useEffect  } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Card from "./Card";

const Home = () => {

    // On mount make initial req to pokemon api of max 20
    const [searchParams, setSearchParams] = useSearchParams();
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(searchParams.get('offset') || 0);
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`
    
    
    const requestPokemon = async () => {
        setLoading(true);
        const data  = await axios.get(pokeApi)
        getAllPokemon(data.data.results);
        setSearchParams({offset})
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
    },[offset]);

    return(
        <>
            <div className="pt-3 text-center container">
                <div className="buttons">
                {
                    offset == 0 && "0" ? 
                    <button className="btn btn-success" disabled>Previous</button> : 
                    <button className="btn btn-success" onClick={() => {
                            setPokemonData([])
                            setOffset(offset -20)
                        }}>Previous</button>
                }
                </div>
                <div className="buttons">
                {
                        offset >= 0 && <button onClick={() => {
                            setPokemonData([])
                            setOffset(Number(offset) +20)
                        }} className="btn btn-success">Next</button>
                }
                </div>
            </div>
            <div className="card-container container">
                <div className="row">
                    <Card pokemon={pokemonData} loading={loading} currentOffset={offset}/>     
                </div>       
            </div>
        </>
    )
}

export default Home;