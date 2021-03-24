import BackNavigator from 'components/backNavigator'
import { connect } from 'react-redux'
import { RootState } from 'store/reducers'
import { IGame } from 'store/reducers/Game'
import { fetchGame } from 'store/action/GameAction'
import { changeGameState } from 'store/action/GameStateAction'
import { fetchGameRecord } from 'store/action/GaneRecordAction'
import './styles.scss'
import dateformat from 'dateformat'
import { useEffect, useState } from 'react'
import { EGameState } from 'store/reducers/GameState'
import Loading from 'components/Loading'

interface IProps {
  games: IGame[]
  total: number
  loading: boolean
  error: Error | null
  fetchGame: (page: number) => Promise<void>
  changeGameState: (state: EGameState) => any
  fetchGameRecord: (id: string) => Promise<void>
}

function GameRecord(props: IProps) {
  const {
    games,
    total,
    loading,
    fetchGame,
    changeGameState,
    fetchGameRecord,
  } = props

  const [page, setPage] = useState<number>(1)

  const handleOnNext = () => {
    if (page < Math.ceil(total / 4)) {
      // console.log(Math.ceil(total / 4))
      setPage((prev) => prev + 1)
    }
  }

  const handleOnBack = () => {
    if (page !== 1) {
      setPage((prev) => prev - 1)
    }
  }

  const handleOnWatch = (gameID: string) => {
    console.log('on watch')
    fetchGameRecord(gameID)

    changeGameState(EGameState.replay)
  }

  useEffect(() => {
    fetchGame(page)
  }, [page, fetchGame])
  if (loading) {
    return <Loading />
  }
  return (
    <div className="game-record">
      <BackNavigator />
      <h3>Game Record</h3>
      {/* <button style={{ position: 'absolute', left: 0 }}>back</button> */}
      <div className="record-list">
        {total <= 0 && <span>No Game Record</span>}
        {games.map((game) => (
          <div key={game.id} className="record-item">
            <div className="record-id">id:{game.id}</div>
            <div className="record-detail">
              <div className="record-player">{`${game.player_o} vs ${game.player_x}`}</div>
              <div className="record-result">=={game.result}==</div>
              <div>
                {dateformat(new Date(game.createAt), 'dd/mm/yyyy HH:MM')}
              </div>
            </div>
            <div
              className="record-watch-btn"
              onClick={() => handleOnWatch(game.id)}
            >
              ⌛ watch
            </div>
          </div>
        ))}
      </div>
      <div className="action">
        <div className="action-btn" onClick={handleOnBack}>
          Back
        </div>
        <div className="action-page">{page}</div>
        <div className="action-btn" onClick={handleOnNext}>
          Next
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  games: rootState.GameReducer.games,
  total: rootState.GameReducer.total,
  loading: rootState.GameReducer.loading,
  error: rootState.GameReducer.error,
})

export default connect(mapStateToProps, {
  fetchGame,
  changeGameState,
  fetchGameRecord,
})(GameRecord)
