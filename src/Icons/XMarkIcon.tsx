import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const XMarkIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faXmark} keyIcon="fa Xmark icon" text={text} />
}
