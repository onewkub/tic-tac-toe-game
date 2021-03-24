import { connect } from 'react-redux'
import { ClimbingBoxLoader } from 'react-spinners'
import { RootState } from 'store/reducers'

interface IProps {
  notice: string
}

function WattingPanel(props: IProps) {
  const { notice } = props
  return (
    <>
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
      <h3>{notice}</h3>
    </>
  )
}

const mapStateToProps = (rootState: RootState) => ({
  notice: rootState.GameReducer.notice,
})

export default connect(mapStateToProps)(WattingPanel)
