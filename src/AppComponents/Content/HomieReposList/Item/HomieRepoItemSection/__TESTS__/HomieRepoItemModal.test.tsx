import { act, fireEvent, render, RenderResult } from '@testing-library/react'
import React from 'react'
import { createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainStore } from '../../../../../../Stores/MainStore'
import HomieRepoItemModal from '../HomieRepoItemModal'
import { defineWatchMedia } from './helpers/defineWatchMedia'
import { getMainStore } from './helpers/getMainStore'

const createFunction = () => {
  const func = { handleCancel: jest.fn }
  return { ...func }
}

type renderResponseType = RenderResult<
  typeof import('/home/gerardo0579/repos/homie/Homie-Front/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries'),
  HTMLElement
>

type renderRespWithParams = {
  c: renderResponseType
  cancelFn: { handleCancel: typeof jest.fn }
  store: MainStore
}

describe('HomieRepoItemModal', () => {
  const setup = (
    store: MainStore,
    cancelFn: { handleCancel: typeof jest.fn }
  ): renderResponseType => {
    jest.spyOn(cancelFn, 'handleCancel')
    const StoreContext = createContext<MainStore>(store)
    defineWatchMedia()

    return render(
      <BrowserRouter>
        <React.StrictMode>
          <StoreContext.Provider value={store}>
            <HomieRepoItemModal
              repoId={123}
              handleCancel={cancelFn.handleCancel}
              isModalVisible={true}
            />
          </StoreContext.Provider>
        </React.StrictMode>
      </BrowserRouter>
    )
  }

  const setup_WithParams = (): renderRespWithParams => {
    const cancelFn = createFunction()
    const store = getMainStore()
    const c = setup(store, cancelFn)

    return { c: c, store: store, cancelFn: cancelFn }
  }

  describe('Renders correctly', () => {
    it('Modal', async () => {
      const { c } = setup_WithParams()

      expect(c.container).toBeInTheDocument()
    })

    it('Form', async () => {
      const { c } = setup_WithParams()

      const inputs = c.getAllByRole('textbox')

      expect(inputs.length).toBe(2)
    })

    it('Disabled main button', async () => {
      const { c } = setup_WithParams()

      const buttons = c.getAllByRole('button')
      const btn = buttons[1]

      expect(btn).toBeDisabled()
    })

    it('close X button', async () => {
      const { c } = setup_WithParams()

      const buttons = c.getAllByRole('button')
      const btn = buttons[0]

      expect(btn).toHaveClass('ant-modal-close')
    })
  })

  describe('Work as expected', () => {
    const fillInputs = async (c: renderResponseType) => {
      const inputs = c.getAllByRole('textbox')
      await act(async () => {
        inputs.forEach(async (btn) => {
          fireEvent.change(btn, { target: { value: 'Hello world' } })
        })
      })

      expect(inputs[0]).toHaveValue('Hello world')
      expect(inputs[1]).toHaveValue('Hello world')
    }

    it('When close btn is pressed', async () => {
      const { c, cancelFn } = setup_WithParams()

      const buttons = c.getAllByRole('button')
      const closeBtn = buttons[0]
      await act(async () => {
        fireEvent.click(closeBtn)
      })

      expect(cancelFn.handleCancel).toBeCalled()
      expect(cancelFn.handleCancel).toBeCalledTimes(1)
    })

    it('When name input is used', async () => {
      const { c } = setup_WithParams()

      const input = c.getAllByRole('textbox')
      await act(async () => {
        fireEvent.change(input[0], { target: { value: 'Hello world' } })
      })

      expect(input[0]).toHaveValue('Hello world')
    })

    it('When description input is used', async () => {
      const { c } = setup_WithParams()

      const inputs = c.getAllByRole('textbox')
      await act(async () => {
        fireEvent.change(inputs[1], { target: { value: 'Hello world' } })
      })

      expect(inputs[1]).toHaveValue('Hello world')
    })

    it('When inputs are filled, main button is activated', async () => {
      const { c } = setup_WithParams()

      await fillInputs(c)

      const buttons = await c.getAllByRole('button')
      const btn = buttons[1]
      expect(btn).not.toBeDisabled()
    })
  })
})
