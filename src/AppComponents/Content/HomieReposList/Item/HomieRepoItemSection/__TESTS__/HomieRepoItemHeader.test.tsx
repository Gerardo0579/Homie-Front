import { getByText, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  HomieRepoItemHeader,
  HomieRepoItemHeaderProps
} from '../HomieRepoItemHeader'
import { dummyHeader } from './Fixtures/DummyHeader'

describe('HomieRepoItemHeader', () => {
  const setup = () => {
    const container = render(
      <BrowserRouter>
        <HomieRepoItemHeader {...dummyHeader} />
      </BrowserRouter>
    )
    return container
  }

  it('Renders successfully', () => {
    const c = setup()

    expect(c.container).toBeInTheDocument()
  })

  it('Renders content correctly', async () => {
    const { container } = setup()

    let Header = await getByText(container, dummyHeader.repo_name)

    expect(Header).toBeInTheDocument()
  })
})
