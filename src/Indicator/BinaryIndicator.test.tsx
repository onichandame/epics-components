import React from 'react'
import { shallow } from 'enzyme'

import Subject from './BinaryIndicator'

describe('binary indicator', () => {
  test('renders without crashing', () => {
    expect(shallow(<Subject label={'normal'} value={true}/>).contains('⬤')).toBeTruthy()
  })
})
