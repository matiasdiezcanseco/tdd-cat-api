import { render, screen } from '@testing-library/react'
import CatDisplay from './CatDisplay'

const cat = {
  name: 'Abyssinian',
  url: 'https://cdn2.thecatapi.com/images/p6x60nX6U.jpg',
  height: 774,
  width: 1032,
}

describe('test CatDisplay', () => {
  test('should show name ', () => {
    render(<CatDisplay cat={cat} />)
    expect(screen.getByText('Abyssinian')).toBeVisible()
  })

  test('should show image ', () => {
    render(<CatDisplay cat={cat} />)
    expect(screen.getByRole('img')).toBeVisible()
  })
})
