import { useState } from 'react'

const Entry = ({person}) => {
  return <li>{person.name} {person.number}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')

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
  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }
  const nameFilter = search
    ? persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : persons


  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter names: <input value={search} onChange={handleSearch}/></div>
      <h2>Add new:</h2>
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
        {nameFilter.map(p => <Entry key={p.name} person={p}/>)}
      </ul>
    </div>
  )
}

export default App