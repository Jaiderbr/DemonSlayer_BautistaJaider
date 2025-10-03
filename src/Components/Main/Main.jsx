import React from 'react'
import { useEffect, useState } from "react";
import './Main.css'
import Cards from '../Cards/Cards'
import Linearbuffer from '../Linearbuffer/Linearbuffer'
function Main() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        // fetch("/api/api/v1/characters?limit=45")        
        fetch("https://www.demonslayer-api.com/api/v1/characters?limit=45")
            .then((res) => res.json())
            .then((data) => setCharacters(data.content))
            .catch((err) => console.error("Fetch error:", err))
            .finally(() => setLoading(false));
    }, []);


    if (loading) {
        return <Linearbuffer />;
    }

    return (
        <main>
            {characters.map((character) => (
                <Cards key={character.id} character={character} />
            ))}

        </main>

    )
}

export default Main
