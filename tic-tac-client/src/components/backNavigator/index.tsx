import './styles.scss'
import { useDispatch } from 'react-redux'
import { changeGameState } from 'store/action/GameStateAction'
import { EGameState } from 'store/reducers/GameState'
function BackNavigator() {
  const dispatch = useDispatch()

  const handleOnClickBack = () => [
    dispatch(changeGameState(EGameState.main_menu)),
  ]
  return (
    <div className="navigator">
      <div
        className="back-link"
        onClick={handleOnClickBack}
      >{`< Back to Menu`}</div>
    </div>
  )
}

export default BackNavigator
