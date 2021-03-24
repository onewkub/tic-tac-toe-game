import BackNavigator from 'components/backNavigator'
import WaitingPanel from 'components/watingPanel'
import { joinGame } from 'lib/gameManager'
import { useState } from 'react'
import { validator } from 'lib/validator'
import './styles.scss'
import { useForceUpdate } from 'lib/foreUpdate'
interface IForm {
  name: string
  inviteCode: string
}

function JoinGame() {
  const [form, setForm] = useState<IForm>({ name: 'player_2', inviteCode: '' })

  const [hasJoin, setHasJoin] = useState<boolean>(false)

  const handleOnChange = (value: any, type: string) => {
    switch (type) {
      case 'name':
        return setForm((prev) => ({ ...prev, name: value }))
      case 'inviteCode':
        return setForm((prev) => ({ ...prev, inviteCode: value }))
      default:
        return
    }
  }
  const forceUpdate = useForceUpdate()
  const handleOnSumbit = () => {
    if (validator.allValid()) {
      joinGame(form.name, form.inviteCode)
      setHasJoin(true)
    } else {
      validator.showMessages()
      forceUpdate()
    }
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
            {validator.message('name', form.name, 'required')}
          </div>
          <div className="txt-input">
            <label>Invite Code</label>
            <input
              value={form.inviteCode}
              onChange={(e) => handleOnChange(e.target.value, 'inviteCode')}
              placeholder="Please insert table dimension"
            />
            {validator.message('invite code', form.inviteCode, 'required')}
          </div>
          <button onClick={handleOnSumbit} className="join-btn">
            JOIN ROOM
          </button>
        </div>
      )}
      {hasJoin && (
        <div className="waiting-room">
          <WaitingPanel />
        </div>
      )}
    </>
  )
}

export default JoinGame
