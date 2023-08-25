const Notification = ({message, error}) => {
    if (message === null){
        return null
    }
    const msgColor = {color: error ? 'red' : 'green'}
    return(
        <div className="message" style={msgColor}>{message}</div>
    )
}

export default Notification