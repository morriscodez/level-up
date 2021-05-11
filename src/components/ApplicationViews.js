import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"
import { EventList } from "./event/EventList"
import { EventProvider } from "./event/EventProvider"
import { GameForm } from "./game/GameForm"
import { EventForm } from "./event/EventForm"
import { ProfileProvider } from "./auth/ProfileProvider"
import { Profile } from "./auth/ProfileList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow",
            lineHeight: "1.75rem"
        }}>
            <ProfileProvider>
                <EventProvider>
                    <GameProvider>
                        <Route exact path='/'>
                            <GameList />
                            <EventList />

                        </Route>
                        <Route path="/games/new">
                            <GameForm />
                        </Route>
                        <Route path="/games/:gameId(\d+)/edit">
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

                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </GameProvider>
                </EventProvider>
            </ProfileProvider>
        </main>
    </>
}
