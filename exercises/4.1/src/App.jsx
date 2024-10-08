import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { names: 'Arto Hellas', phone:'0842080'}
  ]) 

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(persons => persons.names === newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
        setPersons(persons.concat({names: newName, phone:newPhone}))
        setNewName("")
        setNewPhone("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
          <div>debug: {newName} - {newPhone}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.names}>{person.names} {person.phone}</li>)}
      </ul>
      </div>
  )
}

export default App