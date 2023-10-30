import { useState } from 'react'
import { Routes, Route, Navigate, Outlet} from 'react-router-dom'
import './App.css'
import CharacterGallery from './components/CharacterGallery'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CharacterCreation from './components/CharacterCreation'
import CharacterDetails from './components/CharacterDetails'
import UpdateCharacter from './components/UpdateCharacter'
// import CreateCharacterForm from './components/CreateCharacterForm'
function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='townie-creation' element={<CharacterCreation/>}/>
        <Route path='townie-gallery' element={<CharacterGallery/>}/>
        <Route path='townie-details/:id' element={<CharacterDetails/>}/>
        <Route path='townie-details/edit-townie/:id' element={<UpdateCharacter/>}/>
        <Route path='*' element={(<h1>no</h1>)}/>
      </Routes>
    </div>
  )
}

export default App
