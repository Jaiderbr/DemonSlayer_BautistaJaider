import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import CardsDetail from '../CardsDetail/CardsDetail'
import Linearbuffer from '../Linearbuffer/Linearbuffer'
import "./CharacterDetail.css"


function CharacterDetail() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // fetch(`/api/api/v1/characters?id=${id}`)
        fetch(`/api/characters?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.content && data.content.length > 0) setCharacter(data.content[0]);
                else setCharacter(null);
            })
            .catch((err) => console.error("Fetch error:", err))
            .finally(() => setLoading(false));
    }, [id]);


    if (loading) {
        return <Linearbuffer />;
    }

    if (!character) {
        return <div>Character not found</div>;
    }
    return (
        <div className="mainDetail">
            <CardsDetail key={character.id} character={character} />
        </div>

    );
}

export default CharacterDetail;
