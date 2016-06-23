import { App } from '../../containers/App';

describe('<App />', function () {
  describe('when todos exist', function () {
    var actions;
    beforeEach(() => actions = { loadTodos: sinon.spy() })

    it('should load todos', function () {
      const wrapper = shallow(<App actions={actions} />)
      expect(actions.loadTodos.calledOnce).to.be.true
    })

    it('should render todos', function () {
      const todos = [{ id: 1, text: 'Cool' }, { id: 2, text: 'Bob' }]
      const wrapper = shallow(<App todos={todos} actions={actions} />)
      expect(wrapper.html()).to.contain('Cool')
      expect(wrapper.html()).to.contain('Bob')
    })
  })
})
