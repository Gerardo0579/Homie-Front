import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const GithubIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faGithub} keyIcon="fa Github icon" text={text} />
}
