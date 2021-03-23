import { useDispatch } from 'react-redux'
import { changeGameState } from 'store/action/GameStateAction'
import { EGameState } from 'store/reducers/GameState'
import './styles.scss'

function MainMenu() {
  const dispatch = useDispatch()

  const handleOnClick = (state: EGameState) => {
    dispatch(changeGameState(state))
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
        onClick={() => handleOnClick(EGameState.record)}
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
        About
      </div>
    </div>
  )
}

export default MainMenu
