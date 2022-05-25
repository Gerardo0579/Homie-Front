import { Space, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from '../HomieReposListItem.module.css'

const { Text } = Typography

export interface HomieRepoItemDescriptionProps {
  is_forked: boolean
  fork_url?: string
  fork_name?: string
  description: string
}
export const HomieRepoItemDescription: FC<HomieRepoItemDescriptionProps> = ({
  is_forked,
  fork_url = '',
  fork_name = '',
  description
}) => {
  return (
    <Space direction="vertical">
      {is_forked && fork_name && (
        <Text className={styles.itemForkDetail}>
          Forked from{' '}
          <Link to={{ pathname: fork_url }} type="text" target="_blank">
            {fork_name}
          </Link>
        </Text>
      )}
      <Text className={styles.itemDescription}>{description}</Text>
    </Space>
  )
}
