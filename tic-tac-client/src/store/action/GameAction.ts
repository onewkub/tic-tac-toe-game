export const SET_GAME_ID = 'SET_GAME_ID'
export const SET_GAME = 'SET_GAME'


export const setGame = (payload:any)=> ({
  type: SET_GAME,
  payload
})

export const setGameID = (payload: string)=>({
  type: SET_GAME_ID,
  payload
})
