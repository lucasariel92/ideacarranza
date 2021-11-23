import React, { useEffect, useState } from "react";

export const PokeApi = () =>{
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] =useState(1)

        console.log(pokemon)

    useEffect (() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then ((response) => response.json())
        .then ((data) =>{
            setPokemon(data)
        })
    }, [])

    return(
        <div>
            <h2>Poke Api</h2>
            <hr/>
            {pokemon !== null &&
            <>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default}/>
            </>}
            
            

        </div>


    )
}