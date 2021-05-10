import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { EventContext } from "./EventProvider.js"
// import "./Events.css"

export const EventList = (props) => {
    const { events, getEvents, joinEvent } = useContext(EventContext)
    const history = useHistory()
    
    useEffect(() => {
        getEvents()
    }, [])


    return (
        <>
            <article className="events">
                <hr></hr>
                <header className="events__header">
                    <h1>Level Up Game Events</h1>
                </header>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/events/new" })
                    }}
                >Schedule New Event</button>
                
                {
                    events.map(event => {
                        return <section key={`event--${event.id}`} className="registration">
                                <div className="event__name">Event name: {event.name}</div>
                                    <div className="registration_game">{event.game?.label}</div>
                                    <div className="event__description">Description: {event.description} players needed</div>
                                    <div>
                                    {
                                        new Date(event.date).toLocaleDateString("en-US", {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })
                                    }
                                @ {event.time}

                                </div>
                                <div className="event__address">Event Happening at: {event.address}</div>
                                    <button className="btn btn-2" onClick={() => joinEvent(event.id)}>
                                            Join Event
                                    </button>
                                </section>
                    })
                }
            </article>
        </>
    )

}