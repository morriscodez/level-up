import React, {useState} from 'react'

export const eventContext = React.createContext()

export const eventProvider = (props) => {
    const [ events, setEvents ] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8000/events", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setEvents)
    }

    return (
        <eventContext.Provider value={{ events, getEvents }} >
            { props.children }
        </eventContext.Provider>
    )
}