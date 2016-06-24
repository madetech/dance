import { playTrack } from '../../../actions/dance'
import configure from '../../../store'

describe('Playing track', function () {
  describe('when game is not started', function () {
    it('should not be playing track', function () {
      const store = configure({})
      expect(store.getState().dance.playing).to.be.false
    })
  })

  describe('when game is started', function () {
    it('should be playing track', function (done) {
      const store = configure({})

      store.subscribe(function () {
        expect(store.getState().dance.playing).to.be.true
      })

      setTimeout(done, 300)
      store.dispatch(playTrack())
    })
  })
})
