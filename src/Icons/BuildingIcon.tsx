import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const BuildingIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faBuilding} key="fa building icon" text={text} />
}
