import { useState, useEffect } from 'react'
import fetchService from './services/countries'
import List from './components/list'
import Search from './components/search'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState(null)
  const [sngCountry, setSngCountry] = useState(null)

  const handleSearch = (event) => setSearch(event.target.value)

  const countryFilter = search 
    ? countries.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase())) 
    : countries
  
 
  useEffect(() => {
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
    fetchService
    .getSng(name)
    .then(response => {
      setSngCountry(response.data)
    })
  }

  if (search === ''){return <Search search={search} handleSearch={handleSearch}/>}
  return (
    <>
      <Search search={search} handleSearch={handleSearch}/>
      <List countryFilter={countryFilter} sngCountry={sngCountry} showCountry={showCountry} search={search}/>
    </>
  )
}

export default App
