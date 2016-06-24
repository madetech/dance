
import { handleActions } from 'redux-actions'

const initialState = {
  playing: false,
  moves: [],
  score: 0
}

export default handleActions({
  'set playing' (state, action) {
    return { ...state, playing: true }
  },
  'add move' (state, action) {
    return { ...state, moves: [...state.moves, action.payload] }
  },
}, initialState)
