import { playTrack } from '../../../actions/dance'
import configure from '../../../store'

describe('Queue Next Move', function () {
  describe('when game is started', function () {
    it('should queue a move', function () {
      const store = configure({})
      store.dispatch(playTrack())
      expect(store.getState().dance.moves).to.have.length(1)
    })

    it('should queue moves every second', function (done) {
      const store = configure({})
      store.dispatch(playTrack())

      setTimeout(function () {
        expect(store.getState().dance.moves).to.have.length(3)
        done();
      }, 1500)
    })
  })
})
