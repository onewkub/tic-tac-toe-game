// import { useState } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'store/reducers'
import Board from './board'
import './styles.scss'
interface IProps {
  whoTurn: string
  turn: number
  notice: string
  whatYouAre: string
  yourName: string
}

function Game(props: IProps) {
  const { whoTurn, turn, notice, whatYouAre, yourName } = props
  // const [table, setTable] = useState<string[][]>()

  return (
    <div className="game">
      <h1>
        Current Player:
        {whoTurn === yourName ? 'YOU' : whoTurn}
      </h1>
      <h4>Turn: {turn}</h4>
      <Board />
      <h3>{`You are play as ${whatYouAre}`}</h3>
      <span>{notice}</span>
    </div>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  yourName: rootState.GameReducer.yourName,
  whoTurn: rootState.GameReducer.whoTurn,
  turn: rootState.GameReducer.turn,
  notice: rootState.GameReducer.notice,
  whatYouAre: rootState.GameReducer.whatYouAre,
})

export default connect(mapStateToProps)(Game)
