import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const StarSolidIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faStar} keyIcon="fa Star Solid icon" text={text} />
}
