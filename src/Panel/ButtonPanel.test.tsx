import React from 'react'
import { shallow } from 'enzyme'

import Subject, { ButtonPanelRow } from './ButtonPanel'

describe('button panel', () => {
  test('renders without throw', () => {
    expect(shallow(<Subject />).length).toBeTruthy()
  })

  test('renders 1 button', () => {
    const but = <button>hi</button>
    expect(shallow(
      <Subject>
        <ButtonPanelRow>
          {but}
        </ButtonPanelRow>
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

  test('renders 4 button in 2 rows', () => {
    const but1 = <button>hi</button>
    const but2 = <button>hello</button>
    const but3 = <button>ciao</button>
    const but4 = <button>bonjour</button>
    const element = (
      <Subject>
        <ButtonPanelRow>
          {[but1, but2]}
        </ButtonPanelRow>
        <ButtonPanelRow>
          {[but3, but4]}
        </ButtonPanelRow>
      </Subject>
    )
    expect(shallow(element).contains(but1)).toBeTruthy()
    expect(shallow(element).contains(but2)).toBeTruthy()
    expect(shallow(element).contains(but3)).toBeTruthy()
    expect(shallow(element).contains(but4)).toBeTruthy()
  })

  test('renders 2 row where 1 is empty', () => {
    const but1 = <button>hi</button>
    const but2 = <button>hello</button>
    const element = (
      <Subject>
        <ButtonPanelRow>
        </ButtonPanelRow>
        <ButtonPanelRow>
          {[but1, but2]}
        </ButtonPanelRow>
      </Subject>
    )
    expect(shallow(element).contains(but1)).toBeTruthy()
    expect(shallow(element).contains(but2)).toBeTruthy()
  })
})
