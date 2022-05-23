import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { HomieIcon, IconProps } from './HomieIcon'

export const BalanceIcon: FC<IconProps> = ({ text }) => {
  return (
    <HomieIcon icon={faScaleBalanced} keyIcon="fa Balance icon" text={text} />
  )
}
