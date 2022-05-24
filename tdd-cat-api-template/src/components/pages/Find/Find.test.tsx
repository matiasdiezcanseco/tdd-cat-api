import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { mockCat } from './__mocks__/mocks'
import Find from './Find'
import * as catApi from '../../../services/CatApi/CatApi'

describe('test Find', () => {
  test('should show cat after api is called ', async () => {})
})
