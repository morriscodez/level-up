import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from 'react-router-dom'


export const GameForm = () => {
    const history = useHistory()
    const { createGame, getGameTypes, gameTypes } = useContext(GameContext)

    const [currentGame, setCurrentGame] = useStats({
        skillLevel: 1,
        numberOfPlayers: 0,
        label: "",
        gameTypeId: 0,    
    })
}