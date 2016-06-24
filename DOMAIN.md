# Problem Domain

 - Run through react/redux app for a dance mat game
 - Run through problem Domain
 - Decide whether to:
   - Begin TDDing actions, or
   - Code slice through action and component

``` javascript
state = { dance: { playing: false,
                   moves: [],
                   score: 0 } }

const playTrack = () ->
  state.playing = true
  state.moves = []
  queueNextMove(60)

const queueNextMove = (movesLeft) ->
  if noMovesLeft(movesLeft)
    finishTrack()
  else
    state.moves.push(randomMove)
    setTimeout queueNextMove(--movesLeft)

const move = (move) ->
  const lastMove = state.moves[state.moves.length - 1]
  if withinTime(lastMove)
    lastMove.success = true

const finishTrack = () ->
  state.score = calculatesScore()
  state.playing = false
```
