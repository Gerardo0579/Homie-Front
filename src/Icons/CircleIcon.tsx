import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const CircleIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faCircle} key="fa Circle icon" text={text} />
}
