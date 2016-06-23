import TodoTextInput from '../../components/TodoTextInput';

describe('<TodoTextInput />', function () {
  describe('when adding todo', function () {
    it('should call onSave', function () {
      const text = 'Cool'
      const onSave = sinon.spy()
      const wrapper = shallow(<TodoTextInput onSave={onSave} />)
      wrapper.simulate('keyDown', { which: 13, target: { value: text } })
      expect(onSave.calledWith(text)).to.be.true
    })
  })
})
