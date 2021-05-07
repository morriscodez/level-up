import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"
import { EventList } from "./event/EventList"
import { EventProvider } from "./event/EventProvider"
import { GameForm } from "./game/GameForm"

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
                </GameProvider>
            </EventProvider>
        </main>
    </>
}
