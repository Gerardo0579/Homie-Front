import { HomieSider } from '../HomieSider'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MockUserDataDummy } from './Fixtures/UserDataDummy'
import AxiosHooksMock from 'axios-hooks-mock'
import useAxios from 'axios-hooks'

jest.mock('axios-hooks')

const DUMY_USERNAME = 'dummy'

describe('Homie Sider', () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <HomieSider />
      </BrowserRouter>
    )
  }

  it.skip('renders correctly', () => {
    const reload = jest.fn()

    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
