import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            <hr></hr>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__name">Event name: {event.name}</div>
                        <div className="event__description">Description: {event.description} players needed</div>
                        <div className="event__date">Event Happening on: {event.date}</div>
                        <div className="event__address">Event Happening at: {event.address}</div>
                        <div className="event__address">Game We're Playing: {event.game?.label}</div>
                    </section>
                })
            }
        </article>
    )

}