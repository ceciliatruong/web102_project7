import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";
import './UpdateCharacter.css'

export default function UpdateCharacter() {
    const {id} = useParams();
    const [character, setCharacter] = useState({
        name: '',
        sanrio_character: '',
        profession: '',
        bio: ''
    });
    const [currentCharacter, setCurrentCharacter] = useState({
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
            setCurrentCharacter(data[0]);
            setCharacter(data[0]);
        }
        fetchCharacter();

    }, [id]);
    const handleCharacterUpdate = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('CharacterCard')
            .update(character)
            .eq('id', id);
        (!error) ? alert('successfully updated your character!') : console.log(error);
    }
    console.log(id);
    return(
        <div>
            <h2>Current Character: </h2>
            <h3>Name: {currentCharacter.name}, Sanrio Character: {currentCharacter.sanrio_character}, </h3>
            <h3>Profession: {currentCharacter.profession}, Bio: {currentCharacter.bio}</h3>
            <form onSubmit={handleCharacterUpdate}>
                <label>
                    Name <br/>
                    <input type="text" value={character.name} onChange={(e) => setCharacter({...character, name: e.target.value})}/>
                </label> <br/>
                <label>
                    Sanrio Persona <br/>
                    <select value={character.sanrio_character} onChange={(e) => setCharacter({...character, sanrio_character: e.target.value})}>
                        <option value='Pompompurin'>Pompompurin</option>
                        <option value='Hello Kitty'>Hello Kitty</option>
                        <option value='Pochacco'>Pochacco</option>
                        <option value='My Melody'>My Melody</option>
                        <option value='Kuromi'>Kuromi</option>
                        <option value='Cinnamoroll'>Cinnamoroll</option>
                        <option value='Keroppi'>Keroppi</option>
                        <option value='Badtz-Maru'>Badtz-Maru</option>
                        <option value='Chococat'>Chococat</option>
                    </select> <br/>
                </label>
                <label>
                    Profession <br/>
                    <select value={character.profession} onChange={(e) => setCharacter({...character, profession: e.target.value})}>
                        <option value='Cafe Owner'>Cafe Owner</option>
                        <option value='Gift Shop Worker'>Gift Shop Worker</option>
                        <option value='Baker'>Baker</option>
                        <option value='Mailperson'>Mailperson</option>
                        <option value='Author'>Author</option>
                        <option value='Theme Park Owner'>Theme Park Owner</option>
                        <option value='Office Worker'>Office Worker</option>
                        <option value='Professional Surfer'>Professional Surfer</option>
                        <option value='Ice Cream Truck Vendor'>Ice Cream Truck Vendor</option>
                        <option value='Gym Instructor'>Gym Instructor</option>
                        <option value='Fashion Designer'>Fashion Designer</option>
                        <option value='Town Mayor'>Town Mayor</option>
                        <option value='Comedian'>Comedian</option>
                        <option value='Singer'>Singer</option>
                    </select> <br/>
                </label>
                <label>
                    Personal Bio <br/>
                    <textarea name="bio" value={character.bio} onChange={(e) => setCharacter({...character, bio: e.target.value})} rows={15} cols={50}/> <br/>
                </label>
                <button type="submit">Update your persona!</button>
            </form>
            <img className='img-background'src='../../../public/sanriopng/saur cute.jpg'/>
        </div>
    );
}