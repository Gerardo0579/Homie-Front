import { faCodeFork } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const ForkIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faCodeFork} keyIcon="fa Fork icon" text={text} />
}
