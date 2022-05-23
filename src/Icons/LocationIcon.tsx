import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const LocationIcon: FC<IconProps> = ({ text }) => {
  return (
    <HomieIcon icon={faLocationDot} keyIcon="fa Location icon" text={text} />
  )
}
