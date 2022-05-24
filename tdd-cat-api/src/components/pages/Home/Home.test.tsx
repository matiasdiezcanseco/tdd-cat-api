import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

describe('test Home', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
