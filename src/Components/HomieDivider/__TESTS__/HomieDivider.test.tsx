import renderer from 'react-test-renderer'
import { HomieDivider } from '../HomieDivider'

it('renders correctly', () => {
  const tree = renderer.create(<HomieDivider />).toJSON()
  expect(tree).toMatchSnapshot()
})
