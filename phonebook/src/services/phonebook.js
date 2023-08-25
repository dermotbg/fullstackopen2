import axios from 'axios'

const baseurl = 'http://localhost:3001/persons'

const getList = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data)
}

const create = nameObj => {
    const request = axios.post(baseurl, nameObj)
    return request.then(response => response.data)
}

const deleteMe = (id) => axios.delete(`${baseurl}/${id}`)

export default {getList, create, deleteMe}
