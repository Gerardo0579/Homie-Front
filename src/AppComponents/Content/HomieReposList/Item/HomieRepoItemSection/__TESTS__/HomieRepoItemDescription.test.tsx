import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  HomieRepoItemDescription,
  HomieRepoItemDescriptionProps
} from '../HomieRepoItemDescription'
import { dummyDescription } from './Fixtures/DummyDescription'

const getByClassName = async (c: HTMLElement, className: string) =>
  await c.getElementsByClassName(className)

describe('HomieRepoItemDescription', () => {
  const setup = (dummyDescription: HomieRepoItemDescriptionProps) => {
    const container = render(
      <BrowserRouter>
        <HomieRepoItemDescription {...dummyDescription} />
      </BrowserRouter>
    )
    return container
  }

  const setup_WithForkInfo = () => {
    return setup(dummyDescription)
  }

  const setup_WithoutForkInfo = () => {
    const dummyModifiedInfo = dummyDescription
    dummyModifiedInfo.is_forked = false
    return setup(dummyModifiedInfo)
  }

  it('Renders successfully', () => {
    const c = setup_WithForkInfo()

    expect(c.container).toBeInTheDocument()
  })

  it('Renders description and fork info', async () => {
    const { container } = setup_WithForkInfo()

    let fork = await getByClassName(container, 'itemForkDetail')
    let description = await getByClassName(container, 'itemDescription')

    expect(fork.length).toBe(1)
    expect(description.length).toBe(1)
  })

  it('Renders description and NO render fork info', async () => {
    const { container } = setup_WithoutForkInfo()

    let fork = await getByClassName(container, 'itemForkDetail')
    let description = await getByClassName(container, 'itemDescription')

    expect(fork.length).toBe(0)
    expect(description.length).toBe(1)
  })
})
