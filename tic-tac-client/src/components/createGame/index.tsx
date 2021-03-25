import { useState } from 'react'
import Clipboard from 'clipboard'
import './styles.scss'
import BackNavigator from 'components/backNavigator'
import { createGame } from 'lib/gameManager'
import { connect } from 'react-redux'
import { RootState } from 'store/reducers'
import { validator } from 'lib/validator'
import { useForceUpdate } from 'lib/foreUpdate'
import WatingPanel from 'components/watingPanel'

interface IForm {
  name: string
  dim: number
  online: boolean
}
new Clipboard('.copy-clipboard-btn')
interface IProps {
  inviteCode: string
}

function CreateGame(props: IProps) {
  const [form, setForm] = useState<IForm>({
    name: 'player_1',
    dim: 3,
    online: true,
  })

  const [hasCreate, setHasCreate] = useState<boolean>(false)
  const { inviteCode } = props

  const handleOnChange = (value: any, type: string) => {
    console.log(value)
    switch (type) {
      case 'name':
        return setForm((prev) => ({ ...prev, name: value }))
      case 'dim':
        return setForm((prev) => ({ ...prev, dim: Number(value) }))
      case 'online':
        // console.log(value, type)
        return setForm((prev) => ({
          ...prev,
          online: value === 'true' ? true : false,
        }))
      default:
        return
    }
  }
  const forceUpdate = useForceUpdate()

  const handleOnSumbit = async () => {
    if (validator.allValid()) {
      console.log(form)
      createGame(form.name, form.dim, form.online)
      setHasCreate(true)
    } else {
      validator.showMessages()
      forceUpdate()
    }
  }

  return (
    <>
      <BackNavigator />
      {!hasCreate && (
        <div className="create-game-panel">
          <h3>Create Game</h3>
          <div>
            <label> Online</label>
            <input
              type="radio"
              name="single"
              onChange={(e) => handleOnChange(e.target.value, 'online')}
              value="true"
              checked={form.online}
            />
            <label> Single Play</label>
            <input
              type="radio"
              name="single"
              onChange={(e) => handleOnChange(e.target.value, 'online')}
              value="false"
              checked={!form.online}
            />
          </div>
          <div className="txt-input">
            <label>Player Name</label>
            <input
              value={form.name}
              onChange={(e) => handleOnChange(e.target.value, 'name')}
              placeholder="please insert your name"
            />
            {validator.message('invite code', form.name, 'required')}
          </div>
          <div className="txt-input">
            <label>Table Dimension</label>
            <input
              value={form.dim}
              onChange={(e) => handleOnChange(e.target.value, 'dim')}
              type="number"
              placeholder="Please insert table dimension"
            />
            {validator.message('dimension', form.dim, 'required')}
          </div>
          <button onClick={handleOnSumbit} className="create-btn">
            Create ROOM
          </button>
        </div>
      )}
      {hasCreate && (
        <div className="create-game-panel-invite-code">
          <WatingPanel />
          {form.online && (
            <>
              <h4>Send code below to your friend</h4>
              <div className="invite-code-field">
                <input id="invite-code" readOnly value={inviteCode} />
                <div
                  className="copy-clipboard-btn"
                  data-clipboard-text={inviteCode}
                >
                  Copy
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
const mapStateToProps = (rootState: RootState) => ({
  inviteCode: rootState.GameManagerReducer.id,
})

export default connect(mapStateToProps)(CreateGame)
