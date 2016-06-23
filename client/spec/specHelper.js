import React from 'react'
global.React = React

import { expect } from 'chai'
global.expect = expect

import { shallow, render } from 'enzyme'
global.shallow = shallow
global.render = render

import sinon from 'sinon'
global.sinon = sinon

global.window = {}
