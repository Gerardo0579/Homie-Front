import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const StarIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faStar} key="fa Star icon" text={text} />
}
