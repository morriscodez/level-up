import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"
import { EventList } from "./event/EventList"
import { EventProvider } from "./event/EventProvider"
import { GameForm } from "./game/GameForm"
import { EventForm } from "./event/EventForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow",
            lineHeight: "1.75rem"
        }}>

            <EventProvider>
                <GameProvider>
                    <Route exact path='/'>
                        <GameList />
                        <EventList />

                    </Route>
                    <Route exact path="/games/new">
                        <GameForm />
                    </Route>
                    <Route path="/events/new">
                        <EventForm />
                    </Route>
                    <Route exact path="/games">
                        <GameList />
                    </Route>

                    <Route exact path="/events">
                        <EventList />
                    </Route>
                </GameProvider>
            </EventProvider>
        </main>
    </>
}
