import { useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import Clipboard from 'clipboard'
import './styles.scss'
import BackNavigator from 'components/backNavigator'

interface IForm {
  name: string
  dim: number
}
new Clipboard('.copy-clipboard-btn')

function CreateGame() {
  const [form, setForm] = useState<IForm>({ name: 'player', dim: 3 })

  const [hasCreate, setHasCreate] = useState<boolean>(false)

  const [inviteCode] = useState<string>('asdgasfg')

  const handleOnChange = (value: any, type: string) => {
    switch (type) {
      case 'name':
        return setForm((prev) => ({ ...prev, name: value }))
      case 'dim':
        return setForm((prev) => ({ ...prev, dim: value }))
      default:
        return
    }
  }

  const handleOnSumbit = () => {
    console.log(form)
    setHasCreate(true)
  }

  const handleOnCopyToClipboard = () => {}

  return (
    <>
      <BackNavigator />
      {!hasCreate && (
        <div className="create-game-panel">
          <h3>Create Game</h3>
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
            <label>Table Dimension</label>
            <input
              value={form.dim}
              onChange={(e) => handleOnChange(e.target.value, 'dim')}
              type="number"
              placeholder="Please insert table dimension"
            />
          </div>
          <button onClick={handleOnSumbit} className="create-btn">
            Create ROOM
          </button>
        </div>
      )}
      {hasCreate && (
        <div className="create-game-panel-invite-code">
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
          <div className="invite-code-field">
            <input
              onClick={handleOnCopyToClipboard}
              id="invite-code"
              readOnly
              value={inviteCode}
            />
            <div
              className="copy-clipboard-btn"
              data-clipboard-text={inviteCode}
            >
              Copy
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateGame
