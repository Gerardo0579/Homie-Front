import renderer from 'react-test-renderer'
import { HomieLoading } from '../HomieLoading'

const CONTENT: string = '1'

it('renders correctly', () => {
  const tree = renderer.create(<HomieLoading tip={CONTENT} />).toJSON()
  expect(tree).toMatchSnapshot()
})
