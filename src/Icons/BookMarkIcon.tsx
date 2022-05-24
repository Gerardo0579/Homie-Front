import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const BookBookmarkIcon: FC<IconProps> = ({ text }) => {
  return (
    <HomieIcon
      icon={faBookBookmark}
      keyIcon="fa BookBookmark icon"
      text={text}
    />
  )
}
