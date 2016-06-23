import { expect } from 'chai'
global.expect = expect

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
global.mockStore = configureMockStore([thunk])
