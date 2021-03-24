import { useState } from 'react'
import { IGameRecord } from 'store/reducers/GameRecordList'
import './styles.scss'

interface IProps {
  gameRecords: IGameRecord[]
}

function ControlPanel(props: IProps) {
  const {} = props
  const [speed, setSpeed] = useState<number>(0.5)
  const [play, setPlay] = useState<boolean>(false)

  const handleOnChangeSpeed = (event: any) => {
    // console.log(event.target.value)
    const value = event.target.value
    setSpeed(value)
  }
  const handleOnClickPlay = () => {
    setPlay((prev) => !prev)
  }

  const handleOnClickNext = () => {
    console.log('click next')
  }
  const handleOnClickBack = () => {
    console.log('click back')
  }

  return (
    <div className="control-panel">
      <div className="control-slider">
        <input
          onChange={handleOnChangeSpeed}
          step={0.05}
          type="range"
          min={0}
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

// const mapStateToProps = (rootState: RootState) => ({
//   gameRecords: rootState.GameRecordReducer.gameRecords,
// })

export default ControlPanel
