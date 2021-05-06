import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path ='/'>
                    <GameList />
                </Route>
            </GameProvider>
        </main>
    </>
}
