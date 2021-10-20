import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
//import Container from 'react-bootstrap/esm/Container';
import { MyCard } from './Card';
import '../Styles/Gallery.scss';


const Gallery = () => {

    const api = "https://rickandmortyapi.com/api/character";
    const [character, setCharacter] = useState([])


    useEffect(() => {
        fetchInfo();

    }, [])
    const  fetchInfo = async ()=>{
        const data = await fetch(api);
        const datajson = await data.json();

        const allCharacters = datajson?.results?.map((e)=>{
           return {
            key: e.id,
            image: e.image,
            name: e.name,
            gender: e.gender,
            status: e.status,
           };
        });
        setCharacter(allCharacters);
        console.log(allCharacters);
    }

    return (
        <div className= "container">
            {character?.map( (char) => 
            (<MyCard 
                key= {char.id}
                image={char.image}
                name={char.name}
                gender={char.gender}
                status={char.status}
                />))}
        </div>
    )
}

export default Gallery
