import { useState, useEffect } from 'react'
import Phonebook from './components/phonebook'
import Search from './components/search'
import CreateEntry from './components/create'
import Notification from './components/notification'
import listService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

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
      if (confirm(`${newName} is already added to phonebook, do you wish to update their number?`)){
        const pObj = persons.find(p => p.name === newName) 
        const updatedObj = {...pObj, number: newNum}
        listService
        .update(updatedObj.id, updatedObj)
        .then(returnedObj => {
          setPersons(persons.map(p => p.id !== updatedObj.id ? p : returnedObj))
          setMessage(`${returnedObj.name}'s number has been updated`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setIsError(true)
          setMessage(`Information of ${pObj.name} has already been removed from the server`)
          setPersons(persons.filter(p => p.id !== pObj.id))
          setTimeout(() => {
            setMessage(null)
            setIsError(false)
          }, 5000)
        })
      }
    }
    else{
      const nameObj = {name: newName, number: newNum}
      listService
      .create(nameObj)
      .then(retObj => {
        setPersons(persons.concat(retObj))
        setMessage(`${retObj.name} has been added to the phonebook`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        console.log('failure to POST')
      })
    }
    setNewName('')
    setNewNum('')
  }

  const delName = (id) => {
    const dupEntry = persons.find(p => p.id === id)
    if (confirm(`Delete ${dupEntry.name}?`)) {
      listService
      .deleteMe(dupEntry.id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== dupEntry.id))
        setMessage(`${dupEntry.name} has been removed from the phonebook`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        setIsError(true)
        setMessage(`Information of ${dupEntry.name} has already been removed from the server`)
        setPersons(persons.filter(p => p.id !== dupEntry.id))
        setTimeout(() => {
          setMessage(null)
          setIsError(true)
        }, 5000)
      })
    }
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
      <Notification message={message} error={isError}/>
      <Search search={search} handleSearch={handleSearch}/>
      <h3>Add new:</h3>
      <CreateEntry addName={addName} newName={newName} newNum={newNum} handleNameAdd={handleNameAdd} handleNumAdd={handleNumAdd}/>
      <h3>Numbers</h3>
      <Phonebook nameFilter={nameFilter} delName={delName}/>
    </div>
  )
}

export default App