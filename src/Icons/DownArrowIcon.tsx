import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const DownArrowIcon: FC<IconProps> = ({ text }) => {
  return (
    <HomieIcon icon={faCaretDown} keyIcon="fa CaretDown icon" text={text} />
  )
}
