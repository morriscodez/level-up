import React, {useState} from 'react'

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8088/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
    }

    return (
        <GameContext.Provider value={{ games, GetGames }} >
            { props.children }
        </GameContext.Provider>
    )
}