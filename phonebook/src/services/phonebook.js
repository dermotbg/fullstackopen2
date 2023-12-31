import axios from 'axios'

const baseurl = '/api/persons'

const getList = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data)
}

const create = nameObj => {
    const request = axios.post(baseurl, nameObj)
    return request.then(response => response.data)
}

const update = (id, newObj) => {
    const request = axios.put(`${baseurl}/${id}`, newObj)
    return request.then(response => response.data) 
}

const deleteMe = (id) => axios.delete(`${baseurl}/${id}`)

export default {getList, create, deleteMe, update}
