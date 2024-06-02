import { useState, useEffect } from 'react'
import ContactRow from './ContactRow'

const SelectedContact = ({contactId}) => {
  
  const [contact, setContact] = useState('')
  useEffect(()=> {
    async function fetchContact() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`)
        const result = await response.json()
        setContact(result)
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact()
  },[contactId])
  return <ContactRow key={contact.id} contact={contact}/>
}

export default SelectedContact