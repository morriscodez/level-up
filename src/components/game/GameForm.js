import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from 'react-router-dom'


export const GameForm = () => {
    const history = useHistory()
    const { createGame, getGameTypes, gameTypes } = useContext(GameContext)
    

    const [currentGame, setCurrentGame] = useState({
        skillLevel: 1,
        numberOfPlayers: 0,
        label: "",
        gameTypeId: 0,    
    })

    useEffect(() => {
        getGameTypes()
    }, [])

    //input handler
    const handleInput = (e) => {
        const newGameState = { ...currentGame }
        let selectedVal = e.target.value
        

        newGameState[e.target.id] = selectedVal

        setCurrentGame(newGameState)
    }

    return (
        <>
            <form className="gameForm">
                <h2 className="gameForm__title">Register New Game</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Title: </label>
                        <input type="text" id="label" required autoFocus className="form-control"
                            value={currentGame.label}
                            onChange={handleInput}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="numberOfPlayers">Players Needed: </label>
                        <input type="text" id="numberOfPlayers" required className="form-control"
                            value={currentGame.numberOfPlayers}
                            onChange={handleInput}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="skillLevel">Skill Level: </label>
                        <input type="text" id="skillLevel" required className="form-control"
                            value={currentGame.skillLevel}
                            onChange={handleInput}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="gameTypeId">Category: </label>
                        <select id="gameTypeId" onChange={handleInput}>
                            {
                                gameTypes.map(type => {
                                    return <option key={type.id} value={type.id}>{type.label}</option>
                                })
                            }
                        </select>
                    </div>
                </fieldset>

                <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        label: currentGame.label,
                        numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                        skillLevel: parseInt(currentGame.skillLevel),
                        gameTypeId: parseInt(currentGame.gameTypeId)
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>




            </form>

        </>
    )


}