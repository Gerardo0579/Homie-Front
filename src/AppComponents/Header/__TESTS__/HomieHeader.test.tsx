import { HomieHeader } from '../HomieHeader'
import { act, render, waitFor } from '@testing-library/react'

describe('Homie Header', () => {
  const setup = async () => {
    const c = render(<HomieHeader />)

    await waitFor(() => {
      expect(c.container).toBeInTheDocument()
    })

    return c
  }

  it('shows 5 menu items', async () => {
    const container = await setup()

    let items = await container.findAllByRole('menuitem')
    expect(items).toHaveLength(5)
  })

  it('shows 4 disabled items', async () => {
    const { container } = await setup()

    let length = await container.getElementsByClassName(
      'ant-menu-item-disabled'
    ).length

    expect(length).toBe(4)
  })
})
