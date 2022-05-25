import { HomieFooter } from '../HomieFooter'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Homie Footer', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <HomieFooter />
      </BrowserRouter>
    )
  }
  it('renders correctly', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  it('shows 12 footer items', () => {
    const container = setup()

    expect(container.getAllByRole('link')).toHaveLength(12)
  })
})
