import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Space } from 'antd'
import React, { FC } from 'react'

interface HomieIconProps {
  icon: IconProp
  text: string | number
  key: string
}

export interface IconProps {
  text: string | number
}

export const HomieIcon: FC<HomieIconProps> = ({ icon, key, text = '' }) => (
  <Space key={key}>
    <FontAwesomeIcon icon={icon} />
    {text}
  </Space>
)
