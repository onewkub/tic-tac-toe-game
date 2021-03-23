import BackNavigator from 'components/backNavigator'
import React, { useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import './styles.scss'
interface IForm {
  name: string
  inviteCode: string
}

function JoinGame() {
  const [form, setForm] = useState<IForm>({ name: 'player', inviteCode: '' })

  const [hasJoin, setHasJoin] = useState<boolean>(false)

  const handleOnChange = (value: any, type: string) => {
    switch (type) {
      case 'name':
        return setForm((prev) => ({ ...prev, name: value }))
      case 'inviteCode':
        return setForm((prev) => ({ ...prev, dim: value }))
      default:
        return
    }
  }

  const handleOnSumbit = () => {
    console.log(form)
    setHasJoin(true)
  }

  return (
    <>
      <BackNavigator />
      {!hasJoin && (
        <div className="join-game-panel">
          <h3>Join Game</h3>
          <div className="txt-input">
            <label>Player Name</label>
            <input
              value={form.name}
              onChange={(e) => handleOnChange(e.target.value, 'name')}
              placeholder="please insert your name"
              required
            />
          </div>
          <div className="txt-input">
            <label>Invite Code</label>
            <input
              value={form.inviteCode}
              onChange={(e) => handleOnChange(e.target.value, 'inviteCode')}
              placeholder="Please insert table dimension"
            />
          </div>
          <button onClick={handleOnSumbit} className="join-btn">
            JOIN ROOM
          </button>
        </div>
      )}
      {hasJoin && (
        <div className="waiting-room">
          <div
            style={{
              height: 300,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ClimbingBoxLoader color="white" size={30} />
          </div>
          <h3>Waiting for your opponent</h3>
        </div>
      )}
    </>
  )
}

export default JoinGame
