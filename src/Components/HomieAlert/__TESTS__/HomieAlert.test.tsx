import renderer from 'react-test-renderer'
import { HomieAlert } from '../HomieAlert'

const TEST_MESSAGE: string = 'test message'
const TEST_STATUS: 'success' | 'warning' | 'info' | 'error' = 'success'

it('renders correctly', () => {
  const tree = renderer
    .create(<HomieAlert message={TEST_MESSAGE} status={TEST_STATUS} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
