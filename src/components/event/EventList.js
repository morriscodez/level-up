import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

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
                        </section>
                    })
                }
            </article>
        </>
    )

}