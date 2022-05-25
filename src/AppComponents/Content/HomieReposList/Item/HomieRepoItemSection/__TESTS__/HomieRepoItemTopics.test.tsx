import { getAllByRole, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomieRepoItemTopics } from '../HomieRepoItemTopics'
import { dummyTopics } from './Fixtures/DummyTopics'

const getByClassName = async (c: HTMLElement, className: string) =>
  await c.getElementsByClassName(className)

describe('HomieRepoItemTopics', () => {
  const setup = (topics: string[]) => {
    const container = render(
      <BrowserRouter>
        <HomieRepoItemTopics topics={topics} />
      </BrowserRouter>
    )
    return container
  }

  const setup_WithTopics = () => {
    const c = setup(dummyTopics)
    return c
  }

  describe('Renders correctly', () => {
    it('Topics', () => {
      const c = setup_WithTopics()

      expect(c.container).toBeInTheDocument()
    })

    it('Link', async () => {
      const { container } = setup_WithTopics()

      let links = await getAllByRole(container, 'link')

      expect(links.length).toBe(dummyTopics.length)
    })
  })
})
