import { loadTodos } from '../../../actions/todos'

describe('Loading todos', function () {
  describe('when no todos exist', function () {
    it('should load todos', function (done) {
      const store = mockStore({})

      store.subscribe(function () {
        expect(store.getActions()[0]).to.contain({ type: 'add todo' })
        done()
      })

      store.dispatch(loadTodos())
    })
  })
})
