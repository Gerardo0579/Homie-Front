import { Space } from 'antd'
import { FC } from 'react'
import styles from './HomieLanguageItem.module.css'

interface HomieLanguageItemProps {
  Content: string
  CircleColor: string
}

export const HomieLanguageItem: FC<HomieLanguageItemProps> = ({
  Content,
  CircleColor
}) => {
  return (
    <Space>
      <div
        className={styles.LanguageCircle}
        style={{ backgroundColor: CircleColor }}
      />
      <div>{Content}</div>
    </Space>
  )
}
