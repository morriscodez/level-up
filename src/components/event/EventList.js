import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__name">{event.name}</div>
                        <div className="event__description">{event.description} players needed</div>
                        <div className="event__date">Happening on {event.date}</div>
                        <div className="event__address">Happening at {event.address}</div>
                        <div className="event__address">Playing {event.game?.label}</div>
                    </section>
                })
            }
        </article>
    )

}