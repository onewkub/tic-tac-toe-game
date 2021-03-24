import httpRequest from 'lib/httpRequest'
import { IGameRecord } from 'store/reducers/GameRecordList'

export const FETCH_GAME_RECORD_BEGIN = 'FETCH_GAME_RECORD_BEGIN'
export const FETCH_GAME_RECORD_FAILURE = 'FETCH_GAME_RECORD_FAILURE'
export const FETCH_GAME_RECORD_SUCESS = 'FETCH_GAME_RECORD_SUCESS'
export const fetchGameRecordBegin = () => ({
  type: FETCH_GAME_RECORD_BEGIN,
})

export const fetchGameRecordSuccess = (payload: IGameRecord[]) => ({
  type: FETCH_GAME_RECORD_SUCESS,
  payload,
})

export const fetchGameRecordFailure = (payload: Error) => ({
  type: FETCH_GAME_RECORD_FAILURE,
  payload,
})

export function fetchGameRecord(id: string) {
  return async (dispatch: any) => {
    dispatch(fetchGameRecordBegin())
    try {
      const res = await httpRequest.get<IGameRecord[]>('/game-record', {
        params: { id },
      })
      dispatch(fetchGameRecordSuccess(res.data))
    } catch (error) {
      dispatch(fetchGameRecordFailure(error))
    }
  }
}
