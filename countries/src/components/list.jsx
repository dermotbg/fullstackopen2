import { ListEntry, MainEntry } from './entries'

const List = ({countryFilter}) => {
    if (countryFilter.length > 10){
        return <div>Too many matches, specify another filter</div>
    }
    if (countryFilter.length === 1){
        return <MainEntry info={countryFilter[0]} />
    }
    return(<div>{countryFilter.map(c => <ListEntry key={c.name.common} name={c.name.common} />)}</div>)
}

export default List