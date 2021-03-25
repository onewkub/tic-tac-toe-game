export function hasWinner(board: string[][], pos_x: number, pos_y: number) {
  const dim = board.length
  const symbol = board[pos_x][pos_y]
  if (!board[pos_x].some((element) => element !== symbol)) return true
  let vertical_check = true
  for (let i = 0; i < dim; i++) {
    if (board[i][pos_y] !== symbol) {
      vertical_check = false
      break
    }
  }
  if (vertical_check) {
    return true
  }
  if (pos_x === pos_y || pos_y + pos_x === dim - 1) {
    //check diagonal right
    let check_dia_right = true
    let check_dia_left = true
    for (let i = 0; i < dim; i++) {
      if (board[i][i] !== symbol) check_dia_right = false
    }
    for (let i = 0; i < dim; i++) {
      if (board[dim - 1 - i][i] !== symbol) check_dia_left = false
    }

    if (check_dia_left || check_dia_right) return true
  }
  return false
}
