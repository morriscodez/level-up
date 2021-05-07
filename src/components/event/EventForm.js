import { createEvent } from "@testing-library/dom"
import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "../game/GameProvider"
import { EventContext } from "./EventProvider"


export const EventForm = () => {
    const history = useHistory()
    const {getGames, games } = useContext(GameContext)
    const {createEvent} = useContext(EventContext)

    const [currentEvent, setEvent,] = useState({
        organizerId: 0,
        name: "",
        description: "",
        date: "",
        time: "",
        address: "",
        gameId: 0
    })

    useEffect(() => {
        getGames()
    }, [])

    const changeEventState = (e) => {
        const newEventState = {...currentEvent}
        let selectedVal = e.target.value

        newEventState[e.target.id] = selectedVal

        setEvent(newEventState)
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select id="gameId" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={ changeEventState }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option key={game.id} value={game.id}>{game.label}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Name: </label>
                        <input type="text" id="name" required autoFocus className="form-control"
                            value={currentEvent.name}
                            onChange={changeEventState}
                        />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Description: </label>
                        <input type="text" id="description" required autoFocus className="form-control"
                            value={currentEvent.description}
                            onChange={changeEventState}
                        />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">address: </label>
                        <input type="text" id="address" required autoFocus className="form-control"
                            value={currentEvent.address}
                            onChange={changeEventState}
                        />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Date: </label>
                        <input type="date" id="date" required autoFocus className="form-control"
                            value={currentEvent.date}
                            onChange={changeEventState}
                        />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Time: </label>
                        <input type="time" id="time" required autoFocus className="form-control"
                            value={currentEvent.time}
                            onChange={changeEventState}
                        />
                    </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const event = {
                        name: currentEvent.name,
                        organizerId: +currentEvent.organizerId,
                        gameId: +currentEvent.gameId,
                        description: currentEvent.description,
                        date: currentEvent.date,
                        time: currentEvent.time,
                        address: currentEvent.address
                    }

                    createEvent(event)
                        .then(() => history.push("/events"))

                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}