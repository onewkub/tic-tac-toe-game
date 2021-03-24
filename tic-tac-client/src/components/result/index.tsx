import { connect } from 'react-redux'
import { changeGameState } from 'store/action/GameStateAction'
import { RootState } from 'store/reducers'
import { EGameState } from 'store/reducers/GameState'
import Board from 'components/game/board'
import './styles.scss'

interface IProps {
  notice: string
  whatYouAre: string
  changeGameState: any
}

function Result(props: IProps) {
  const { notice, changeGameState, whatYouAre } = props
  const handleOnClick = () => {
    console.log('here')
    changeGameState(EGameState.main_menu)
  }
  const handleOnClickToRecord = () => {
    changeGameState(EGameState.record)
  }

  return (
    <div className="result">
      <Board readOnly={true} />
      <h1 className="result-title">
        {notice}({whatYouAre})
      </h1>
      <label>Your game play will be record to database.</label>
      <label>
        You can see your replay{` `}
        <span
          className="link"
          style={{ cursor: 'pointer' }}
          onClick={handleOnClickToRecord}
        >
          here
        </span>
      </label>
      <div className="main-menu-btn" onClick={handleOnClick}>
        Back to Main Menu
      </div>
    </div>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  notice: rootState.GameReducer.notice,
  whatYouAre: rootState.GameReducer.whatYouAre,
})

export default connect(mapStateToProps, { changeGameState })(Result)
