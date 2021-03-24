import './styles.scss'
import { useDispatch } from 'react-redux'
import { changeGameState } from 'store/action/GameStateAction'
import { EGameState } from 'store/reducers/GameState'
interface IProps {
  backTo?: EGameState
}

function BackNavigator(props: IProps) {
  const { backTo = EGameState.main_menu } = props
  const dispatch = useDispatch()

  const handleOnClickBack = () => [dispatch(changeGameState(backTo))]
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
