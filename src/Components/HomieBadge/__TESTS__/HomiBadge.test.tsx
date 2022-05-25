import renderer from 'react-test-renderer'
import { HomieBadge } from '../HomieBadge'

const CONTENT: string = '1'
const BACKGROUND_COLOR: string = '#fff'
const BORDER_COLOR: string = '#AAA'
const FONT_COLOR: string = '#000'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HomieBadge
        content={CONTENT}
        backgroundColor={BACKGROUND_COLOR}
        borderColor={BORDER_COLOR}
        fontColor={FONT_COLOR}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
