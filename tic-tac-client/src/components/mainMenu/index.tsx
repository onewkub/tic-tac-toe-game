import { useDispatch } from 'react-redux'
import { setGame } from 'store/action/GameManagerAction'
import { changeGameState } from 'store/action/GameStateAction'
import { EGameState, initialState } from 'store/reducers/GameState'
import './styles.scss'

function MainMenu() {
  const dispatch = useDispatch()

  const handleOnClick = (state: EGameState) => {
    dispatch(changeGameState(state))
    dispatch(setGame(initialState))
  }

  return (
    <div className="main-menu">
      <h3>Tic Tac Toe Game</h3>
      <div
        className="main-menu-btn"
        onClick={() => handleOnClick(EGameState.create)}
      >
        <span>Create Game</span>
      </div>
      <div
        className="main-menu-btn"
        onClick={() => handleOnClick(EGameState.join)}
      >
        Join Game
      </div>
      <div
        className="main-menu-btn"
        onClick={() => handleOnClick(EGameState.record)}
      >
        Game Record
      </div>
      <div
        className="main-menu-btn"
        onClick={() => handleOnClick(EGameState.about)}
      >
        About Me
      </div>
    </div>
  )
}

export default MainMenu
