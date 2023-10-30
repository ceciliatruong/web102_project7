import { supabase } from '../../client.js'
import { useEffect, useState } from 'react'
export default function CreateCharacterForm() {
    const [character, setCharacter] = useState({
        name: '',
        sanrio_character: '',
        profession: '',
        bio: ''
    });
    const handleCharacterCreation = async (event) => {
        event.preventDefault();

        await supabase
        .from('CharacterCard')
        .insert({name: character.name, sanrio_character: character.sanrio_character, profession: character.profession, bio: character.bio })
        .select();

    }
    return(
        <div className='character-form'>
            <form onSubmit={handleCharacterCreation}>
                <label>
                    Name <br/>
                    <input type="text" id="name" name="name" value={character.name} onChange={(e) => setCharacter({...character, name: e.target.value})}/>
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
                {<button type="submit">Create your persona!</button>}
            </form>
        </div>
    );
}