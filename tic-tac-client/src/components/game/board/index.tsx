import { makeMove } from 'lib/gameManager'
import { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { RootState } from 'store/reducers'
import './styles.scss'

interface IPropsSquare {
  size: number
  value: string
  pos_x: number
  pos_y: number
  readOnly?: boolean
}

function Square(props: IPropsSquare) {
  const { size, value, pos_x, pos_y, readOnly = false } = props

  const room_id = useSelector((state: RootState) => state.GameManagerReducer.id)
  const handleOnClick = () => {
    // console.log(room_id, pos_x, pos_y)
    if (!readOnly) makeMove(room_id, pos_x, pos_y)
  }
  return (
    <div
      onClick={handleOnClick}
      className={readOnly ? 'square-display' : 'square'}
      style={{ height: size, width: size }}
    >
      <span style={{ fontSize: size * 0.8 }}>{value}</span>
    </div>
  )
}

function Table(props: {
  board: string[][]
  width?: number
  readOnly?: boolean
}) {
  // const table = []
  const { board, width = 450, readOnly = false } = props
  const dim = board.length
  const size: number = Math.floor((width - dim) / dim)
  // for (let i = 0; i < dim; i++) {
  //   for (let j = 0; j < dim; j++) {
  //     table.push(<Square key={`${i}${j}`} size={size} value={board[i][j]} />)
  //   }
  // }

  return (
    <>
      {board.map((row, i) =>
        row.map((col, j) => (
          <Square
            key={`${i}${j}`}
            size={size}
            value={board[i][j]}
            pos_x={i}
            pos_y={j}
            readOnly={readOnly}
          />
        )),
      )}
    </>
  )
}

interface IPropsBoard {
  board: string[][]
  readOnly?: boolean
  turn: number
}

function Board(props: IPropsBoard) {
  const { board, readOnly = false, turn } = props
  useEffect(() => {
    // console.log('update Board')
  }, [board, turn])
  return (
    <div className="board">
      <Table readOnly={readOnly} board={board} />
    </div>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  id: rootState.GameManagerReducer.id,
  board: rootState.GameManagerReducer.board,
  turn: rootState.GameManagerReducer.turn,
})
export default connect(mapStateToProps)(Board)
