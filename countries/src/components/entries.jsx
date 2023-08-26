export const ListEntry = ({name}) => <li>{name}</li> 

export const MainEntry = ({info}) => {
    console.log(Object.entries(info.languages))
    return(
        <div>
            <h1>{info.name.common} {info.flag}</h1>
            <div>Capital: {info.capital}</div>
            <div>Area: {info.area}</div>
            <div>Population {info.population}</div>
            <div>Languages:
                <ul>
                    {Object.entries(info.languages).map(l => <ListEntry key={l[0]} name={l[1]} />)}
                </ul>
            </div>
            <img src={info.flags.png} alt={info.flags.alt} />

        </div>
    )
}
