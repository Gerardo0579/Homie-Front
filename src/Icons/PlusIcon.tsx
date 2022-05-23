import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const PlusIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faPlus} keyIcon="fa Plus icon" text={text} />
}
