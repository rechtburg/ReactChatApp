import { shallow } from 'enzyme'
import * as React from 'react'

import Hello from '../components/Hello'

describe('Hello Component', () => {
  test('<Hello />', () => {
    const hello = shallow(<Hello />)
    expect(hello.find('h1').text()).toBe('Hello World!')
  })
})
