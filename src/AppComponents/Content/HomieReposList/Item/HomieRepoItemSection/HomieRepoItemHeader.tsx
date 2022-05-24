import { Space } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { HomieBadge } from '../../../../../Components/HomieBadge/HomieBadge'
import styles from '../HomieReposListItem.module.css'

interface HomieRepoItemHeaderProps {
  repo_name: string
  repo_url: string
  type: string
}
export const HomieRepoItemHeader: FC<HomieRepoItemHeaderProps> = (item) => {
  return (
    <Space>
      <Link
        className={styles.repoTitle}
        to={{ pathname: item.repo_url }}
        type="text"
        target="_blank">
        {item.repo_name}
      </Link>
      <HomieBadge
        borderColor="#d0d7de"
        backgroundColor="#fff"
        fontColor="#57606a"
        content={item.type}
      />
    </Space>
  )
}
