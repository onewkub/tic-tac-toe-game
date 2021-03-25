import httpRequest from 'lib/httpRequest'
import { IGame } from 'store/reducers/Game'

export const FETCH_GAME_BEGIN = 'FETCH_GAME_START'
export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS'
export const FETCH_GAME_FAILURE = 'FETCH_GAME_FAILURE'

export const fetchGameBegin = () => ({
  type: FETCH_GAME_BEGIN,
})

export const fetchGameSuccess = (payload: {
  data: IGame[]
  count: number
}) => ({
  type: FETCH_GAME_SUCCESS,
  payload,
})

export const fetchGameFailure = (payload: Error) => ({
  type: FETCH_GAME_FAILURE,
  payload,
})

export function fetchGame(page: number) {
  return async (dispatch: any) => {
    // console.log('fetch Data')
    dispatch(fetchGameBegin())
    try {
      const res = await httpRequest.get<IGame[]>('/game', {
        params: { page, take: 4 },
      })
      const count = await httpRequest.get<number>('/game-count')
      // console.log(res.data)
      dispatch(fetchGameSuccess({ data: res.data, count: count.data }))
    } catch (error) {
      console.error(error)
      dispatch(fetchGameFailure(error))
    }
  }
}
