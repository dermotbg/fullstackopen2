import { useState, useEffect } from 'react'
// import axios from 'axios'
import fetchService from './services/countries'
import List from './components/list'
import Search from './components/search'

// const Entry = ({name}) => <li>{name} </li> 
// const Search = ({search, handleSearch}) => <div>find country: <input search={search} onChange={handleSearch}/></div>
// const List = ({countryFilter}) => <div>{countryFilter.map(c => <Entry key={c.name.common} name={c.name.common} />)} </div>

function App() {

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState(null)
  const [sngCountry, setSngCountry] = useState(null)

  const handleSearch = (event) => setSearch(event.target.value)

  const countryFilter = search 
    ? countries.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase())) 
    : countries
  
 
  useEffect(() => {
    console.log('communicating...')
    fetchService
    .getAll()
    .then(response => {
      setCountries(response.data)
    })
  },[])

  useEffect(() => {
    setSngCountry(null)
  }, [search])

  const showCountry = ({name}) => {
    console.log(name)
    fetchService
    .getSng(name)
    .then(response => {
      console.log('GETSNG', response.data)
      setSngCountry(response.data)
    })
  }  

  if (search === ''){return <Search search={search} handleSearch={handleSearch}/>}
  return (
    <>
      <Search search={search} handleSearch={handleSearch}/>
      <List countryFilter={countryFilter} sngCountry={sngCountry} showCountry={showCountry}/>
    </>
  )
}

export default App
