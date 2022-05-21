import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const LinkIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faLink} key="fa Link icon" text={text} />
}
