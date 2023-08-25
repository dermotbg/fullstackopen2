const Phonebook = ({nameFilter, delName}) => {
    return(
        <ul>
            {nameFilter.map(p => <Entry 
            key={p.id} 
            person={p}
            delName={() => delName(p.id)} />)}
        </ul>
    )}
const Entry = ({person, delName}) => <li>{person.name} {person.number}<button onClick={delName}>delete</button></li> 

export default Phonebook