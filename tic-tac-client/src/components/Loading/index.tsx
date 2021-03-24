import { PacmanLoader } from 'react-spinners'
import './styles.scss'
function Loading() {
  return (
    <div className="loading">
      <div
        style={{
          height: 300,
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PacmanLoader color="white" size={50} margin={2} />
      </div>
      <h1>Loading...</h1>
    </div>
  )
}

export default Loading
