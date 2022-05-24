import { faMap } from '@fortawesome/free-regular-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const MapIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faMap} keyIcon="fa Map icon" text={text} />
}
