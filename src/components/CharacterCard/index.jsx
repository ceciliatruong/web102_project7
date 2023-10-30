import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { getCharacterImage } from '../GetCharImage';
export default function CharacterCard( { character } ) {
    const imgURL = getCharacterImage(character.sanrio_character);
    return(
        <div className='card'>
            <img src={imgURL}/>
            <h2>Name: </h2> 
            <h3>{character.name} <br/></h3>
            <h2>Profession: </h2>
            <h3>{character.profession}<br/></h3>
            <Link className='button-link' to={`/townie-details/${character.id}`}>Townie Details</Link>
        </div>
    );
}