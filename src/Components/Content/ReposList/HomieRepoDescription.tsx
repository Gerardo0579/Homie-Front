import { Space, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const { Text } = Typography

interface HomieRepoDescriptionProps {
  is_forked: boolean
  fork_url?: string
  fork_name?: string
  description: string
}
export const HomieRepoDescription: FC<HomieRepoDescriptionProps> = ({
  is_forked,
  fork_url = '',
  fork_name = '',
  description
}) => {
  return (
    <Space direction="vertical">
      {is_forked && fork_name && (
        <Text>
          Forked from <Link to={fork_url}>{fork_name}</Link>
        </Text>
      )}
      <Text>{description}</Text>
    </Space>
  )
}
