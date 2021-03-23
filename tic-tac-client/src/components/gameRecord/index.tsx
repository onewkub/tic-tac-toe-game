import BackNavigator from 'components/backNavigator'
import './styles.scss'

function GameRecord() {
  return (
    <div className="game-record">
      <BackNavigator />
      <h3>Game Record</h3>
      {/* <button style={{ position: 'absolute', left: 0 }}>back</button> */}
      <div className="record-list">
        <div className="record-item">
          <div className="record-id">id: asdfghjkk</div>
          <div className="record-time">10/03/2021 11:00</div>
          <div className="record-watch-btn">⌛ watch</div>
        </div>
      </div>
      <div className="action">
        <div className="action-btn">Back</div>
        <div className="action-page">1</div>
        <div className="action-btn">Next</div>
      </div>
    </div>
  )
}

export default GameRecord
