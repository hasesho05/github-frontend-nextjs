import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render title text', () => {
  //Homeをimport,renderして要素を取得、"Next.js!"が存在するかをテストする
  render(<Home />)
  expect(screen.getByText('Next.js!')).toBeInTheDocument()
})