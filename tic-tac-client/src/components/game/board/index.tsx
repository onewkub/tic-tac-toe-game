import './styles.scss'

function Square(props: { size: number }) {
  const { size } = props
  return (
    <div className="square" style={{ height: size, width: size }}>
      <span style={{ fontSize: size * 0.8 }}></span>
    </div>
  )
}

function Table(dim: number) {
  const table = []
  const size: number = Math.floor((450 - dim) / dim)
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      table.push(<Square key={`${i}${j}`} size={size} />)
    }
  }
  return table
}

function Board(props: { dim?: number }) {
  const { dim = 3 } = props
  const table = Table(dim)
  return <div className="board">{table}</div>
}

export default Board
