import { Space, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const { Text } = Typography

interface HomieRepoDescriptionProps {
  is_forked: boolean
  fork_url: string
  fork_name: string
  description: string
}
export const HomieRepoDescription: FC<HomieRepoDescriptionProps> = (item) => {
  return (
    <Space direction="vertical">
      {item.is_forked && (
        <Text>
          Forked from
          <Link to={item.fork_url}>{item.fork_name}</Link>
        </Text>
      )}
      <Text>{item.description}</Text>
    </Space>
  )
}
