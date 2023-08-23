import { useState } from 'react'

const Entry = ({person}) => {
  return <li>{person.name} {person.number}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const nameCheck = (newName) => {
    return persons.some(p => p.name.toLowerCase() === newName.toLowerCase())
  }

  const addName = (event) => {
    event.preventDefault()
    if (nameCheck(newName) === true){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const nameObj = {name: newName, number: newNum}
      setPersons(persons.concat(nameObj))
    }
    setNewName('')
    setNewNum('')
  }

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }
  const handleNumAdd = (event) => {
    setNewNum(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameAdd}/>
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumAdd}/>
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