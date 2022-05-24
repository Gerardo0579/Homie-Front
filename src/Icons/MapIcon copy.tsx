import { faCube } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const CubeIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faCube} keyIcon="fa Cube icon" text={text} />
}
