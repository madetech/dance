import React from 'react'
global.React = React

import { expect } from 'chai'
global.expect = expect

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
global.mockStore = configureMockStore([thunk])

import { shallow, render } from 'enzyme'
global.shallow = shallow
global.render = render

import sinon from 'sinon'
global.sinon = sinon
