import CreateCharacterForm from "../CreateCharacterForm";
import './CharacterCreation.css'
export default function CharacterCreation() {
    return(
        <div className='char-creation-container'>
            <CreateCharacterForm/>
            <img className='img-background' src='../../../public/sanriopng/saur cute.jpg'/>
        </div>
    );
}