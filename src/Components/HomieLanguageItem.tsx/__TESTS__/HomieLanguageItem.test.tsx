import renderer from 'react-test-renderer'
import { HomieLanguageItem } from '../HomieLanguageItem'

const CONTENT: string = '1'
const CIRCLE_COLOR: string = '#fff'

it('renders correctly', () => {
  const tree = renderer
    .create(<HomieLanguageItem CircleColor={CONTENT} Content={CIRCLE_COLOR} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
