import { loadTodos } from '../../../actions/todos'
import configure from '../../../store'

describe('Loading todos', function () {
  describe('when no todos exist', function () {
    it('should load todos', function (done) {
      const store = configure({})

      store.subscribe(function () {
        const { text } = store.getState().todos[0]
        expect(text).to.contain('Use Redux with thunk')
        done()
      })

      store.dispatch(loadTodos())
    })
  })
})
