// import { useState } from 'react'
import Board from './board'

function Game() {
  // const [table, setTable] = useState<string[][]>()

  return (
    <div className="game">
      <h3>Player: You</h3>
      <h4>Turn: n</h4>
      <Board />
      <h3>Your Turn</h3>
    </div>
  )
}

export default Game
