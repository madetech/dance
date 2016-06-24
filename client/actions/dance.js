
import { createAction } from 'redux-actions'

export const addMove = createAction('add move')
export const setPlaying = createAction('set playing')

export function playTrack() {
  return (dispatch) => {
    dispatch(setPlaying())
    dispatch(queueNextMove(60))
  }
}

export function queueNextMove(movesRemaining) {
  return (dispatch) => {
    dispatch(addMove('.'))
    setTimeout(() => dispatch(queueNextMove(--movesRemaining)), 500)
  }
}
