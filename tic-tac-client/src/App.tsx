import 'App.scss'
import MainMenu from 'components/mainMenu'
import { connect } from 'react-redux'
import { RootState } from 'store/reducers'
import { changeGameState } from 'store/action/GameStateAction'
import { EGameState } from 'store/reducers/GameState'
import GameRecord from 'components/gameRecord'
import About from 'components/about'

interface IProps {
  state: EGameState
  loading: boolean
  error: Error | null
}

function App(props: IProps) {
  const { state } = props

  return (
    <div className="App">
      <div className="game-panel">
        {state === EGameState.main_menu && <MainMenu />}
        {state === EGameState.record && <GameRecord />}
        {state === EGameState.about && <About />}
      </div>
    </div>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  state: rootState.GameReducer.game_state,
  loading: rootState.GameReducer.loading,
  error: rootState.GameReducer.error,
})

export default connect(mapStateToProps, { changeGameState })(App)
