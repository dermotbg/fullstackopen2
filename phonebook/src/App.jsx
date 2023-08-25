import { useState, useEffect } from 'react'
import Phonebook from './components/phonebook'
import Search from './components/search'
import CreateEntry from './components/create'
import listService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    listService
    .getList()
    .then(fullList => {
      setPersons(fullList)
    })
  }, [])

  const nameCheck = (newName) => persons.some(p => p.name.toLowerCase() === newName.toLowerCase())

  const addName = (event) => {
    event.preventDefault()
    if (nameCheck(newName) === true){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const nameObj = {name: newName, number: newNum}
      listService
      .create(nameObj)
      .then(retObj => {
        setPersons(persons.concat(retObj))
      })
      .catch(error => {
        console.log('failure to POST')
      })
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