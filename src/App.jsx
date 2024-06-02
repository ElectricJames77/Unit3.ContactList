import { useState } from 'react'
import './App.css'
import Contactlist from './components/Contactlist'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId,setSelectedContactId] = useState(null)
  return (
    <>
    {selectedContactId ? (<SelectedContact contactId={selectedContactId}/>) : (<Contactlist selectedContactId={setSelectedContactId}/>)}
    </>
  )
}

export default App
