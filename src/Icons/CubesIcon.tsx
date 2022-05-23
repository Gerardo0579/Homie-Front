import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const CubesIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faCubes} keyIcon="fa Cubes icon" text={text} />
}
