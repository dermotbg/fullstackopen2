import { useState } from 'react'

const Entry = ({person}) => {
  
  return <li>{person.name}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const nameCheck = (newName) => {
    return persons.some(p => p.name.toLowerCase() === newName.toLowerCase())
  }

  const addName = (event) => {
    event.preventDefault()
    if (nameCheck(newName) === true){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const nameObj = {name: newName}
      setPersons(persons.concat(nameObj))
    }
    setNewName('')
  }

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameAdd}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <Entry key={p.name} person={p}/>)}
      </ul>
    </div>
  )
}

export default App