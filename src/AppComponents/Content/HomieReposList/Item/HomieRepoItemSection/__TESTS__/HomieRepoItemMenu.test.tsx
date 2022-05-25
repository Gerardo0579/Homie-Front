import {
  act,
  fireEvent,
  getByRole,
  getByTestId,
  render
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomieRepoItemMenu } from '../HomieRepoItemMenu'
import { ReposListsItem } from '../../../../../../Types/ReposLists'
import { dummyRepoLists } from './Fixtures/DummyHeaderRepoList'

const getByClassName = async (c: HTMLElement, className: string) =>
  await c.getElementsByClassName(className)

describe('HomieRepoItemMenu', () => {
  const setup = (rest: {
    lists: ReposListsItem[]
    UpdateDropdownVisible: () => void
    showModal: () => void
  }) => {
    const container = render(
      HomieRepoItemMenu(rest.lists, rest.UpdateDropdownVisible, rest.showModal)
    )
    return container
  }
  const setup_WithDummyLists = (functions: {
    UpdateDropdownVisible: () => void
    showModal: () => void
  }) => {
    const params = {
      lists: dummyRepoLists.lists,
      UpdateDropdownVisible: functions.UpdateDropdownVisible,
      showModal: functions.showModal
    }
    const c = setup(params)
    return c
  }

  describe('Renders correctly', () => {
    const createFunctions = () => {
      const UpdateDropdownVisible = jest.fn
      const showModal = jest.fn
      const functions = {
        UpdateDropdownVisible: UpdateDropdownVisible,
        showModal: showModal
      }
      return { ...functions }
    }

    it('Menu', () => {
      const c = setup_WithDummyLists(createFunctions())

      expect(c.container).toBeInTheDocument()
    })

    it('Add list button', async () => {
      const c = setup_WithDummyLists(createFunctions())

      const btn = await getByClassName(c.container, 'createListBtn')

      expect(btn.length).toBe(1)
    })

    it('Lists', async () => {
      const c = setup_WithDummyLists(createFunctions())

      const items = await getByClassName(c.container, 'ant-checkbox-wrapper')

      expect(items.length).toBe(3)
    })
  })

  describe('Behave as expected', () => {
    const createFunctions = () => {
      const UpdateDropdownVisible = () => {}
      const showModal = () => {}
      const functions = {
        UpdateDropdownVisible: UpdateDropdownVisible,
        showModal: showModal
      }
      return { ...functions }
    }

    it('When add list button is clicked', async () => {
      const functions = createFunctions()
      jest.spyOn(functions, 'UpdateDropdownVisible')
      jest.spyOn(functions, 'showModal')

      const c = setup_WithDummyLists(functions)

      act(() => {
        const cardActions = c.getByTestId('createListBtn')
        fireEvent.click(cardActions)
      })

      expect(functions.UpdateDropdownVisible).toBeCalled()
      expect(functions.showModal).toBeCalled()

      expect(functions.UpdateDropdownVisible).toBeCalledTimes(1)
      expect(functions.showModal).toBeCalledTimes(1)
    })
  })
})
