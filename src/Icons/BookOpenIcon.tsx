import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const BookOpenIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faBookOpen} keyIcon="fa BookOpen icon" text={text} />
}
