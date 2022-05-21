import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const MailIcon: FC<IconProps> = ({ text }) => {
  return <HomieIcon icon={faEnvelope} key="fa Mail icon" text={text} />
}
