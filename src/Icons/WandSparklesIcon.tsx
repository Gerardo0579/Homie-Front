import { faWandSparkles } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const WandSparklesIcon: FC<IconProps> = ({ text }) => {
  return (
    <HomieIcon
      icon={faWandSparkles}
      key="fa WandSparfaWandSparkles icon"
      text={text}
    />
  )
}
