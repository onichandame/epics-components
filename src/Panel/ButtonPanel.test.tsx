import React from 'react'
import { shallow } from 'enzyme'

import Subject from './ButtonPanel'

describe('button panel', () => {
  test('renders without throw', () => {
    expect(shallow(<Subject />).length).toBeTruthy()
  })

  test('renders 1 button', () => {
    const but = <button>hi</button>
    expect(shallow(
      <Subject>
        {but}
      </Subject>
    ).contains(but)).toBeTruthy()
  })

  test('renders 2 button', () => {
    const but1 = <button>hi</button>
    const but2 = <button>hello</button>
    const element = <Subject>{[but1, but2]}</Subject>
    expect(shallow(element).contains(but1)).toBeTruthy()
    expect(shallow(element).contains(but2)).toBeTruthy()
  })
})
