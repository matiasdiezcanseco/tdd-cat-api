import { render } from '@testing-library/react'
import CatList from './CatList'

describe('test CatList', () => {
  test('should show list', () => {
    const { container } = render(<CatList />)
    expect(container).toMatchSnapshot()
  })
})
