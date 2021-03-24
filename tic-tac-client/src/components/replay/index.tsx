import Board from 'components/game/board'
import Loading from 'components/Loading'
import { connect } from 'react-redux'
import { RootState } from 'store/reducers'
import { IGameRecord } from 'store/reducers/GameRecordList'
import ControlPanel from './controlPanel'
import BackNavigator from 'components/backNavigator'
import { EGameState } from 'store/reducers/GameState'
import { setGame } from 'store/action/GameManagerAction'

interface IProps {
  gameRecords: IGameRecord[]
  loading: boolean
  error: Error | null
}

function Replay(props: IProps) {
  const { loading, gameRecords } = props
  if (loading) {
    return <Loading />
  }
  return (
    <div className="replay-panel">
      <BackNavigator backTo={EGameState.record} />
      <div style={{ height: 20 }} />
      <Board readOnly />
      <ControlPanel gameRecords={gameRecords} />
    </div>
  )
}
const mapStateToProps = (rootState: RootState) => ({
  gameRecords: rootState.GameRecordReducer.gameRecords,
  loading: rootState.GameRecordReducer.loading,
  error: rootState.GameRecordReducer.error,
})
export default connect(mapStateToProps, { setGame })(Replay)
