import { Space } from 'antd'
import { FC } from 'react'
import { HomieBadge } from '../../Badge/HomieBadge'

interface HomieRepoHeaderProps {
  repo_name: string
  repo_url: string
  type: string
}
export const HomieRepoHeader: FC<HomieRepoHeaderProps> = (item) => {
  return (
    <Space>
      <a href={item.repo_url}>{item.repo_name}</a>
      <HomieBadge content={item.type} />
    </Space>
  )
}
