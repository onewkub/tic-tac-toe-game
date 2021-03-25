import { useEffect, useState } from 'react'
import { IGameRecord } from 'store/reducers/GameRecordList'
// import store from 'store'
import './styles.scss'
import { setGame } from 'store/action/GameManagerAction'
import { connect } from 'react-redux'
import { RootState } from 'store/reducers'
// import { useForceUpdate } from 'lib/foreUpdate'

interface IProps {
  gameRecords: IGameRecord[]
  board: string[][]
  setGame: (data: any) => any
}

let index = 0
let timmerID: any

function ControlPanel(props: IProps) {
  const { board, gameRecords, setGame } = props
  const [speed, setSpeed] = useState<number>(0.5)
  const [play, setPlay] = useState<boolean>(false)
  // const [index, setIndex] = useState<number>(0)
  // const forceUpdate = useForceUpdate()

  const setBoard = (step: IGameRecord) => {
    // console.log(step)
    // const board = store.getState().GameManagerReducer.board
    const copy_board: string[][] = board
    copy_board[step.position_x][step.position_y] =
      step.turn % 2 === 0 ? 'O' : 'X'
    // console.log(board)
    // setIndex((prev) => 2)
    // store.dispatch(setGame({ board }))
    setGame({ board: copy_board, turn: step.turn })
    index++
  }

  const popStep = () => {
    index--
    const previos_step = gameRecords[index]
    const copy_board: string[][] = board
    copy_board[previos_step.position_x][previos_step.position_y] = ''
    setGame({ board: copy_board, turn: previos_step.turn - 1 })
  }
  useEffect(() => {
    // console.log('first init')
    // index = 0
    return () => {
      index = 0

      // console.log('unMount')
    }
  }, [])
  useEffect(() => {
    // console.log(gameRecords)
    // console.log('set up')
    // console.log(play)
    if (play) {
      timmerID = setInterval(() => {
        // console.log(`yeah ${Math.random()}`)
        // console.log(index)
        if (index >= gameRecords.length) {
          console.log('replay is end')
          setPlay(false)
          return clearInterval(timmerID)
        }
        setBoard(gameRecords[index])
        // setIndex(index + 1)

        // forceUpdate()
        // console.log(speed * 1000)
      }, 3000 * speed)
    } else {
      clearInterval(timmerID)
    }
    return () => {
      // console.log('dismouth component')
      clearInterval(timmerID)
    }
    // eslint-disable-next-line
  }, [speed, play])

  const handleOnChangeSpeed = (event: any) => {
    // console.log(event.target.value)
    const value = event.target.value
    // setPlay(false)
    setSpeed(value)
  }
  const handleOnClickPlay = () => {
    setPlay((prev) => !prev)
  }

  const handleOnClickNext = () => {
    setPlay(false)
    if (index < gameRecords.length) {
      setBoard(gameRecords[index])
    }
  }
  const handleOnClickBack = () => {
    if (index > 0) {
      setPlay(false)
      popStep()
    }
  }

  return (
    <div className="control-panel">
      <span>Status: {play ? 'Playing' : 'Stop'}</span>
      <div className="control-slider">
        <span>Speed: </span>
        <input
          onChange={handleOnChangeSpeed}
          step={0.05}
          type="range"
          min={0.1}
          value={speed}
          max={1}
        />
      </div>
      <div className="control-btn-group">
        <div className="control-btn" onClick={handleOnClickBack}>
          Back
        </div>
        <div className="control-btn" onClick={handleOnClickPlay}>
          {play ? 'Pause' : 'Play'}
        </div>
        <div className="control-btn" onClick={handleOnClickNext}>
          Next
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  board: rootState.GameManagerReducer.board,
})

export default connect(mapStateToProps, { setGame })(ControlPanel)
