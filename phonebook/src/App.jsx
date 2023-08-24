import { useState } from 'react'
import Phonebook from './components/phonebook'
import Search from './components/search'
import CreateEntry from './components/create'

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

  const nameCheck = (newName) => persons.some(p => p.name.toLowerCase() === newName.toLowerCase())

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

  const handleNameAdd = (event) => setNewName(event.target.value)
  const handleNumAdd = (event) => setNewNum(event.target.value)
  const handleSearch = (event) => setSearch(event.target.value)
  
  const nameFilter = search
    ? persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : persons


  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} handleSearch={handleSearch}/>
      <h3>Add new:</h3>
      <CreateEntry addName={addName} newName={newName} newNum={newNum} handleNameAdd={handleNameAdd} handleNumAdd={handleNumAdd}/>
      <h3>Numbers</h3>
      <Phonebook nameFilter={nameFilter} />
    </div>
  )
}

export default App