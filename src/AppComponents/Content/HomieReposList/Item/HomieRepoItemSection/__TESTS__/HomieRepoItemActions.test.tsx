import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomieRepoItemActions } from '../HomieRepoItemActions'
import { dummyActions } from './Fixtures/DummyActions'

describe('HomieRepoItemActions', () => {
  const setup = () => {
    const container = render(
      <BrowserRouter>
        <HomieRepoItemActions {...dummyActions} />
      </BrowserRouter>
    )
    return container
  }
  it('Renders successfully', () => {
    const c = setup()

    expect(c.container).toBeInTheDocument()
  })

  it('Renders actions', () => {
    const c = setup()

    expect(c.getAllByTestId('actionLink')).toHaveLength(5)
  })
})
