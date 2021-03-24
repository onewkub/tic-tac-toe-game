import 'App.scss'
import MainMenu from 'components/mainMenu'
import { connect } from 'react-redux'
import { RootState } from 'store/reducers'
import { changeGameState } from 'store/action/GameStateAction'
import { EGameState } from 'store/reducers/GameState'
import GameRecord from 'components/gameRecord'
import About from 'components/about'
import Game from 'components/game'
import CreateGame from 'components/createGame'
import JoinGame from 'components/joinGame'
import Result from 'components/result'

interface IProps {
  state: EGameState
  loading: boolean
  error: Error | null
}

function App(props: IProps) {
  // const App = observer((props: IProps) => {
  const { state } = props

  return (
    <div className="App">
      <div className="game-panel">
        {state === EGameState.main_menu && <MainMenu />}
        {state === EGameState.game && <Game />}
        {state === EGameState.result && <Result />}
        {state === EGameState.create && <CreateGame />}
        {state === EGameState.join && <JoinGame />}
        {state === EGameState.record && <GameRecord />}
        {state === EGameState.about && <About />}
      </div>
    </div>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  state: rootState.GameStateReducer.game_state,
  loading: rootState.GameStateReducer.loading,
  error: rootState.GameStateReducer.error,
})

export default connect(mapStateToProps, { changeGameState })(App)
