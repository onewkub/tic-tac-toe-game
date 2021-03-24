export function genBoard(dim: number) {
  // let rlt: any = Array(dim)
  // rlt.fill(new Array(dim), 0, dim)
  // // console.log(rlt)
  let rlt: any[][] = []
  for (let i = 0; i < dim; i++) {
    rlt[i] = []
    for (let j = 0; j < dim; j++) {
      rlt[i][j] = ''
    }
  }
  return rlt
}
