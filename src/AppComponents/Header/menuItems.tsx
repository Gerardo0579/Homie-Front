import { BookBookmarkIcon } from '../../Icons/BookMarkIcon'
import { BookOpenIcon } from '../../Icons/BookOpenIcon'
import { MapIcon } from '../../Icons/MapIcon'
import { CubeIcon } from '../../Icons/MapIcon copy'
import { StarIcon } from '../../Icons/StarIcon'

export interface MenuItemProps {
  Icon: JSX.Element
  Key: string
  isDisabled: boolean
}
export const MenuItems: MenuItemProps[] = [
  { Icon: <BookOpenIcon text="Overview" />, Key: 'Overview', isDisabled: true },
  {
    Icon: <BookBookmarkIcon text="Repositories" />,
    Key: 'Repositories',
    isDisabled: false
  },
  { Icon: <MapIcon text="Projects" />, Key: 'Projects', isDisabled: true },
  { Icon: <CubeIcon text="Packages" />, Key: 'Packages', isDisabled: true },
  { Icon: <StarIcon text="Stars" />, Key: 'Stars', isDisabled: true }
]
