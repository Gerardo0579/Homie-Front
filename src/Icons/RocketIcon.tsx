import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const RocketIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faRocket} keyIcon="fa Rocket icon" text={text} />
}
