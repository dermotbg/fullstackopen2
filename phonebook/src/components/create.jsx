const CreateEntry = (props) => {
    return(
      <form onSubmit={props.addName}>
          <div>
            name: <input value={props.newName} onChange={props.handleNameAdd}/>
          </div>
          <div>
            number: <input value={props.newNum} onChange={props.handleNumAdd}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

export default CreateEntry