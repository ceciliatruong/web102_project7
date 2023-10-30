import { useParams,Link } from "react-router-dom";
import { supabase } from "../../client";
import { getCharacterImage } from "../GetCharImage";
import { useEffect, useState } from "react"; 
export default function CharacterDetails() {
    const {id} = useParams();
    const [character, setCharacter] = useState({
        name: '',
        sanrio_character: '',
        profession: '',
        bio: ''
    });
    useEffect(() => {
        const fetchCharacter = async () => {
            const { data, error } = await supabase
                .from('CharacterCard')
                .select('*')
                .eq('id', id);
            if(error) {
                console.log(error);
            }
            setCharacter(data[0]);
        }
        fetchCharacter();

    }, [id]);
    const handleDeleteCharacter = async (event) => {
        event.preventDefault();
        await supabase
            .from('CharacterCard')
            .delete()
            .eq('id', id);
    }
    console.log(character);
    if (!character) return <div>Loading...</div>;
    return(
        <div>
            <img src={getCharacterImage(character.sanrio_character)}/>
            <h2>Hi! My name is {character.name}.</h2>
            <h2>My current profession is the {character.profession} here in cc's Sanrio Town!</h2>
            <h2>My current bio: <br/>{character.bio}</h2>
            <button><Link to={`/townie-details/edit-townie/${id}`}>Edit my profile!</Link></button>
            <button onClick={handleDeleteCharacter}>Leaving town D:</button>
        </div>
    );
}