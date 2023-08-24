const Phonebook = ({nameFilter}) => <ul>{nameFilter.map(p => <Entry key={p.name} person={p}/>)}</ul>
const Entry = ({person}) => <li>{person.name} {person.number}</li>

export default Phonebook